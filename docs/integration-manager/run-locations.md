---
title: Run Locations
---

# Run Locations

## Overview

The Run Location specifies which engine to use when executing a JobConfig. Run Location can be one of the following: 

* **Default** (JobConfigs, JobTemplates): The default run location used when a specific destination or agent has not been selected for a JobConfig or JobTemplate. 
* **Inherited** (JobConfigs): The JobConfig uses whatever Run Location is specified in the parent JobTemplate, which could be Default, User Agent, or a specific agent or destination.
* **User Agent** (JobTemplates): Any JobConfigs based on a parent template that specifies **User Agent** as the Run Location will use the agent associated with the owner of the JobConfig.
* **Static Run Location (Destination, Agent)** (JobConfigs, JobTemplates): Specifies the exact destination or agent used for job execution.

:::note
* Admin users can see a list of registered agents from the same account or a list of agents assigned as per the access policy. See [Access Control Policies](../admin/access-control/access-control-polices).
* Non-admin users can only see their own registered agent and a list of agents assigned as per the access control policy.
:::

## Default

When a JobConfig or JobTemplate is first created, the Run Location is set to **Default**. The user can later update the Run Location to any specific destination or registered agent.

:::note
The Default Run Location is configured by your Administrator and should be sufficient in most cases.
:::

     ![](/img/Run-Location-Default.png)

## Inherited

When the Run Location for a JobConfig is set to **Inherited**, the JobConfig uses whatever Run Location is specified in the parent JobTemplate, which could be Default, User Agent, or a specific agent or destination.

     ![](/img/Run-Location-Inherited.png)

## User Agent

When **User Agent** is selected as the Run Location for a JobTemplate, any child JobConfigs using an Inherited Run Location will automatically look up the agent associated with the owner of the JobConfig. This is useful in situations where the JobConfig ownership may periodically change and/or for use in OEM and B2B scenarios where the end user may not have direct access to or knowledge of their assigned JobConfig.

## Static Run Location (Destination or Agent)

A Static Run Location can be a destination (e.g., **AWS**, **Azure**, **GCP**) or a specific agent as specified by the selected **Agent [hostname]**.
  
In order to run a JobConfig under a specific destination or agent, you must manually select the destination or agent in the JobTemplate or JobConfig:

     ![](/img/Run-Location-Config.png)

* When a user updates the Run Location for a Job Template to any specific remote destination or registered agent, then all associated JobConfigs will run under the newly-updated Run Location defined in the parent template.

* When a user updates the Run Location for a JobConfig to any specific destination or registered agent, the JobConfig will run under the newly-updated Run Location.