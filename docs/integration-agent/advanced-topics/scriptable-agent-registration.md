---
title: Scriptable Agent Registration
---

# Scriptable Agent Registration

If you need to automate Agent configuration and registration tasks (i.e. direct user interaction with the Agent is not possible), you can use silent install and Scriptable Agent Registration.

## Prerequisites

* DataCloud or Avalanche Subscription
* Install Integration Agent 3.1.0 or later
* Enable an API Password for the User registering the Agent
* Access to an API tool such as Postman, SoapUI, or Curl

## Step 1: Retrieve an Access Token

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/login

HEADER(S):
Content-Type: application/json

BODY:
{
    "username": "[username]",
    "password": "[password text]"
}
```

```
RESPONSE:
200 OK

{
    "access_token": [access token value],
    "token_type": "bearer",
    "refresh_token": [refresh token value],
    "expires_in": 36000
}
```

## Step 2: Retrieve a User Code

```
REQUEST:
POST https://api.im.actiandatacloud.com/v2/api/device/code?client_id=integration-agent&host=[agent hostname]

HEADER(S):
Authorization: Bearer [access token value]
```

```
RESPONSE:
201 Created

{
    "approved": false,
    "user_code": "[user code]",
    "hostname": "[agent hostname]",
    "device_code": "[device code]",
    "verification_uri_complete": "[verification uri complete]",
    "client_id": "integration-agent",
    "expires_in": 599,
    "interval": 15,
    "owner": {
        "id": "[user id]",
        "name": "[username]"
    }
}
```

## Step 3: Activate Device Code

```
REQUEST:
POST [verification uri complete]

HEADER(S):
Authorization: Bearer [access token value]
```

```
RESPONSE:
200 OK

# Integration Manager Connection Info
im.base-url=[base url]
im.client-id=[client id]
im.client-secret=[client secret]
im.device-code=[device code]
im.user-code=[user code]
```

## Step 4: Update the Agent

import PartialContent from '../../reuse/_update_the_agent.mdx';

<PartialContent name="update_the_agent" />