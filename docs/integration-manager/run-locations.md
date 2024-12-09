---
title: Run Locations
---

# Run Locations

## Overview

The Run Location specifies which engine to use when executing a JobConfig. Run Location can be one of the following: 

* **Default** (JobConfigs, JobTemplates): The default run location used when a specific destination or agent has not been selected for a JobConfig or JobTemplate. 
* **Inherited** (JobConfigs): The JobConfig uses whatever Run Location is specified in the parent JobTemplate, which could be Default, User Agent, or a specific run location (destination or agent).
* **User Agent** (JobTemplates): Any JobConfigs based on a parent template that specifies **User Agent** as the Run Location will use the agent associated with the owner of the JobConfig.
* **Specific Run Location (Destination, Agent)** (JobConfigs, JobTemplates): Specifies the exact destination or agent used for job execution.

:::note
* Admin users can see a list of registered agents from the same account or a list of agents assigned as per the access policy. See [Access Control Policies](./admin/access-control/access-control-polices).
* Non-admin users can only see their own registered agent and a list of agents assigned as per the access control policy.
:::

## Default

When a JobConfig or JobTemplate is first created, the Run Location is set to **Default**. You can later update the Run Location to any specific destination or registered agent.

:::note
The Default Run Location is configured by your Administrator and should be sufficient in most cases.
:::

     ![](/img/Run-Location-Default.png)

## Inherited

When the Run Location for a JobConfig is set to **Inherited**, the JobConfig uses whatever Run Location is specified in the parent JobTemplate, which could be Default, User Agent, or a specific run location (destination or agent).

For example, assume a JobTemplate uses **AWS [US East (Ohio)]** as the Run Location:

     ![](/img/Run-Location-Inherited-Template.png)

A JobConfig with an **Inherited** Run Location that uses this parent template will use the Run Location specified in the template (in this case, **AWS [US East (Ohio)]**):

     ![](/img/Run-Location-Inherited-Config.png)

## User Agent

When **User Agent** is selected as the Run Location for a JobTemplate, any child JobConfigs using an Inherited Run Location will automatically look up the agent associated with the owner of the JobConfig. This is useful in situations where the JobConfig ownership may periodically change and/or for use in OEM and B2B scenarios where the end user may not have direct access to or knowledge of their assigned JobConfig.

JobTemplate with the Run Location set to **User Agent**:

     ![](/img/Run-Location-User-Agent1.png)

Any child JobConfig of this template with an **Inherited** Run Location will look up the agent associated with the owner of the JobConfig:

     ![](/img/Run-Location-User-Agent2.png)

## Specific Run Location (Destination or Agent)

In order to run a JobConfig under a specific destination or agent, you must manually select the destination or agent in the JobTemplate or JobConfig.

* When a user updates the Run Location for a Job Template to any specific remote destination or registered agent, then all associated JobConfigs will run under the newly-updated Run Location defined in the parent template.

* When a user updates the Run Location for a JobConfig to any specific destination or registered agent, the JobConfig will run under the newly-updated Run Location.

To use a specific destination or agent for your Run Location, do the following:

1. Open the **Configuration Details** or **Template Details** page.
2. Click <img src="/img/icons/edit-icon.png" className="icon" alt="the Edit icon"/> next to **Run Location** and select the desired destination or agent. 

   **Cloud**:

     ![](/img/Run-Location-Destination-Cloud.png)

   **On-Prem**:

     ![](/img/Run-Location-Destination-On-Prem.png)

