---
title: Using DataConnect with Docker
---

# Using the DataConnect Engine with a Docker Container

This documentation provides step-by-step instructions to set up and use the Actian Dataconnect Engine with a Docker container. In this example, we demonstrate integration with a JBoss container, but the steps can be applied to other containers as well.

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

For example, JBoss runs with UID 1000 and GID 1000. Update these values as needed for your target container.

```
docker run --rm -v engine_data:/opt/Actian/engine busybox chown -R 1000:1000 /opt/Actian/engine
```

### Step 4: Start the Target Container

Run your target container and mount the shared volume.

Example with JBoss:

```
docker run -d -p 8080:8080 -p 9990:9990 -v engine_data:/opt/Actian/engine --name jboss jboss/wildfly
```

Once the container is started, you can access engine-related files in `/opt/Actian/engine`.

Example:

![](/img/dataconnect-engine-example.png)

## Alternative: Using Docker Compose

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
  jboss:
    image: jboss/wildfly
    container_name: jboss
    ports:
      - "8080:8080"
      - "9990:9990"
    depends_on:
      dc-engine:
        condition: service_completed_successfully
    volumes:
      - engine_data:/opt/Actian/engine
    environment:
      - JAVA_OPTS=-Djboss.bind.address=0.0.0.0
    restart: unless-stopped
volumes:
  engine_data:
    name: engine_data
```

Start the container using the following command:

```
docker compose up -d
```