---
title: Run Location Use Cases
---

# Run Location Use Cases

## Overview

<font color="red">
We call this "Run Location Use Cases". It seems to me to be more about the inheritance behavior and differences between templates and configs than about actual use cases. Should we include specific examples of real-world use cases, rename it to something like "Specifying the Run Location", or leave as is? 
</font>

Run Location specifies which engine to use when executing a Job Config. Run Location can be one of the following: 

* **Default**: The default run location used when a specific worker or agent has not been selected.  When creating a new Job Config or Job Template, the Run Location is initially set to **Default**. The Default is mapped to a destinationId (i.e., worker) <font color="red">by backend logic. <br />[This is the term Manoj is using. There is a job.default-destination property -- is this what is used to define the default? If so, should this say "The Default is mapped to a destinationId (i.e., worker) using the job.default-destination property in application.properties", or is there more to it?]</font> If the destinationId is configured for a specific user account, that destinationId will be used when executing the job. <font color="red">[Is this sentence about mapping the destinationId in application.properties to a different destinationId (e.g., Manoj maps destinationId 202 to his accountID 908)?. Not sure if this is something done manually in the DB. Do we want to mention this, or is this not a use case we'd want to document?]</font>
* **Inherited**: When a Job Config is associated with a base Job Template, the Run Location is set to **Inherited** and the Job Config inherits the Run Location from the parent Job Template.  
* **User Agent**: The agent currently registered by the user.
* **Remote Worker (Destination)**: The remote cloud worker (AWS, Azure, GCP).
* **Agent [hostname]**: A specific agent. Note that a user may not see agents registered by other users, depending on the access control policy.

:::note
* Admin users can see a list of registered agents from the same account or a list of agents assigned as per the access policy. See [Access Control Policies](../admin/access-control/access-control-polices).
* Non-admin users can only see their own registered agent and a list of agents assigned as per the access control policy.
:::

## Using Templates to Define Run Location

Job Templates can be used to dynamically set the run location for any Job Config using that base template. When a Job Template is created, the default Run Location is **Default**. The user can later update the run location to any specific destination or registered agent.


     ![](/img/Run-Location-Default.png)


When a Job Config is created under a Job Template (see [Creating a Configuration From a Template](../templates/creating-a-configuration-from-a-template)), the Run Location for the Job Config is set to **Inherited**, meaning that the Job Config inherits the Run Location set for the parent template. The Run Location set for the template is the default destination for any Job Configs associated with the template.
  
     ![](/img/Run-Location-Inherited.png)

## Using a Specific Destination or Agent

When a user creates a Job Config directly without deriving from any base template, the default Run Location is **Default**. The user can later update the run location to any specific destination or registered agent.

     ![](/img/Run-Location-Default2.png)
  
In order to run a Job Config under a remote worker (destination) or a specific agent, you must manually select the destination or agent in the Job Template or Job Config:

     ![](/img/Run-Location-Config.png)

* When a user updates the run location for a Job Template to any specific remote destination or registered agent, then all associated Job Configs will run under the newly-updated run location defined in the parent template.

* When a user updates the run location for a Job Config to any specific destination or registered agent, the Job Config will run under the newly-updated run location.