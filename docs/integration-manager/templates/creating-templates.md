---
title: Creating Templates
---

# Creating Templates

Templates contain integration settings that are reusable by linked configurations. Templates include a package, macros, and a location to execute the job.

To create a template:

1. Select the **Templates** tab.
2. Click **Create Template**. 
3. The **Data Integration Template Setup** page is displayed:

   ![Template-Setup 1](/img/Template-Setup1.png)

4. Enter a unique name in the **Name** field.
5. By default, the **Auto-Create Configuration** checkbox is checked. This automatically creates a new configuration that will inherit this template’s settings. If you do not want to automatically create a configuration from this template, unselect the **Auto-Create Configuration** radio button.
6. Do one of the following:
   * Click **Local&nbsp;System**, browse to the desired folder, and select a configuration file (.djar,.rtc,.process,.ip.xml,.tf.xml,.sqlite).
   * Click **Integration&nbsp;Files**. In the **File&nbsp;Manager**, select a package, then click **Select&nbsp;Package**. For more information on using the **File Manager**, see [Importing a Private File](../configurations/importing-configurations#importing-a-private-file) or [Importing a Public File](../configurations/importing-configurations#importing-a-public-file).
7. The template is created and you are redirected to the **Template Details** page. Refer to [Editing Template Details](./editing-template-details).
