---
title: Production Configuration
---

# Production Configuration

## Overview

For the Quick Start experience, Integration Manager includes an embedded database, an embedded messaging broker, and an embedded Integration Worker. This out-of-the-box configuration is not suitable for production environments.

In order to preserve production data during maintenance, restarts, and/or outages of the Integration Manager Service, you must distribute the components.
* Integration Manager Service (includes UI console, APIs, and backend services)
* Production-capable Database Service (MS SQL Server or MySQL)
* Production-capable Messaging Service (RabbitMQ)
* Integration Manager Worker (includes DataConnect engine and DataFlow capabilities)

:::note

You can increase Worker concurrency and/or add additional Workers to meet your workload scale and environment requirements.

:::

## Configuring Distributed Integration Manager Core

Integration Manager has only one mandatory property change in ../conf/application.properties file to distribute the core components:

```
worker.embedded=false
```

:::note

Any change to application.properties requires a restart of the Integration Manager Service.
:::

## Configuring Distributed Integration Manager Worker

To configure Integration Manager Worker:

1. Download and install the Integration Worker software from Actian ESD / Integration Manager / 3.0 / Integration Manager Worker (https://esd.actian.com/).
      :::note

         The default Worker installation is already setup for distributed use, you only need to supply the "queue" connection properties for your RabbitMQ installation

      :::

2. Configure the worker-specific "queue" properties in ProgramData/Actian/**Worker**/conf/application.properties file
      :::note

         Both Integration Manager *and* Integration Worker require "queue" connection properties (You can use different credentials for each if you so choose).

      :::
3. Go to Windows → Services → Actian Integration Worker.
4. Right-click Actian Integration Worker and select **Start**.