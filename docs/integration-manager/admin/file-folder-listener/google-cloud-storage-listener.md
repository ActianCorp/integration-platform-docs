---
title: Google Cloud Storage Listener
tags:
 - Content Issues
---
# Google Cloud Storage Listener

The Google Cloud Storage Listener monitors Google Storage buckets for files and will execute a pre-defined Job Configuration (config-id) when triggered.

:::note[Notes]

* The File Folder Listener Service must be restarted for any configuration changes to take effect.
* Make sure you have already completed [Authorizing the File Folder Listener Service](./file-folder-listener-service#authorizing-the-file-folder-listener-service).

:::

## Add Blob Storage Permissions

For more information on how to create/obtain this key, see [https://cloud.google.com/storage/docs/reference/libraries#setting_up_authentication](https://cloud.google.com/storage/docs/reference/libraries#setting_up_authentication)

**application.properties**

`(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties`

### Example
```
# GCP Storage Connection Info (key file)
gcp.storage.service-account-key=C:/ProgramData/AccessKeys/gcp-account-name-1-935e6EXAMPLE.json 
```

## Listener Configuration

<font color="red">Current Help says these properties are configured in **file-folder-listener-listeners.yml**.</font>
<font color="blue">GGH Feedback - listeners.yml is right</font>
**listeners.yml**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml

### Example

:::info[IMPORTANT]

Indentation is critical for YAML syntax!

:::

```
listeners:      
  - id: gcp-bucket-listener-accounts
    config-id: 90378
    listener-type: gcp
    active: true
    source-bucket-name: listener-bucket-us-east1-accounts
    source-bucket-region: us-east1
    include-pattern: ^Accounts.*
    filename-override: Accounts.txt
  - id: gcp-bucket-listener-contacts
    config-id: 90379
    listener-type: gcp
    active: true
    source-bucket-name: listener-bucket-us-east1-contacts
    source-bucket-region: us-east1
    include-pattern: ^Contacts.*
    filename-override: Contacts.txt
```

## Properties

| Property | Description | Default |
| :--- | :--- | :--- |
| `id`| A unique identifier for the listener. |   |
| `listener-type` | Available listener types: local, aws, gcp azure. |  |
| `config-id`  | The Job Configuration id to run in Integration Manager. |  |
| `active` | Whether or not this listener is active. | `true` |
| `source-bucket-name` | The GCP bucket name to monitor for new files. |  |
| `source-bucket-region` | Region of the GCP bucket (Note that GCP region codes are slightly different from AWS S3). |   |
| `include-pattern` | Includes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) and [RegexPal](https://www.regexpal.com/). |   |
| `source-file-prefix`| IGNORED. NOT SUPPORTED FOR THIS LISTENER. |   |
| `filename-override`| This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files. |  |
