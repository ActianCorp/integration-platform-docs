---
title: Workload Management
---

# Workload Management

## Overview

By default, Integration Manager fully embeds the Job Execution Service within the application. This facilitates a "Quick Start" experience.

For distributed and production environments, it is likely you will want more control over how the services are deployed, including but not limited to:
* Running multiple workers for additional workload bandwidth
* Running multiple workers to support workload job segregation

## Running Multiple Workers for Additional Workload Bandwidth

If you are using an externalized configuration, you can also run multiple workers on different machines with network connectivity to the messaging broker. When multiple workers are configured, they will compete for any work on the default job queue. You can enable this by performing the following steps:
1. Download and install the Worker Service on the desired machine or VM.
2. Go to ../Actian/IntegrationManager/conf and open application.properties.
3. Find the entry named "queue.host" and change the value from "localhost" to the IP address or fully-qualified domain name of the machine hosting the messaging broker.
4. Go to Windows → Services → Actian Integration Worker.
5. Right-click Actian Integration Worker and select **Start**.

## Running Multiple Workers to Support Workload Segregation

In some cases, you may want to segregate workloads based on workload type or customer type, for example, short- versus long-running integration jobs. You can segregate workloads by creating multiple destinations, which are configurations for Worker Pools. You can enable this by performing the following steps:

1. Create a new destination record within your configuration database.
2. Download and install the Worker Service on the desired machine or VM.
3. Go to ../Actian/IntegrationManager/conf and open application.properties.
4. Find the entry named "queue.host" and change the value from "localhost" to the IP address or fully-qualified domain name of the machine hosting the messaging broker.
5. Find the entry named "worker.destinationId" and set the value to the ID field of the destination record you created in Step 1.
6. Go to Windows → Services → Actian Integration Worker.
7. Right-click Actian Integration Worker and select **Start**.
