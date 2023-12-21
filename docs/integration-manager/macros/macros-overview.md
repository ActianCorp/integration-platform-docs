---
title: Macros Overview
tags:
 - Content Issues
---

# Macros Overview

<font color="red">We use Job Config, JOBCONFIG, Config, and Configuration throughout the docs. Are all configurations considered Job Configs? Is this because the runtime macros property names are JOB_CONFIG_*? It would be helpful to use consistent terminology throughout.</font>

Macros enable you to run a single integration for different types of users without having to modify the integration itself. Macros are defined when the integration is in the configuration state. Macros can save you time and reduce errors at runtime.

Macros are placeholders you create for values that are typically used during design and runtime, such as target paths and credentials to access databases. By creating and defining these placeholders  and assigning them a descriptive name, you can easily redefine them as needed.

For example, let’s say you need to run an integration for testing before you run it in a production environment. The test environment and the production environment use different target paths. In this case, you create two configurations from your integration.

When you create the first configuration, you define a macro named TARGET_PATH and set the value to the testing environment target path.

When your testing is complete you create another configuration and set the TARGET_PATH value to the production environment path.

## Macro Hierarchy

Macros use a hierarchy to allow flexibility (and privacy) across your deployed integrations.

You can specify values for macros at the account level or for specific templates and configurations. Macros are applied and overridden in the following order:

![Integration Manager Macro Hierarchy Simple](/img/Integration-Manager-Macro-Hierarchy-Simple.png)

### Example Inheritance

![Integration Manager Macro Hierarchy](/img/Integration-Manager-Macro-Hierarchy.png)

## Macro Types

### Account (Public) Macros

Account-level macros are global and read-only.

They can be viewed by all users in your account. They can be created, edited, and deleted only by account admin users.

### User (Private) Macros

User macros can further increase the portability and privacy of your integrations. User macros are applied for the **submitted by** user when a job is executed. "Submitted by" users will always be the Job Config owner for scheduled jobs.

They can only be viewed, created, edited, deleted by the associated user, or by account admin users.

User macros are great for individual users to manage their own credentials to connected systems.

### Template Macros

Job Template macros increase portability of your integrations. They will apply to any Job Config that is a child of this Job Template.

They can be viewed by any user who has at least read access to the Job Template. They can only be created, edited, deleted with write access to the Job Template, by the Job Template owner, or by Account Admins.

Job Templates are designed to allow reuse of common integration artifacts and Job Config values that apply to multiple integration configurations. For example, you may have several customers or departments within your company who send you the same data format. You could create a single integration Job Template to hold your common integration artifacts (maps, scripts, etc) and common macro values, then create a separate Job Config for each - where you only need to override a few macro values that are specific to them.

Note that templates are completely optional. Many configurations will not have a Job Template. This layer of the hierarchy will be ignored for any configurations without a Job Template.

### Configuration Macros

Configuration macros can be viewed by any user who has at least read access to the configuration. They can only be created, edited, and deleted by users with write access to the configuration, by the configuration owner, or by account admin users.

### Runtime Macros

These name/value pairs are injected into every integration job. 

You can use these to:

* Enhance your job logging
* Make process decisions
* Make API calls back to Integration Manager


| Macro Name | Macro Value Description |
| :--- | :--- |
| **JOB\_ID** | Id of the currently executing job. |
| **JOB\_CONFIG\_ID**  | Configuration id of the currently executing job. |
| **JOB\_TEMPLATE\_ID** | Template id of the currently executing job. Optional. |
| **LOCAL\_JOB\_SPEC\_DIR** | Working directory for the currently executing job. Job artifacts, additional files, and input payload files are stored here. You can also use for temporary file requirements.<br /> Refer to [Using LOCAL_JOB_SPEC_DIR](./using-LOCAL_JOB_SPEC_DIR). |
| **SESSION\_ID** | An access token value that is valid for the life of this job and has the authorities and capabilities of the user who submitted the job. If the job is executed by a schedule, the token has the authorities and capabilities of the user who owns the scheduled Configuration. Note that on-demand and scheduled jobs submitted or owned by inactive users will not run. |
