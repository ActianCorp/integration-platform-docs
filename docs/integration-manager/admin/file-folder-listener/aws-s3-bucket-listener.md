---
title: AWS S3 Bucket Listener
tags:
 - Content Issues
---

# AWS S3 Bucket Listener

The AWS S3 Bucket Listener monitors S3 buckets for files and will execute a pre-defined Job Configuration (config-id) when triggered.

:::note[Notes]

* The File Folder Listener Service must be restarted for any configuration changes to take effect.
* Make sure you have already completed [Authorizing the File Folder Listener Service](./file-folder-listener-service#authorizing-the-file-folder-listener-service).

:::

## Add Bucket Permissions

**application.properties**

`(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties`

### Example
```
# AWS S3 Connection Info
aws.s3.accesskey=AKIAIOSFODNN7EXAMPLE 
aws.s3.secretkey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

## Listener Configuration

<font color="red">
Current Help says these properties are configured in **file-folder-listener-listeners.yml**.
</font>

**listeners.yml**

`(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml`

### Example

:::info[IMPORTANT]

Indentation is critical for YAML syntax!

:::

```
listeners:   
  - id: aws-bucket-listener-accounts
    config-id: 90378
    listener-type: aws
    active: true
    source-bucket-name: listener-bucket-us-east-1-accounts
    source-bucket-region: us-east-1
    source-file-prefix: Accounts
	filename-override: Accounts.txt 
  - id: aws-bucket-listener-contacts
    config-id: 90379
    listener-type: aws
    active: true
    source-bucket-name: listener-bucket-us-east-1-contacts
    source-bucket-region: us-east-1
    source-file-prefix: Contacts 
	filename-override: Contacts.txt
```


## Properties

| <div style={{width: 175}}>Property</div> |  Description | Default |
| :--- | :--- | :--- |
| `id` | A unique identifier for the listener. |  |
| `listener-type` | Available listener types: `local`, `aws`, `gcp`, `azure`. |  |
| `config-id` | The Job Configuration id to run in Integration Manager. |  |
| `active` | Whether or not this listener is active. | `true` |
| `source-bucket-name` | The S3 bucket name to monitor for new files. |  |
| `source-bucket-region` | Region of the S3 bucket.<br /> **Note:** AWS S3 region codes are slightly different from GCP. |  |
| `include-pattern` | IGNORED. NOT SUPPORTED FOR THIS LISTENER. |  |
| `source-file-prefix` | Includes files if the file name matches the prefix pattern (that is, the file name starts with the characters) you specify. For example, Accounts (equivalent to regex: ^Accounts.\*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc. **<font color="red">In the Azure properties topic, it states that this is overriden by include-pattern. Just double-checking that that is not true here.</font>** |   |
| `filename-override` | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files. |  |

