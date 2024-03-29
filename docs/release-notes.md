---
title: Release Notes
tags:
 - Content Issues
---
# Release Notes

<font color="red">
Working on updates for version 3.2.
</font>
<font color="blue">
GGH Feedback - Do you need helping these or all goodon that front?  
</font>
<font color="red">
DL - Jason will be tagging issues with the Release Notes label, and I'll incorporate them once he's finished. I'm adding links to docs/Swagger as appropriate, and looking at all issues to ask whether there might be additional issues that would be useful to include. Started a draft below, but I'll reach out for review when ready.
</font>

### 3.2.0

| Issue&nbsp;Type | Issue&nbsp;Key | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New&nbsp;Feature | IP-183 | Apply Macroset in a Custom Order. This allows the user to select n number of macrosets (global, user, custom macrosets) and to choose the order in which to apply the macrosets on a Template or Configuration. | 3.2.0 |  | Completed 
| New Feature | IP-3662 | Agent API to upload and install JDBC drivers. <font color="red">Add Swagger link when available (currently in Dev -> https://im.dev.actiandatacloud.com/apidocs/?urls.primaryName=Agents%20and%20Devices#/Agent/uploadDriverFile)</font> | 3.2.0 |  | Completed |
| New&nbsp;Feature | IP-4824 | Macro API accepting a file as body to store as value. <font color="red">Add Swagger link when available (currently in Dev -> https://im.dev.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config%20Macros/createJobConfigMacroFromFile)</font> | 3.2.0 |  | Completed |
| New Feature | IP-5491 | Implement bulk Actions for Active and Inactive users. This allows admins to activate or deactivate multiple users in a single action rather than one-by-one. | 3.2.0 |  | Completed |
| New Feature | IP-6837 | Add abortedBy support to Jobs. This adds a stoppedBy property to JobResponse to track the user who issued a stop command. | 3.2.0 |  | Completed |
| Bug Fix | IP-6858 | Agents should not be allowed to register with internal ip address. | 3.2.0 |  | Completed |


### 3.1.3

| Issue&nbsp;Type | Issue&nbsp;Key | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New&nbsp;Feature | IP-622 | [Macrosets API](https://console.im.actiandatacloud.com/apidocs/#/MacroSets) to import, add, modify, export, and delete macrosets. | 3.1.3 |  | Completed |
| Nwe Feature | IP-6231 | [Job Config Tag API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config%20Tags). Provides means to set tags in a JobConfiguration which are then copied to the Jobs created from the configuration, and to list runs for a given integration by specifying tags in query parameters. | 3.1.3 |  | Completed |
| New Feature | IP-6516 | DataConnect 12.1.0-38 Engine | 3.1.3 |  | Completed |
| New Feature | IP-6587 | [Job Config Package API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/getJobPackage). Provides ability to download the .sqlite or .djar file for a given job run ID. | 3.1.3 |  | Completed |

### 3.1.2

| Issue Type | Issue&nbsp;Key | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New&nbsp;Feature | IP-4259 | Job Execution Tag API <font color="red">Should this link to https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/runPackage or https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/runJobConfig?</font> | 3.1.2 |  | Completed |

### 3.1.1

| Issue Type | Issue&nbsp;Key | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New Feature | IP-6089 | Standalone Integration Package Execution <font color="red">(Swagger or help topic URL?)</font> | 3.1.1 |  | Completed |
| New Feature | IP-6164 | DataConnect 12.1.0-24 Engine | 3.1.1 |  | Completed |
| Improvement | IP-5663 | [Documented Engine Patch Instructions](./integration-manager/admin/server-administration/integration-engines)   | 3.1.1 |  | Completed |
| Improvement | IP-6063 | Enable Swagger UI Try It Features | 3.1.1 |  | Completed |
| Bug Fix | IP-6037 | Agent eagerly fetches Device Token | 3.1.1 |  | Completed |
| Bug Fix | IP-6039 | Agent Queue Consumers are not recovering from Connection Loss | 3.1.1 |  | Completed |
| Bug Fix | IP-6066 | Schedule Deadlocks are preventing scheduled jobs from firing | 3.1.1 |  | Completed |

### 3.1.0

| Issue Type | Issue&nbsp;Key | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| Known Issue | IP-6037 | Agent eagerly fetches Device Token | 3.1.1 | 3.1.0 | Open |
| New Feature | IP-5473 | HCL Link Flow Executor Engine Support | 3.1.0 |  | Completed |
| New Feature | IP-5568 | Enable Access Policy Support for Product and Provisioning. See [Access Control Policies](./integration-manager/admin/access-control/access-control-polices). <font color="red">(Correct link?)</font> | 3.1.0 |  | Completed |
| New Feature | IP-6038 | DataConnect 12.1.0-22 Engine | 3.1.0 |  | Completed |
| Improvement | IP-5672 | Cosmos.ini file should dynamically retrieve engine version | 3.1.0 |  | Completed |
| Improvement | IP-5793 | Linux RPM Enhancements | 3.1.0 |  | Completed |
| Bug Fix     | IP-5959 | Agent Default Queue auto-recovery is broken for certain outages | 3.1.0 |  | Completed |
| Bug Fix     | IP-6036 | Agent CheckIn and Status Scanner Timezones are not synchronized | 3.1.0 |  | Completed |
