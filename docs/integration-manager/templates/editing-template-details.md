---
title: Editing Template Details
tags:
 - Content Issues
---

# Editing Template Details

To edit template details:

1. Select the **Templates** tab.
   
   The **Templates** page displays the available integration templates.
2. Click the template that you want to edit:

   ![Template Select](/img/Template-Select.png)

4. The **Template Details** page is displayed.

   ![Template Details Page](/img/Template-Details-Page.png)

You can view and edit the template properties listed below in the [Template Properties](editing-template-details#template-properties) table.

You can also perform additional actions from the panel on the top left of the page:

   ![Template Details Panel](/img/Template-Details-Panel.png)

Refer to the following:

* [Managing Template Macros](./managing-template-macros) 
* [Managing Template Files](./managing-template-files) 
* [Managing Template Configurations](./managing-template-configurations) 

## Template Properties

**<font color="red">TO DO: Compare with Configuration Properties table to see what we can reuse. Also, should we change "template owner name" to just "owner name" so we can reuse the Owner row between Templates and Configurations, or create a variable for that one word? Same for Change Log row.</font>**

| Properties | Editable | Description |
| --- | --- | --- |
| Template name | Yes | The template name. Click the template name or the pencil icon to edit the template name. Click ![](/img/icons/save.svg) to save your changes.|
| Description | Yes | The template description. Click the description text or pencil icon to edit the description text. Click ![](/img/icons/save.svg) to save your changes. |
| Package Uploaded | Yes | Displays the package file for the integration. Click the edit icon to open the **Upload Packages & Files** dialog, where you can upload a new package file or select a previously-uploaded package file.
| Status | Yes | You can toggle this property between **Active **and **Inactive**. You can use the template only if it is set to Active. See [Activating or Inactivating Templatess](./activating-or-inactivating-templates).
| Entry Point | Yes | Displays the entry point where the executed job will begin. If the entry point is not defined, “Not Set” is displayed. Clicking the edit icon will expose a list of available entry points to select from.  
| Run Location | Yes | Specifies which engine to use when executing the associated configuration. Clicking the edit icon will expose a list of available options. To use one of the cloud-based engines provided by Actian, select the default option. To learn more about remote engines, see [Managing Agents and Devices](../admin/agents-and-devices/managing-agents-and-devices).
| Log Level | Yes | Specifies the types of messages that will be included in the job’s log file. Possible settings include:<br /><br /><ul><li>**Inherit From Template**</li><li>**SEVERE** – Logs errors that can cause the process execution to terminate if Break after first error is set</li><li>**WARNING** – Logs messages about data truncation in a field, field name changes, loss of precision, or other issues</li><li>**INFO** – Logs messages such as “Execution initialization...,” “Execution successful,” whether the process execution was terminated, and so on.</li><li>**DEBUG** – All messages generated as a result of a TraceOn action and some other messages are logged at this level. In this case, the record number, first five fields of each record, and all the events are recorded.</li></ul>
| Owner | Yes | Displays the first two characters of the template owner name. The default owner is the creator, but ownership can be transferred to another user at any time. Clicking the owner ID or edit icon will expose a list of available users. Select the desired user ID to transfer ownership.
| Job Timeout | Yes | Jobs run from this configuration will time out if they do not finish within the time that is set (in minutes). If the timeout is set to 0, the timeout will be ignored.
| Change Log | No | Specifies the created date and last modified date for the template.
