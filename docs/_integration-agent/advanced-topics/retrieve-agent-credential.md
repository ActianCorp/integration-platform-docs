---
layout: default
title: Retrieve Agent Credential
nav_order: 20
parent: Advanced Topics
---
# Retrieve Agent Credential

If you have an agent that is already registered, you can manually retrieve its credential to repair the installation.

## Prerequisite(s):

* DataCloud or Avalanche Subscription
* Registered Agent 3.1.1 or later.
* API Password enabled (or valid bearer token).

## Step 1: Retrieve the Agent Credential

1. Open browser
2. Navigate to: https://api.im.actiandatacloud.com/v2/api/agents/[agent id or hostname]/credential
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
2. Start/restart Agent. It will now re-register itself.