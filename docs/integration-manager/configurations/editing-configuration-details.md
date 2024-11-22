---
title: Editing Configuration Details
---

# Editing Configuration Details

To edit configuration details:

1. Select the **Configurations** tab.
2. Click the configuration that you want to edit:

   ![Configuration Select](/img/Configuration-Select.png)

3. The **Configuration Details** page is displayed:

   ![Configuration Details Page](/img/Configuration-Details-Page.png)

4. Edit the configuration properties as desired. See [Configuration Properties](editing-configuration-details#configuration-properties).

## Configuration Properties

| Properties | Editable | Description |
| --- | --- | --- |
| Configuration name | Yes | The configuration name. Click the configuration name or pencil icon to edit the configuration name. Click <img src="/img/icons/save.svg" className="icon" alt="the Save icon"/> to save your changes.|
| Description | Yes | The configuration description. Click the description text or pencil icon to edit the description. Click <img src="/img/icons/save.svg" className="icon" alt="the Save icon"/> to save your changes. |
| Base Template | No | The template with which the configuration is associated. If the configuration does not have an association with a Template, this field will display “Not Set”. See [Edit Template](../templates/editing-template-details).
| Status | Yes | You can toggle this property between **Active **and **Inactive**. You can run the configuration only if it is set to **Active**. See [Set Configuration to Active or Inactive](./activating-or-inactivating-configurations).
| Run Location | Yes | This property specifies which engine to use when executing the associated configuration. Clicking the edit icon will expose a list of available options. To use one of the cloud-based engines provided by Actian, select the default option. To learn more about remote engines, see [Run Your First Remote Job](../../integration-agent/run-your-first-remote-job).<br />For more details on how Run Location works, see [Run Location Use Cases](./run-location).
| Package Uploaded | Yes | Displays the package(s) that were uploaded into the configuration. Clicking the package name or the edit icon opens the **Upload Packages and Files** dialog to let you upload additional packages into the configuration.
| Entry Point | Yes | Specifies the entry point where the executed job will begin. The entry point must be a master Run Time Config (.rtc) file in your project. The .rtc file can be a master process.rtc or map.rtc file.
| Artifact Override | Yes | You can toggle this property between ON and OFF. When set to ON, the package process steps will be overridden by the artifacts added on the **Files** page (see [Managing Files](../files/managing-files)). The artifact must have the same name as in the package.
| Job Timeout | Yes | Jobs run from this configuration will time out if they do not finish within the time that is set (in minutes). If the timeout is set to 0, the timeout will be ignored.
| Scheduling | Yes | This property displays the schedule associated with the configuration. Possible values are:<br /><br /><ul><li>**On Demand** - Unscheduled; the configuration must be run manually. See Run a Configuration Manually</li><li>**Interval** - Scheduled to run every x hours and x minutes.</li><li>**Daily** - Scheduled to run every x days at a specified time.</li><li>**Weekly** - Scheduled to run every week at a specified time on a specific day.</li><li>**Monthly** - Scheduled to run every month on a specific day every x months at a specified time.</li><li>**Custom** - Scheduled to run as per the specified schedule frequency.</li><li>**Custom CRON Expression** - Scheduled by a Quartz CRON expression, which you specify. See a quick [Cron expression tutorial](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) provided by Quartz.</li></ul>See [Edit Configuration Schedules](./editing-configuration-schedules).
| Log Level | Yes | Specifies the types of messages that will be included in the job’s log file. Possible settings include:<br /><br /><ul><li>**Inherit From Template**</li><li>**SEVERE** – Logs errors that can cause the process execution to terminate if Break after first error is set</li><li>**WARNING** – Logs messages about data truncation in a field, field name changes, loss of precision, or other issues</li><li>**INFO** – Logs messages such as “Execution initialization...,” “Execution successful,” whether the process execution was terminated, and so on.</li><li>**DEBUG** – All messages generated as a result of a TraceOn action and some other messages are logged at this level. In this case, the record number, first five fields of each record, and all the events are recorded.</li></ul>
| Owner | Yes | Displays the first two characters of the configuration owner name. The default owner is the creator, but ownership can be transferred to another user at any time. Clicking the owner ID or edit icon will expose a list of available users. Select the desired user ID to transfer ownership of configuration.
| Change Log | No | Specifies the created date and last modified date for the configuration.


