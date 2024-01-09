---
title: File Folder Listener Service
tags:
 - Content Issues
---

# File Folder Listener Service

The File Folder Listener Service is used to monitor file directories or cloud storage buckets/containers for new files.

When a new file appears that matches your include/exclude criteria, the associated listener submits the file to a Job Configuration in Integration Manager. The file will be available to the specified integration process using the `$(LOCAL_JOB_SPEC_DIR)` macro at runtime. For example, a file named `Accounts.txt` will be available as `$(LOCAL_JOB_SPEC_DIR)Accounts.txt`.

The File Folder Listener Service is included with the installation of Integration Manager. A Windows service is registered with the name Actian File Folder Listener and must be started manually after configuration is complete.

![](/img/FileFolderListener.png)

## Preparing the File Folder Listener Service

### Prerequisites

Integration Manager must be installed, configured, and running.

### Basic Configuration

**application.properties**

`<ProgramDataDirectory>\Actian\FileFolderListener\conf\application.properties`.

| Property | Description|
| :--- | :--- |
| `listener.backup- directory` | The folder where backups of successfully submitted files are stored |
| `listener.error- directory` | The folder where copies of failed file submissions are stored, for example, Exceeded max file size, Integration Manager Service was not running, and so on |

## Authorizing the File Folder Listener Service

The File Folder Listener uses OAuth 2.0 Device Authorization (https://datatracker.ietf.org/doc/html/rfc8628) to securely connect to the Integration Manager API.

:::caution[Important]

We strongly recommend that you enable HTTPS for your Integration Manager server to protect your data across the wire. For more information, see [Enabling HTTPS](../security/enabling-https).

:::

To authorize the File Folder Listener Service:

1. Determine your Integration Manager API base URL, for example:
   * http://im-server-hostname.company.net:8080/api
   * https://im-server-hostname.company.net:443/api
2. Open a browser window.
3. Navigate to the device code retrieval URL:

    ```
    <im-api-base-url>/device/code?client_id=file-folder-listener&host=<file-folder-listener-hostname>
    ```
    For example:

    ```
    http://im-server-hostname.company.net:8080/api/device/code?client_id=file-folder-listener&host=file-folder-listener-hostname.company.net

    ```
    ```
    https://im-server-hostname.company.net:443/api/device/code?client_id=file-folder-listener&host=file-folder-listener-hostname.company.net
    ```

    :::note
   
      By default, the *file-folder-listener-hostname* and *im-server-hostname* are installed on the same machine, but they don't have to be.

    :::

4. When prompted, enter your Integration Manager User authentication credentials.
   
   Response should look like:
   ```
    {
    approved: false, user_code: "ZEPQ-VOK8",
    hostname: "file-folder-listener-hostname.company.net", device_code: "d4e4b7e7-9172-4562-bf11-98989245c6d7",
    verification_uri_complete: "http://im-server-hostname.company.net:8080/api/device/  activate?user_code=ZEPQ- VOK8",
    client_id: "file-folder-listener", expires_in: 599,
    interval: 15, owner: {
        id: "21368",
        name: "your-username@company.net"
       }
    }
   ```
5. Since you are already authenticated, simply click the device approval URL for “verification_uri_complete.”
   
   Response should look like:
   ```
    # Integration Manager Connection Info
    im.base-url=http://im-server-hostname.company.net:8080
    im.client-id=file-folder-listener
    im.client-secret=afa40ec4-26z1-493e-be71-6a9661d8e474
    im.device-code=d4e4b7e7-9172-4562-bf11-98989245c6d7
    im.user-code=ZEPQ-VOK8
   ```

6. In the `<ProgramDataDirectory>\Actian\FileFolderListener\conf\application.properties` file, delete any duplicate entries and then copy and paste the response into the file.
   
## Platform Listener Configurations

Follow the appropriate link for the Listener you want to configure:

* [Local Folder Listener](./local-folder-listener)
* [AWS S3 Bucket Listener](./aws-s3-bucket-listener)
* [Azure Blob Storage Listener](./azure-blob-storage-listener)
* [Google Cloud Storage Listener](./google-cloud-storage-listener)

## Advanced Configuration Properties

You can add these properties to `<ProgramDataDirectory>\Actian\FileFolderListener\conf\application.properties` to further customize behavior.

| <div style={{width: 220}}>Property</div> | Description | Default |
| :--- | :--- | :--- |
| `listener.retain-backup-files` | Set this to false to not retain backup files. Error files will still be saved. | `true` |
| `listener.backup-directory-max-file-age` | The number of days backup files are retained | `7` |
| `listener.error-directory-max-file-age` | The number of days error files are retained | `14` |

## File Size Configuration and Limitations

<font color="red">
In the current help, ths topic is listed twice -- once in User Guide (under the JobConfig File Listener API topic) and the System Administration Guide (under Authorizing and Configuring the File Folder Listener Service). Which is the appropriate location for this?
</font>

File size limitations are governed by the Integration Manager multipart file configuration in the `<ProgramDataDirectory>\Actian\IntegrationManager\conf\application.properties` file.

For example, to support 100 MB file size:


```
# MultipartFiles
spring.servlet.multipart.enabled=true
spring.servlet.multipart.file-size-threshold=100KB
spring.servlet.multipart.location=${sharedDataPath}/tmp
spring.servlet.multipart.max-file-size=100MB
spring.servlet.multipart.max-request-size=100MB
```
For unlimited file size (not recommended, as results are subject to hardware or OS limitations, which could lead to unrecoverable data loss):

```
# MultipartFiles
spring.servlet.multipart.enabled=true
spring.servlet.multipart.file-size-threshold=100KB
spring.servlet.multipart.location=${sharedDataPath}/tmp
spring.servlet.multipart.max-file-size=-1
spring.servlet.multipart.max-request-size=-1
```