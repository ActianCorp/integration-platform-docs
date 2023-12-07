---
title: Run Job with Input File
tags:
 - Content Issues
---
# Run Job with Input File

## Overview

This service allows an API consumer to run an existing JobConfig with a file input (asynchronous only).

Refer to [Open API Spec: Run Job with Input File](https://console.im.actiandatacloud.com/apidocs/#/Job%20Execution/runJobConfigWithFile).

## Step 1: Retrieve an Access Token

**<font color="red">This step could be made a reusable component.</font>**

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/login
Content-Type: application/json

{
    "username": "[username]",
    "password": "[password text]"
}
```

```
RESPONSE:
200 OK
Content-Type: application/json

{
    "access_token": [access token value],
    "token_type": "bearer",
    "refresh_token": [refresh token value],
    "expires_in": 36000
}
```

## Step 2: Upload File and Run Job

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]/listener/file?key=Accounts.txt
Authorization: Bearer [access token value]
Content-Type: multipart/form-data

[input file contents]
```

```
RESPONSE:
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

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/jobs/[job id]/out/files/[output file name]
Authorization: Bearer [access token value]
```

```
RESPONSE:
200 OK
Content-Type: application/octet-stream

[output file contents]
```
