---
layout: default
title: Manual Agent Registration
nav_order: 10
parent: Advanced Topics
---
# Manual Agent Registration

If you are having issues starting or registering a new or existing Agent installation, you can use Manual Agent Registration.

## Prerequisite(s):

* DataCloud or Avalanche Subscription
* Install Integration Agent 3.1.0 or later.
* Enable an API Password for the User registering the Agent.

## Step 1: Retrieve a User Code

1. Open browser
2. Navigate to: https://api.im.actiandatacloud.com/v2/api/device/code?client_id=integration-agent&host=[agent machine hostname]
* Response:
```
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

## Step 2: Activate Device Code

1. Copy the url from Step 1 Response in [verification uri complete]
2. Paste in a new browser tab and click Enter
3. You will be asked to authenticate with Username and API Password (see Prerequisites)
* Response:
```
# Integration Manager Connection Info
im.base-url=[base url]
im.client-id=[client id]
im.client-secret=[client secret]
im.device-code=[device code]
im.user-code=[user code]
```

## Step 3: Update the Agent

1. Copy and paste connection info into /IntegrationAgent/conf/application.properties file. Make sure to delete/overwrite any existing im.\* values that may be present. Duplicate entries will yield inconsistent results.
2. Start/restart Agent. It will now register itself.