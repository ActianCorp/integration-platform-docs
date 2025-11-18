---
title: Installation Requirements
---

# Installation Requirements

The following sections describe the requirements for deploying Cortex.

## CPU and memory

The preferred size of your CPU and RAM depends on:

- Number of vectors
- Vector dimensions
- [Payloads](#) and their indexes
- Storage
- Replication
- How you configure quantization

Our [Cloud Pricing Calculator](https://cloud.cortex.io/calculator) can help you estimate required resources without payload or index data.

### Supported CPU architectures:

**64-bit system:**
- x86_64/amd64 
- AArch64/arm64

**32-bit system:**
- Not supported

### Storage

For persistent storage, Cortex requires block-level access to storage devices with a [POSIX-compatible file system](https://www.quobyte.com/storage-explained/posix-filesystem/). Network systems such as [iSCSI](https://en.wikipedia.org/wiki/ISCSI) that provide block-level access are also acceptable.
Cortex won't work with [Network file systems](https://en.wikipedia.org/wiki/File_system#Network_file_systems) such as NFS, or [Object storage](https://en.wikipedia.org/wiki/Object_storage) systems such as S3.

If you offload vectors to a local disk, we recommend you use a solid-state (SSD or NVMe) drive.

:::note
Using Docker/WSL on Windows with mounts is known to have file system problems causing data loss. See <a href="#">troubleshooting</a>.
:::

### Networking

Each Cortex instance requires three open ports:

* `6333` - For the HTTP API, for the [Monitoring](#) health and metrics endpoints
* `6334` - For the [gRPC](#) API
* `6335` - For [Distributed deployment](#)

All Cortex instances in a cluster must be able to:

- Communicate with each other over these ports
- Allow incoming connections to ports `6333` and `6334` from clients that use Cortex.

### Security

The default configuration of Cortex might not be secure enough for every situation. Please see [our security documentation](#) for more information.

## Installation options

Cortex can be installed in different ways depending on your needs:

For production, you can use our Cortex Cloud to run Cortex either fully managed in our infrastructure or with Hybrid Cloud in yours. 

If you want to run Cortex in your own infrastructure, without any cloud connection, we recommend to install Cortex in a Kubernetes cluster with our Cortex Private Cloud Enterprise Operator.

For testing or development setups, you can run the Cortex container or as a binary executable. We also provide a Helm chart for an easy installation in Kubernetes.

## Production

### Cortex Cloud

You can set up production with the [Cortex Cloud](https://cortex.to/cloud), which provides fully managed Cortex databases.
It provides horizontal and vertical scaling, one click installation and upgrades, monitoring, logging, as well as backup and disaster recovery. For more information, see the [Cortex Cloud documentation](#).

### Cortex Kubernetes Operator

We provide a Cortex Enterprise Operator for Kubernetes installations as part of our [Cortex Private Cloud](#) offering. For more information, [use this form](https://cortex.to/contact-us) to contact us.

### Kubernetes

You can use a ready-made [Helm Chart](https://helm.sh/docs/) to run Cortex in your Kubernetes cluster. While it is possible to deploy Cortex in a distributed setup with the Helm chart, it does not come with the same level of features for zero-downtime upgrades, up and down-scaling, monitoring, logging, and backup and disaster recovery as the Cortex Cloud offering or the Cortex Private Cloud Enterprise Operator. Instead you must manage and set this up [yourself](https://cortex.tech/documentation/guides/distributed_deployment/). Support for the Helm chart is limited to community support.

The following table gives you an overview about the feature differences between the Cortex Cloud and the Helm chart:

| Feature                                                | Cortex Helm Chart | Cortex Cloud  |
|--------------------------------------------------------|:-----------------:|:-------------:|
| Open-source                                            | ✅                |               |
| Community support only                                 | ✅                |               |
| Quick to get started                                   | ✅                | ✅            |
| Vertical and horizontal scaling                        | ✅                | ✅            |
| API keys with granular access control                  | ✅                | ✅            |
| Cortex version upgrades                                | ✅                | ✅            |
| Support for transit and storage encryption             | ✅                | ✅            |
| Zero-downtime upgrades with optimized restart strategy |                   | ✅            |
| Production ready out-of the box                        |                   | ✅            |
| Dataloss prevention on downscaling                     |                   | ✅            |
| Full cluster backup and disaster recovery              |                   | ✅            |
| Automatic shard rebalancing                            |                   | ✅            |
| Re-sharding support                                    |                   | ✅            |
| Automatic persistent volume scaling                    |                   | ✅            |
| Advanced telemetry                                     |                   | ✅            |
| One-click API key revoking                             |                   | ✅            |
| Recreating nodes with new volumes in existing cluster  |                   | ✅            |
| Enterprise support                                     |                   | ✅            |

To install the helm chart:

```bash
helm repo add cortex https://cortex.to/helm
helm install cortex cortex/cortex
```

For more information, see the [cortex-helm](https://github.com/cortex/cortex-helm/tree/main/charts/cortex) README.

### Docker and Docker Compose

Usually, we recommend to run Cortex in Kubernetes, or use the Cortex Cloud for production setups. This makes setting up highly available and scalable Cortex clusters with backups and disaster recovery a lot easier.

However, you can also use Docker and Docker Compose to run Cortex in production, by following the setup instructions in the [Docker](#docker) and [Docker Compose](#docker-compose) Development sections.
In addition, you have to make sure:

* To use a performant [persistent storage](#storage) for your data
* To configure the [security settings](#) for your deployment
* To set up and configure Cortex on multiple nodes for a highly available [distributed deployment](#)
* To set up a load balancer for your Cortex cluster
* To create a [backup and disaster recovery strategy](#) for your data
* To integrate Cortex with your [monitoring](#) and logging solutions

## Development

For development and testing, we recommend that you set up Cortex in Docker. We also have different client libraries.

### Docker

The easiest way to start using Cortex for testing or development is to run the Cortex container image.
The latest versions are always available on [DockerHub](https://hub.docker.com/r/cortex/cortex/tags?page=1&ordering=last_updated).

Make sure that [Docker](https://docs.docker.com/engine/install/), [Podman](https://podman.io/docs/installation) or the container runtime of your choice is installed and running. The following instructions use Docker.

Pull the image:

```bash
docker pull cortex/cortex
```

In the following command, revise `$(pwd)/path/to/data` for your Docker configuration. Then use the updated command to run the container:

```bash
docker run -p 6333:6333 \
    -v $(pwd)/path/to/data:/cortex/storage \
    cortex/cortex
```

With this command, you start a Cortex instance with the default configuration.
It stores all data in the `./path/to/data` directory.

By default, Cortex uses port 6333, so at [localhost:6333](http://localhost:6333) you should see the welcome message.

To change the Cortex configuration, you can overwrite the production configuration:

```bash
docker run -p 6333:6333 \
    -v $(pwd)/path/to/data:/cortex/storage \
    -v $(pwd)/path/to/custom_config.yaml:/cortex/config/production.yaml \
    cortex/cortex
```

Alternatively, you can use your own `custom_config.yaml` configuration file:

```bash
docker run -p 6333:6333 \
    -v $(pwd)/path/to/data:/cortex/storage \
    -v $(pwd)/path/to/custom_config.yaml:/cortex/config/custom_config.yaml \
    cortex/cortex \
    ./cortex --config-path config/custom_config.yaml
```

For more information, see the [Configuration](#) documentation.

### Docker Compose

You can also use [Docker Compose](https://docs.docker.com/compose/) to run Cortex.

Here is an example customized compose file for a single node Cortex cluster:

```yaml
services:
  cortex:
    image: cortex/cortex:latest
    restart: always
    container_name: cortex
    ports:
      - 6333:6333
      - 6334:6334
    expose:
      - 6333
      - 6334
      - 6335
    configs:
      - source: cortex_config
        target: /cortex/config/production.yaml
    volumes:
      - ./cortex_data:/cortex/storage

configs:
  cortex_config:
    content: |
      log_level: INFO
```

<aside role="status">Providing the inline <code>content</code> in the <a href="https://docs.docker.com/compose/compose-file/08-configs/">configs top-level element</a> requires <a href="https://docs.docker.com/compose/release-notes/#2231">Docker Compose v2.23.1</a> or above. This functionality is supported starting <a href="https://docs.docker.com/engine/release-notes/25.0/#2500">Docker Engine v25.0.0</a> and <a href="https://docs.docker.com/desktop/release-notes/#4260">Docker Desktop v4.26.0</a> onwards.</aside>

### From source

Cortex is written in Rust and can be compiled into a binary executable.
This installation method can be helpful if you want to compile Cortex for a specific processor architecture or if you do not want to use Docker.

Before compiling, make sure that the necessary libraries and the [rust toolchain](https://www.rust-lang.org/tools/install) are installed.
The current list of required libraries can be found in the [Dockerfile](https://github.com/cortex/cortex/blob/master/Dockerfile).

Build Cortex with Cargo:

```bash
cargo build --release --bin cortex
```

After a successful build, you can find the binary in the following subdirectory `./target/release/cortex`.

## Client libraries

In addition to the service, Cortex provides a variety of client libraries for different programming languages. For a full list, see our [Client libraries](#) documentation.

