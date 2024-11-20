---
title: Run Location Use Cases
---

# Run Location Use Cases

## Overview

Run Location specifies which engine to use when executing a Job Config. Run Location can be one of the following: 

* **Default**: The default run location used when a specific worker or agent has not been selected. When creating a new Job Config or Job Template, the Run Location is **Default**. The Default is mapped to a destinationId (i.e., worker) by backend logic and the job will be executed on the same worker. If any specific destinationId is configured for a specific user account then that destinationId will be used when executing the job.
* **Inherited**: When a Job Config is associated with a base Job Template, the Run Location is set to **Inherited** and the Job Config inherits the Run Location from the parent Job Template.  
* **User Agent**: The agent currently registered by the user.
* **Remote Worker (Destination)**: The remote cloud worker (AWS, Azure, GCP).
* **Agent [hostname]**: A specific agent. Note that a user may not see agents registered by other users, depending on the access control policy.

:::note
* Admin users can see a list of registered agents from the same account or a list of agents assigned as per the access policy. See [Access Control Policies](../admin/access-control/access-control-polices).
* Non-admin users can only see their own registered agent and a list of agents assigned as per the access control policy.
:::

## Dynamic Settings


### Job Template

* When a Job Template is created, the default Run Location is **Default**. The user can later update the run location to an available destination or agent.
 
     ![](/img/Run-Location-Default.png)

* When a Job Config is created under a Job Template (see [Creating a Configuration From a Template](../templates/creating-a-configuration-from-a-template)), the Run Location for the Job Config is set to **Inherited**, meaning that the Job Config inherits the Run Location set for the parent template. The Run Location set for the template is the default destination for any Job Configs associated with the template.
  
     ![](/img/Run-Location-Inherited.png)


### Job Config

* When a user creates a Job Config directly without deriving from any base template, the default Run Location is **Default**. The user can later update the run location to an available destination or agent.

     ![](/img/Run-Location-Default2.png)
  

## Static Settings (Destination, Agent)

In order to run a Job Config under a remote worker (destination) or a specific agent, you must manually select the remote worker or agent in the Job Template or Job Config:

     ![](/img/Run-Location-Destination.png)

* When a user updates the run location for a Job Template to any specific remote destination or registered agent, then all associated Job Configs will run under the newly-updated run location, which is inherited from the parent template.

* When a user updates the run location for Job Config to any specific destination or registered agent, the Job Config will run under the newly-updated run location.