---
layout: default
title: Runtime Macros
nav_order: 2
parent: Job Macros
---
# Runtime Macros

These key value pairs are injected into every integration job. 

You can use these to:
* Enhance your job logging
* Make process decisions
* Make API calls back to Integration Manager


| Macro Name | Macro Value Description |
| :--------- | :---------------------- |
| **JOB\_ID** | Id of the currently executing job. |
| **JOB\_CONFIG\_ID**  | Configuration id of the currently executing job. |
| **JOB\_TEMPLATE\_ID** | Template id of the currently executing job. Optional. |
| **LOCAL\_JOB\_SPEC\_DIR** | Working directory for the currently executing job. Job artifacts, additional files, and input payload files are stored here. You can also use for temporary file requirements. |
| **SESSION\_ID** | An access token value that is valid for the life of this job and has the authorities and capabilities of the user who submitted the job. If the job is executed by a schedule, the token has the authorities and capabilities of the user who owns the scheduled Configuration. Note that on-demand and scheduled jobs submitted or owned by inactive users will not run. |
