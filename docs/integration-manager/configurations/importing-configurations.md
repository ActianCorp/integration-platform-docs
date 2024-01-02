---
title: Importing Configurations
tags:
 - Content Issues
 - Bugs
---

# Importing Configurations

<font color="red">
Currently, the only way to access the Import Configuration page (for Cloud) is when creating your first configuration. (It is always available On-prem). This topic is intended to cover the import process regardless of whether it is your first or a subsequent configuration, and regardless of whether you are using Cloud or On-prem. I don't know whether this will be possible, but I entered issue IP-7258 to try to resolve the issue and normalize the process. If this is fixed, I will need to replace the first image with one that shows wherever the new Import button is located. If it does not get fixed, I will need to create separate topics for cloud and on-prem, and have each of those topics have different procedures for your first config and subsequent configs. This will result in 4 separate procedures for the same task, so hopefully this can be fixed.
</font>

To import a configuration:

1. Click the **Configurations** tab.
2. On the **Configurations** page, click **Create Configuration**:

   ![](/img/Configuration-Create1.png)
3. The **Import Configuration** page is displayed:
   
   ![](/img/Configuration-Create2.png)
4. Enter a unique **Name**, then click one of the following:
   * **Local&nbsp;System**: Browse to the desired folder and select a configuration file (.djar,.rtc,.process,.ip.xml,.tf.xml,.sqlite).
   * **Integration&nbsp;Files**: In the **File&nbsp;Manager**, select a package, then click **Select&nbsp;Package**. For more information on using the **File Manager**, see [Importing a Private File](#importing-a-private-file) or [Importing a Public File](#importing-a-public-file) below.
5. The file is added to the **Import Configuration** page. Click **Import**:
   
6. The package is imported and listed on the **Configuration Details** page:

   ![](/img/Private-Package-Imported.png)

7. Edit configuration details as desired. See [Editing Configuration Details](./editing-configuration-details).
   
### Importing a Private File:

1. If you are a non-admin user, only your name appears in the user dropdown. If you are an admin user, you can select a different user:
  
    ![](/img/File-Manager-Select-User-Package.png)
2. The files uploaded by the selected user are listed. Select a package and click **Select Package**:

        ![](/img/File-Manager-Select-Private-Package.png)

### Importing a Public File:

1. Use the toggle control to select public packages, select a package, and click **Select Package**:
  
    ![](/img/File-Manager-Select-Public-Package.png)
