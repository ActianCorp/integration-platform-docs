---
title: Manual Agent Registration
---

# Manual Agent Registration

If you are having issues starting or registering a new or existing Agent installation, you can use Manual Agent Registration.

## Prerequisites

* DataCloud or Avalanche Subscription
* Install Integration Agent 3.1.0 or later.
* Enable an API Password for the User registering the Agent.

## Step 1: Retrieve a User Code

1. Open the browser.
2. Navigate to: `https://api.im.actiandatacloud.com/v2/api/device/code?client_id=integration-agent&host=[agent machine hostname]`<br/>
 where `[agent machine hostname]` is the hostname of your agent.
 
RESPONSE:
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

## Step 2: Activate the Device Code

1. Copy the url from the Step 1 response in `[verification uri complete]`.
2. Paste in a new browser tab and press **Enter**.
3. You will be asked to authenticate with Username and API Password (see Prerequisites above).

RESPONSE:
```
# Integration Manager Connection Info
im.base-url=[base url]
im.client-id=[client id]
im.client-secret=[client secret]
im.device-code=[device code]
im.user-code=[user code]
```

## Step 3: Update the Agent
import PartialContent from '../../reuse/_update_the_agent.mdx';

<PartialContent name="update_the_agent" />