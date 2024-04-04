---
title: Managing Template Files
---

# Managing Template Files

You can upload files for use with your templates. These can be public files or private files.

* **Private Files** can be created, edited, or deleted by the logged–in user. These files are visible to administrators.
* **Public Files** can be seen and accessed by any user. They can be created, edited, or deleted only by an administrator.

## Viewing Template Files

To view files associated with a template:

1. Select the **Templates** tab.
2. Click the name of the template for which you want to view files:

   ![Select Template](/img/Template-Select.png)

3. On the **Template Details** page, click **Files** in the left pane:
   
   ![Template Files Link](/img/Template-Files-Link.png)

4. The **Template Files** page is displayed, listing all files and linked files from the File Repository associated with the template. Note that linked files will show **FROM PRIVATE FILES** or **FROM PUBLIC FILES**:

   ![Template Files Page](/img/Template-Files-Page-With-Annotations.png)

## Uploading Files to a Template

To upload files to a template:

1. On the **Template Files** page, click **Upload File**:
   
   ![Upload File Button](/img/Template-Upload-File-Button.png)
2. In the **Upload Files** dialog, drop one or more files or click **BROWSE FILES** and select one or more files.
3. The files are added to the **Uploading Files** dialog. You can click <img src="/img/icons/unlink.png" className="icon" alt="the Unlink icon"/> to remove any files.

   ![Uploading Files](/img/Uploading-Files-Dialog.png)
4. Click the **DONE** button. The files are added to the **Template Files** list:

   ![Uploaded Files](/img/Template-Uploaded-Files.png)

## Linking a Private File in the File Repository

:::note
* Any user can link a file they own. 
* Only admin users can link a private file from another user.
:::

1. On the **Template Files** page, click the dropdown arrow next to the **Upload File** button and select **Link file in Files Repository**:
   
   ![Link file in Files Repository](/img/Template-Link-File-in-Files-Repository.png)
2. The **File Manager** dialog is displayed.
3. If you are a non-admin user, only your name appears in the user dropdown. If you are an admin user, you can select a different user.
4. The files uploaded by the selected user are listed. Select one or more files and click the **Link&nbsp;File** button:

        ![File Manager Select Private Files](/img/File-Manager-Select-Private-Template-Files.png)
5. The private file now appears in the **Template Files** list:

   ![Template Files Link](/img/Template-Files-Private-File.png)

## Linking a Public File in the File Repository

1. On the **Template Files** page, click the dropdown arrow next to the **Upload File** button and select **Link file in Files Repository**:

   ![Link file in Files Repository](/img/Template-Link-File-in-Files-Repository.png)
2. The **File Manager** dialog is displayed.
3. Use the toggle control to select  **Public Files**, select one or more files, and click the **Link&nbsp;File** button:

   ![Link file in Files Repository](/img/Template-Link-Public-File.png)
4. The public file now appears in the **Template Files** list:

   ![Template Files Link](/img/Template-Files-Public-File.png)

## Changing the Selected Package

You can upload or link multiple package files to a template, but only one package can be selected for the template. The currently-selected package is labeled with **SELECTED PACKAGE** in the **Template Files** list:

   ![Selected Package](/img/Template-Selected-Package.png)

To select a different package:

1. On the **Template Details** page, click <img src="/img/icons/edit-icon.png" className="icon" alt="the Edit icon"/> to the right of **Package Uploaded**:

   ![Package Uploaded Edit](/img/Template-Package-Uploaded-Edit.png)
2. In the **Upload Packages & Files** dialog, select a package and click **DONE**:

   ![Select Different Package](/img/Template-Selected-Package-Change.png)
3. The **Template Files** list shows the newly-selected package:

   ![Selected Package](/img/Template-Selected-Package-Changed.png)

## Downloading Template Files

1. Do one of the following:
   * To download a single file, click the ellipsis button next to the desired file and select **Download**:

     ![](/img/Download-Template-File.png)
   * To download multiple files, select the checkbox next to the desired files and click <img src="/img/icons/download.png" className="icon" alt="the Download icon"/>:

     ![](/img/Download-Template-Files.png)

## Deleting Template Files and File Links

:::note[Notes]
* Only Admins can delete public files or user files owned by another user.
* Deleting a file link only removes the link between the configuration and the file. It does not delete the file from the File Repository.
:::

1. Do one of the following:
   * To delete a single file, click the ellipsis button next to the desired file and select **Delete**:

     ![](/img/Delete-Single-Template-File.png)
   * To delete multiple files, select the checkbox next to the desired files and click <img src="/img/icons/trash.png" className="icon" alt="the Delete icon"/>:

     ![](/img/Delete-Multiple-Template-Files.png)
