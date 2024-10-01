---
title: Job Execution API
---

# Job Execution API

Every Job Configuration is automatically exposed as a RESTful Job Execution API, for example, POST /api/jobconfigs/1/jobs. This API can be invoked on demand, with or without override parameters. 

For more information, see [Open API Spec: Job Execution API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution).

Every Job Configuration is also exposed as a listener API. For example:

`POST /api/jobconfigs/1/listener`

This API can be invoked with a data payload that your integration process can directly consume.