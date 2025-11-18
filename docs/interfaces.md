---
title: API & SDKs
---

# Interfaces

Cortex supports these "official" clients.

:::note
If you are using a language that is not listed here, you can use the REST API directly or generate a client for your language
using [OpenAPI](https://github.com/cortex/cortex/blob/master/docs/redoc/master/openapi.json)
or [protobuf](https://github.com/cortex/cortex/tree/master/lib/api/src/grpc/proto) definitions.
:::

## Client Libraries

||Client Repository|Installation|Version|
|-|-|-|-|
|[![python](/img/cortex/python.webp)](https://python-client.cortex.tech/)|**[Python](https://github.com/cortex/cortex-client)** + **[(Client Docs)](https://python-client.cortex.tech/)**|`pip install cortex-client[fastembed]`|[Latest Release](https://github.com/cortex/cortex-client/releases)|
|![typescript](/img/cortex/ts.webp)|**[JavaScript / Typescript](https://github.com/cortex/cortex-js)**|`npm install @cortex/js-client-rest`|[Latest Release](https://github.com/cortex/cortex-js/releases)|
|![rust](/img/cortex/rust.png)|**[Rust](https://github.com/cortex/rust-client)**|`cargo add cortex-client`|[Latest Release](https://github.com/cortex/rust-client/releases)|
|![golang](/img/cortex/go.webp)|**[Go](https://github.com/cortex/go-client)**|`go get github.com/cortex/go-client`|[Latest Release](https://github.com/cortex/go-client/releases)|
|![.net](/img/cortex/dotnet.webp)|**[.NET](https://github.com/cortex/cortex-dotnet)**|`dotnet add package Cortex.Client`|[Latest Release](https://github.com/cortex/cortex-dotnet/releases)|
|![java](/img/cortex/java.webp)|**[Java](https://github.com/cortex/java-client)**|[Available on Maven Central](https://central.sonatype.com/artifact/io.cortex/client)|[Latest Release](https://github.com/cortex/java-client/releases)|

## API Reference

All interaction with Cortex takes place via the REST API. We recommend using REST API if you are using Cortex for the first time or if you are working on a prototype.

| API      | Documentation                                                                        |
| -------- | ------------------------------------------------------------------------------------ |
| REST API | [OpenAPI Specification](https://api.cortex.tech/api-reference)                       |
| gRPC API | [gRPC Documentation](https://github.com/cortex/cortex/blob/master/docs/grpc/docs.md) |

### gRPC Interface

The gRPC methods follow the same principles as REST. For each REST endpoint, there is a corresponding gRPC method.

As per the [configuration file](https://github.com/cortex/cortex/blob/master/config/config.yaml), the gRPC interface is available on the specified port.

```yaml
service:
  grpc_port: 6334
```

:::note
If you decide to use gRPC, you must expose the port when starting Cortex.
:::

Running the service inside of Docker will look like this:

```bash
docker run -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/cortex_storage:/cortex/storage:z \
    cortex/cortex
```

**When to use gRPC:** The choice between gRPC and the REST API is a trade-off between convenience and speed. gRPC is a binary protocol and can be more challenging to debug. We recommend using gRPC if you are already familiar with Cortex and are trying to optimize the performance of your application.
