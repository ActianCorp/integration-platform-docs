---
title: API Overview
---

# API Overview

Integration Manager is an entirely API-driven platform. Every function available via the UI is also available as an API (and more!).

:::note
The OpenAPI interface linked to from this topic does not support execution from the UI. 

For testing and exploration, you can access the Swagger interface at [https://api.im.actiandatacloud.com/v2/apidocs/](https://api.im.actiandatacloud.com/v2/apidocs/). Note that the Swagger interface is for exploration only, not for automation use.
:::

## Integration Components API

OpenAPI Spec: [Integration Components](../../../integration-components)

## Job Configuration API

OpenAPI Spec: [Job Configuration](../../../job-configuration)

## Job Execution API

OpenAPI Spec: [Job Execution](../../../job-execution)

Every Job Configuration is automatically exposed as a RESTful Job Execution API, for example, POST /api/jobconfigs/1/jobs. This API can be invoked on demand, with or without override parameters. 

Every Job Configuration is also exposed as a listener API. For example:

`POST /api/jobconfigs/1/listener`

This API can be invoked with a data payload that your integration process can directly consume.

## JobConfig Aliasing API

OpenAPI Spec: [JobConfig Aliasing](../../../jobconfig-aliasing)

For more information on JobConfig listener aliasing, refer to [JobConfig Listener Aliasing](../admin/access-control/jobconfig-aliasing).

## Agents and Devices API

OpenAPI Spec: [Agents and Devices](../../../agent-management)

## Accounts and Users API

OpenAPI Spec:  [Accounts and Users](../../../account-administration)

## Resource Management API

OpenAPI Spec: [Resource Management](../../../resource-management)

## Access Control Policies API

OpenAPI Spec: [Access Control Policies](../../../access-control-policies)

