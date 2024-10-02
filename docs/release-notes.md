---
title: Release Notes
---
# Release Notes

### 3.3.0

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New Feature | IP-5244 | [JobConfig/JobTemplate Export/Import API](./integration-manager/APIs/jobconfig-export-import-api)| 3.3.0 |  | Completed |
| New Feature | IP-7252 | Remove Agent-User Tethering. This removes the 1:1 restriction between a user and an agent, thereby allowing an admin to register multiple agents. Admins can see all agents, users can only see agents they have registered. Agent hostname must still be globally unique.| 3.3.0 |  | Completed |
| New Feature | IP-7283 | Timestamp ZoneOffset for [log file API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/getJobLog) | 3.3.0 |  | Completed |
| New Feature | IP-7682 | Add optional `engine.useLegacyTimestamps` property to enable legacy log timestamps. See [DataConnect Properties](./integration-manager/admin/application-property-reference/dataconnect-properties). | 3.3.0 |  | Completed |
| New Feature | IP-7723 | DataConnect 12.3.0-12 Engine | 3.3.0 |  | Completed |
| New Feature | IP-7893 | Java 17 Support Added | 3.3.0 |  | Completed |

### 3.2.0

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New Feature | IP-183 | Apply Macroset in a custom order. This allows the user to select n number of macrosets (global, user, custom macrosets) and to choose the order in which to apply the macrosets on a Template or Configuration. | 3.2.0 |  | Completed 
| New Feature | IP-3662 | [Agent API to upload and install JDBC drivers](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Agents%20and%20Devices#/Agent/uploadDriverFile) | 3.2.0 |  | Completed |
| New&nbsp;Feature | IP-4824 | [Macro API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config%20Macros/createJobConfigMacroFromFile) accepting a file as body to store as value | 3.2.0 |  | Completed |
| New Feature | IP-5491 | Implement bulk actions for Active and Inactive users. This allows admins to activate or deactivate multiple users in a single action rather than one-by-one. | 3.2.0 |  | Completed |
| New Feature | IP-6837 | Add abortedBy support to Jobs. This adds a stoppedBy property to JobResponse to track the user who issued a stop command. | 3.2.0 |  | Completed |
| Bug Fix | IP-6858 | Agents should not be allowed to register with internal IP address. | 3.2.0 |  | Completed |
| New Feature | IP-6995 | [Apache Camel XML Route Support](./integration-manager/file-listener/file-listener-overview.md) for Agent | 3.2.0 |  | Completed |
| New Feature | IP-7039 | [Apache Camel XML Route Support](./integration-manager/file-listener/file-listener-overview.md) for Job Execution (on-prem use only) | 3.2.0 |  | Completed |
| New Feature | IP-7500 | DataConnect 12.2.0-65 Engine | 3.2.0 |  | Completed |


### 3.1.3

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New Feature | IP-622 | [Macrosets API](https://console.im.actiandatacloud.com/apidocs/#/MacroSets) to import, add, modify, export, and delete macrosets. | 3.1.3 |  | Completed |
| New Feature | IP-6231 | [Job Config Tag API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config%20Tags). Provides means to set tags in a JobConfiguration which are then copied to the Jobs created from the configuration, and to list runs for a given integration by specifying tags in query parameters. | 3.1.3 |  | Completed |
| New Feature | IP-6516 | DataConnect 12.1.0-38 Engine | 3.1.3 |  | Completed |
| New Feature | IP-6587 | [Job Config Package API](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/getJobPackage). Provides ability to download the .sqlite or .djar file for a given job run ID. | 3.1.3 |  | Completed |

### 3.1.2

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New&nbsp;Feature | IP-4259 | Job Execution Tag API | 3.1.2 |  | Completed |

### 3.1.1

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| New Feature | IP-6089 | [Standalone Integration Package Execution](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/runPackage) | 3.1.1 |  | Completed |
| New Feature | IP-6164 | DataConnect 12.1.0-24 Engine | 3.1.1 |  | Completed |
| Improvement | IP-5663 | Documented [Engine Patch Instructions](./integration-manager/admin/server-administration/integration-engines)   | 3.1.1 |  | Completed |
| Improvement | IP-6063 | Enable Swagger UI Try It Features | 3.1.1 |  | Completed |
| Bug Fix | IP-6037 | Agent eagerly fetches Device Token | 3.1.1 |  | Completed |
| Bug Fix | IP-6039 | Agent Queue Consumers are not recovering from Connection Loss | 3.1.1 |  | Completed |
| Bug Fix | IP-6066 | Schedule Deadlocks are preventing scheduled jobs from firing | 3.1.1 |  | Completed |

### 3.1.0

| Issue Type | <div style={{width: 65}}>Issue Key</div> | Summary | Fix versions | Affects versions | Status |
|:---|:---|:---|:---|:---|:---|
| Known Issue | IP-6037 | Agent eagerly fetches Device Token | 3.1.1 | 3.1.0 | Open |
| New Feature | IP-5473 | HCL Link Flow Executor Engine Support | 3.1.0 |  | Completed |
| New Feature | IP-5568 | Enable Access Policy Support for Product and Provisioning | 3.1.0 |  | Completed |
| New Feature | IP-6038 | DataConnect 12.1.0-22 Engine | 3.1.0 |  | Completed |
| Improvement | IP-5672 | Cosmos.ini file should dynamically retrieve engine version | 3.1.0 |  | Completed |
| Improvement | IP-5793 | Linux RPM Enhancements | 3.1.0 |  | Completed |
| Bug Fix     | IP-5959 | Agent Default Queue auto-recovery is broken for certain outages | 3.1.0 |  | Completed |
| Bug Fix     | IP-6036 | Agent CheckIn and Status Scanner Timezones are not synchronized | 3.1.0 |  | Completed |
