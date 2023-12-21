---
title: Creating Templates
tags:
 - Content Issues
---

# Creating Templates

Templates contain integration settings that are reusable by linked configurations. Templates include a package, macros, and a location to execute the job.

To create a template:

1. Select the **Templates** tab.
2. The **Templates** page is displayed.
3. Click **Create Template**. 
4. The **Data Integration Template Setup** page is displayed:

   ![Template-Setup 1](/img/Template-Setup1.png)

5. Enter a unique name in the **Name** field.
6. By default, the **Auto-Create Configuration** checkbox is checked. This automatically creates a new configuration that will inherit this template’s settings. If you do not want to automatically create a configuration from this template, unselect the **Auto-Create Configuration** radio button. <font color="red">Can we link to a topic that describes auto-created configs more fully?</font>
7. Select a file from either your local system or the Integration Files repository as described in the following sections.

## Local System

1. Click **Local System**.
2. Select an existing Integration from your local system.

    :::note

    Accepted file formats are: .djar, .rtc, .process, .ip.xml, .tf.xml, .jar, .dr, or .js

    :::

3. The file is listed. <font color="red">If you click ![unlink](/img/icons/unlink.png), the file is removed. But if you click the Local System or Integration Files button again, the file is also removed. What would be the point of clicking the remove button first if you have to select a new file anyway? </font>

4. Click **Create**.
5. The template is created and you are redirected to the **Template Details** page. Refer to [Editing Template Details](./editing-template-details).

## Integration Files

1. Click **Integration Files**.
2. The **File Manager** dialog appears.
3. Choose an Integration from the Integrations Files repository.
4. Select whether to link a public or private package:

   ![Private Public Toggle](/img/icons/Private-Public-Toggle.png)

5. The file(s) are listed.
6. Select a package from the list, then click the **Select Package** button.
7. The **File Manager** dialog closes, and the file is listed. <font color="red">If you click![unlink](/img/icons/unlink.png), the file is removed. But if you click the Local System or Integration Files button again, the file is also removed. What would be the point of clicking the remove button first if you have to select a new file anyway? </font>
8. Click **Create**.
9. The template is created and you are redirected to the **Template Details** page. Refer to [Editing Template Details](./editing-template-details).