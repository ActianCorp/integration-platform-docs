---
title: Using DataConnect with Docker
---

# Using the DataConnect Engine with a Docker Container

This documentation provides step-by-step instructions to set up and use the Actian Dataconnect Engine alongside other containers, using three different approaches: manual setup, using a Dockerfile, and using Docker Compose.

:::note
In order to use the Actian Dataconnect Engine Docker image, you must accept the Actian End User License Agreement (EULA) by including `ACCEPT_ACTIAN_EULA=Y` as described below.
:::

## Manual Setup

### Step 1: Create a Docker Volume

The shared volume will be used by both the DataConnect engine and the target container.

```
docker volume create engine_data
```

### Step 2: Run the DataConnect Engine

Start the Dataconnect engine container with the created volume. It will extract the engine-related files/folder on the shared volume. 

```
docker run --user root -e ACCEPT_ACTIAN_EULA=Y --entrypoint /script.sh -v engine_data:/opt/Actian/engine actian/dataconnect-engine:12.4.0-36
```

### Step 3: Change Ownership of the Volume

If your target container runs with a specific UID and GID, update the volume ownership.

In this example, the container runs with UID 1000 and GID 1000. Update these values as needed for your target container.

```
docker run --rm -v engine_data:/opt/Actian/engine busybox chown -R 1000:1000 /opt/Actian/engine
```

### Step 4: Start the Target Container

Run your target container and mount the shared volume, `cosmos.ini`, and `cosmos.slc`:

```
docker run --user 1000:1000 -d -v engine_data:/opt/Actian/engine -v C:\Users\vsingh\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc -v C:\Users\vsingh\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini debian:bullseye-slim bash -c "tail -f /dev/null"
```

### Step 5: Set the Environment Variable

Access the container and execute the following commands:

```
export PATH="/opt/Actian/engine/runtime/di9:${PATH}"
export LD_LIBRARY_PATH="/opt/Actian/engine/runtime/di9:${LD_LIBRARY_PATH}"
export DJLIB="/opt/Actian/config"
```

**Note**: Once the container is started, check the engine version using `djengine -V`. Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual application command as needed.
* Always ensure correct UID:GID matching between the engine volume and target containers.

## Using a Dockerfile

```
FROM actian/dataconnect-engine:12.4.0-36 AS builder
FROM debian:bullseye-slim AS runtime
# Install minimal dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    curl \
    unzip \
    file \
 && rm -rf /var/lib/apt/lists/*
RUN groupadd -r test --gid 1000 && \
    useradd -m -r -u 1000 -g test -s /bin/bash test
RUN mkdir -p /opt/Actian/engine && \
    chown -R test:test /opt/Actian/engine
COPY --from=builder /tmp/actian/engine /tmp/actian/engine
COPY --from=builder /script.sh /script.sh
# Set permissions and make script executable
RUN chmod +x /script.sh && chown test:test /script.sh
# Set environment variables
ENV PATH="/opt/Actian/engine/runtime/di9:${PATH}" \
    LD_LIBRARY_PATH="/opt/Actian/engine/runtime/di9:${LD_LIBRARY_PATH}" \
    DJLIB="/opt/Actian/config"
WORKDIR /
USER test:test
ENTRYPOINT ["/bin/bash", "-c", "\
    /script.sh && \
    djengine -V && \
    echo 'Custom container started.' && \
    tail -f /dev/null"]
```

Build the image by running the following command in the same directory where the Dockerfile exists:

```
docker build -t custom-app .
```

Start the container using the following command:

```
docker run -e "ACCEPT_ACTIAN_EULA=Y" -v C:\Users\vsingh\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc -v C:\Users\vsingh\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini custom-app
```

**Note**: Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual app command as needed.


## Using Docker Compose

Instead of running the above commands manually, you can use the `docker-compose.yaml` file to set up dataconnect-engine and your target container together. 

Example:

**docker-compose.yaml**

```
services:
  dc-engine:
    image: actian/dataconnect-engine:12.4.0-36
    container_name: dataconnect-engine
    command: ["sh","-c","/script.sh && chown -R 1000:1000 /opt/Actian/engine"]
    user: "root"
    environment:
      - ACCEPT_ACTIAN_EULA=Y
    volumes:
      - engine_data:/opt/Actian/engine
    restart: "no"
  custom-app:
    image: debian:bullseye-slim
    container_name: custom-app
    ports:
      - "8080:8080"
      - "9990:9990"
    depends_on:
      dc-engine:
        condition: service_completed_successfully
    user: "1000:1000"
    volumes:
      - engine_data:/opt/Actian/engine
      - C:\Users\vsingh\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini
      - C:\Users\vsingh\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc      
    environment:
      - JAVA_OPTS=-Djboss.bind.address=0.0.0.0
      - LD_LIBRARY_PATH=/opt/Actian/engine/runtime/di9:$LD_LIBRARY_PATH
      - DJLIB=/opt/Actian/config
      - PATH=/opt/Actian/engine/runtime/di9:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    restart: unless-stopped
    command: ["sh","-c","djengine -V && tail -f /dev/null"]
volumes:
  engine_data:
    name: engine_data
```

Start the container using the following command:

```
docker compose up -d
```

**Note**: Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual application command as needed.
* Always ensure correct UID:GID matching between the engine volume and target containers.

