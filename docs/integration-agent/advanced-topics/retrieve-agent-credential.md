---
title: Retrieve Agent Credential
---

# Retrieve Agent Credential

If you have an agent that is already registered, you can manually retrieve its credential to repair the installation.

## Prerequisites

* DataCloud or Avalanche Subscription
* Registered Agent 3.1.1 or later
* API Password enabled (or valid bearer token)

## Step 1: Retrieve the Agent Credential

1. Open the browser.
2. Navigate to: `https://api.im.actiandatacloud.com/v2/api/agents/[agent id or hostname]/credential`<br/>
 where `[agent id or hostname]` is your agent id or hostname.
3. You will be asked to authenticate with Username and API Password (see Prerequisites above).

Response:
```
# Integration Manager Connection Info
im.base-url=[base url]
im.client-id=[client id]
im.client-secret=[client secret]
im.device-code=[device code]
im.user-code=[user code]
```

## Step 2: Update the Agent
import PartialContent from '../../reuse/_update_the_agent.mdx';

<PartialContent name="update_the_agent" />