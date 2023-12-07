---
title: Run Job with Input Message
tags:
 - Content Issues
---

# Run Job with Input Message

## Overview

This service allows an API consumer to run an existing JobConfig with a text, json, or xml input message.

Refer to [Open API Spec: Run Job with Input Message](https://console.im.actiandatacloud.com/apidocs/#/Job%20Execution/runJobConfigWithMessage).

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

## Step 2: Run Job with Message

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]/listener?messagename=[input message name]&outmessagename=[output message name]
Authorization: Bearer [access token value]
Content-Type: [text/plain | application/json | text/xml | application/xml]

[message body]
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

## Step 3: Retrieve Job Output Message Body (if applicable)

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/jobs/[job id]/out/[output message name]/text
Authorization: Bearer [access token value]
```

```
RESPONSE:
200 OK
Content-Type: [text/plain | application/json | text/xml | application/xml]

[message body]
```
