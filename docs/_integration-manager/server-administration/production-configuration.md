---
layout: default
title: Production Configuration
nav_order: 4
parent: Server Administration
---
# Production Configuration

## Overview

For the Quick Start experience, Integration Manager includes an embedded database, an embedded messaging broker, and an embedded Integration Worker. This out of the box configuration is not suitable for production environments.

In order to preserve production data during maintenance, restarts, and/or outages of the Integration Manager Service, you need to distribute the components.
* Integration Manager Service (includes UI console, APIs, and backend services)
* Production capable Database Service (MS SQL Server or MySQL)
* Production capable Messaging Service (RabbitMQ)
* Integration Manager Worker (includes DataConnect engine and DataFlow capabilities)

Note: You can increase Worker concurrency and/or add additional Workers to meet your workload scale and environment requirements.

## Distributed Integration Manager Core Configuration

* Integration Manager has only one mandatory property change in ../conf/application.properties file to distribute the core components
* Note that any application.properties change requires a restart of the Integration Manager Service
```
worker.embedded=false
```

## Distributed Integration Manager Worker Configuration

1. Download and install the Integration Worker software from Actian ESD / Integration Manager / 3.0 / Integration Manager Worker (https://esd.actian.com/)
2. Note that the default Worker installation is already setup for distributed use, you only need to supply the "queue" connection properties for your RabbitMQ installation
3. Configure the worker-specific "queue" properties in ProgramData/Actian/Worker/conf/application.properties file
4. Note that Integration Manager AND Integration Worker both require "queue" connection properties (You can use different credentials for each if you so choose)
5. Go to Windows → Services → Actian Integration Worker
6. Right click Actian Integration Worker, select "Start"