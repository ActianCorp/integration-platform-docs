---
title: Integration Agent Overview
hide_table_of_contents: true
---

# Integration Agent Overview

:::note
The **INTEGRATION AGENT** section contains information specific to the Agent itself, including installation and registration, the Agent file folder listener, on-premise data, and other more advanced topics. Details on managing agents from the Integration Manager (cloud or on-premise) are described in the **INTEGRATION MANAGER USERS** section. See [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices).
:::

DataCloud Agent Technology enables centralized cloud management of on-premise integration jobs and related collateral. It allows secure cloud-to-on-premises communication without special firewall rules or VPN requirements.

## Why Use An Agent?

The following scenarios are candidates for executing an integration with an Agent:

* Database connections that require drivers (such as ODBC) or connections on an internal network
* Web-based services that are housed internally and are not externally available
* Using source or target files that are located on an internal network

You can set specific configurations to execute using an agent instead of executing in the cloud. This provides access to files and databases from the system running the agent. Executing configurations using an agent is useful, for example, if you want to obtain test results before executing it in the cloud. See [Executing Configurations with an Agent](../integration-manager/agents-and-devices/execute-config-with-agent).

:::note
Non-administrators can use one agent at a time.
:::
