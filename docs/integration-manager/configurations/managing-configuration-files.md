---
title: Managing Configuration Files
tags:
 - Content Issues
---

# Managing Configuration Files

**<font color="red">Need to explain the different use cases for configuration files (packages, process files, etc.).</font>**

You can upload files for use with your configurations. These can be public files or private files.

* **Private Files** can be created, edited, or deleted by the logged–in user. These files are visible to administrators.
* **Public Files** can be seen and accessed by any user. They can be created, edited, or deleted only by an administrator.

## Viewing Configuration Files

To view files associated with a configuration:

1. Select the **Configurations** tab.
2. Click the name of the configuration for which you want to view files:

   ![Select Configuration](/img/Configuration-Select2.png)

3. On the **Configuration Details** page, click **Files** in the left pane:
   
   ![Configuration Files Link](/img/Configuration-Files-Link.png)

4. The **Configuration Files** page is displayed, listing all files and linked files from the File Repository associated with the configuration. Note that linked files will show **FROM PRIVATE FILES** or **FROM PUBLIC FILES**:

   ![Configuration Files Page](/img/Configuration-Files-Page-With-Annotations.png)

## Uploading Files to a Configuration

To upload files to a configuration:

1. On the **Configuration Files** page, click the **Upload File** button:
   
   ![Upload File Button](/img/Configuration-Upload-File-Button.png)
2. In the **Upload Files** dialog, drop one or more files or click **BROWSE FILES** and select one or more files.
3. The files are added to the **Uploading Files** dialog. You can click <img src="/img/icons/unlink.png" className="icon" alt="the Unlink iconn"/> to remove any files.

   ![Uploading Files](/img/Uploading-Files-Dialog.png)
4. Click the **DONE** button. The files are added to the **Configuration Files** list:

   ![Uploaded Files](/img/Configuration-Uploaded-Files.png)

## Linking a Private File in the File Repository

:::note
* Any user can link a file they own. 
* Only admin users can link a private file from another user.
:::

1. On the **Configuration Files** page, click the dropdown arrown next to the **Upload File** button and select **Link file in Files Repository**:
   
   ![Link file in Files Repository](/img/Link-File-in-Files-Repository.png)
2. The **File Manager** dialog is displayed.

   ![File Manager Private Files](/img/File-Manager-Private.png)

3. If you are a non-admin user, only your name appears in the user dropdown. If you are an admin user, you can select a different user:
  
        ![File Manager Select User](/img/File-Manager-Select-User.png)
4. The files uploaded by the selected user are listed. Select one or more files and click the **Link File** button:

        ![File Manager Select Private Files](/img/File-Manager-Select-Private-Files.png)
5. The private file now appears in the **Configuration Files** list:

   ![Configuration Files Link](/img/Configuration-Files-Private-File.png)

## Linking a Public File in the File Repository

1. On the **Configuration Files** page, click the dropdown arrown next to the **Upload File** button and select **Link file in Files Repository**:
   
   ![Link file in Files Repository](/img/Link-File-in-Files-Repository.png)
2. The **File Manager** dialog is displayed.

   ![File Manager Private Files](/img/File-Manager-Private.png)
3. Use the toggle control to select  **Public Files**, select one or more files, and click the **Link File** button:

   ![File Manager Select User](/img/File-Manager-Select-Public-File.png)
4. The public file now appears in the **Configuration Files** list:

   ![Configuration Files Link](/img/Configuration-Files-Public-File.png)

## Changing the Selected Package

You can upload or link multiple package files to a configuration, but only one package can be selected for the configuration. The currently-selected package is labeled with **SELECTED PACKAGE** in the **Configuration Files** list:

   ![Selected Package](/img/Selected-Package.png)

To select a different package:

1. On the **Configuration Details** page, click <img src="/img/icons/edit-icon.png" className="icon" alt="the Edit icon"/> to the right of **Package Uploaded**:

   ![Package Uploaded Edit](/img/Package-Uploaded-Edit.png)
2. In the **Upload Packages & Files** dialog, select a package and click **DONE**:

   ![Select Different Package](/img/Selected-Package-Change.png)
3. The **Configuration Files** list shows the newly-selected package:

   ![Selected Package](/img/Selected-Package-Changed.png)

## Downloading Configuration Files

1. Click the filename:

   ![Download Files](/img/Download-File.png)&nbsp;
2. In the **Save As** window, navigate to the desired folder and click **Save**.
 
## Deleting Configuration File Links

Deleting a configuration file link only removes the link between the configuration and the file. It does not delete the file from the File Repository.

1. On the **Configuration Files** page, select the checkbox next to the file(s) you want to unlink and click the **Delete File Link** button:
   
   ![Unlink Files](/img/Unlink-Files.png)

## Deleting Configuration Files

:::note
Only Admins can delete public files or user files owned by another user.
:::

1. On the **Configuration Files** page, select the checkbox next to the file(s) you want to delete and click the **Delete File** button:

   ![Delete Configuration Files](/img/Delete-Configuration-Files.png)

