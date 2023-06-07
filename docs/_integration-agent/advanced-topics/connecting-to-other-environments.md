---
layout: default
title: Connecting to Other Environments
nav_order: 40
parent: Advanced Topics
---
# Connecting to Other Environments

If you need to connect to a non-production or VPC environment, follow the instructions below.

## Prerequisite(s):

* Non-Production or VPC Entitlement
* Install Integration Agent 3.1.0 or later.
* Enable an API Password for the User registering the Agent. (Must be a valid user in the target environment)

## Reconfigure Agent

1. Stop the Agent Service, if running.
2. Modify the default value for agent.control-server in application.properties. Examples:
```
agent.control-server=https://api.[environment name].actiandatacloud.com/v2
```
```
agent.control-server=https://im.server.yourcompany.com:443
```
3. Start/restart Agent. You can now register normally using the [Agent Console] (http://localhost:6001/home) or via Registration APIs. See [Manual Registration](manual-agent-registration), [Scriptable Registration](scriptable-agent-registration)