---
title: JobConfig File Listener API
---
# JobConfig File Listener API

## Overview

This service allows an API consumer to run an existing JobConfig with a file input (asynchronous only).


* File payload 202 Accepted response
* Result/output may be retrieved asynchronously after the job is complete
* Maximum file size is configurable on-premise (100 MB in DataCloud)
* Content-Type allowed: multipart/form-data

Refer to [Open API Spec: Run Job with Input File](https://console.im.actiandatacloud.com/apidocs/#/Job%20Execution/runJobConfigWithFile).

## Step 1: Retrieve an Access Token

import PartialContent1 from '../../reuse/_retrieve_access_token.mdx';

<PartialContent1 name="retrieve_access_token" />

## Step 2: Upload File and Run Job

REQUEST:

```
POST https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]/listener/file?key=Accounts.txt
Authorization: Bearer [access token value]
Content-Type: multipart/form-data

[input file contents]
```
RESPONSE:

```
202 Accepted
Content-Type: application/json

{
    "id": "[job id]",
    "status": "QUEUED",
    "scheduled": "[job submitted timestamp]",
    "jobConfig": {
        "id": "[jobconfig id]"
    }
    "submittedByUser": {
        "id": "[user id]"
    }
}
```

## Step 3: Retrieve Job Output File (if applicable)

REQUEST:

```
POST https://api.im.actiandatacloud.com/v2/api/jobs/[job id]/out/files/[output file name]
Authorization: Bearer [access token value]
```
RESPONSE:

```
200 OK
Content-Type: application/octet-stream

[output file contents]
```
