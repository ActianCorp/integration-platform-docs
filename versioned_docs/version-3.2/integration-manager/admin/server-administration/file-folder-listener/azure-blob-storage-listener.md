---
title: Azure Blob Storage Listener
---
# Azure Blob Storage Listener

The Azure Blob Storage Listener monitors Blob containers for files and will execute a pre-defined Job Configuration (config-id) when triggered.

:::note[Notes]
* The File Folder Listener Service must be restarted for any configuration changes to take effect.
* Make sure you have already completed [Authorizing the File Folder Listener Service](./file-folder-listener-service#authorizing-the-file-folder-listener-service).
:::

## Add Blob Storage Permissions

For more information on how to create/obtain this key, see [https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys).

**application.properties**

`<ProgramDataDirectory>/Actian/FileFolderListener/conf/application.properties`

### Example

```
# Azure Connection Info
azure.blob.accesskey=EXAMPLEKEYVALUENefMtV50Sp7o7dW2GhKeZQWUce6z6nTb/gylpzsq5m5UEUcgB2QqxlDgEXAMPLEKEYVALUE== 
```

## Listener Configuration

**listeners.yml**

`<ProgramDataDirectory>/Actian/FileFolderListener/conf/listeners.yml`

### Example

:::info[IMPORTANT]
Indentation is critical for YAML syntax!
:::

```
listeners:   
  - id: azure-container-listener-accounts     
    config-id: 90378
    listener-type: azure
    active: true
    storage-account-name: my-azure-storage-account
    source-container-name: my-accounts-container
    include-pattern: ^Accounts.*
    filename-override: Accounts.txt
  - id: azure-container-listener-contacts
    config-id: 90379
    listener-type: azure
    active: true
    storage-account-name: my-azure-storage-account
    source-container-name: my-contacts-container 
    source-file-prefix: Contacts
    filename-override: Contacts.txt
```

## Properties

| <div style={{width: 175}}>Property</div> | Description |  Default |
| :--- | :--- | :--- |
| `id` | A unique identifier for the listener. |  |
| `listener-type` | Available listener types: `local`, `aws`, `gcp`, `azure`. |  |
| `config-id` | The Job Configuration id to run in Integration Manager. |  |
| `active` | Whether or not this listener is active. | `true` |
| `storage-account-name` | The Azure storage account name. |   |
| `source-container-name` | The Azure blob container name to monitor for new files. |  |
| `include-pattern` | Includes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)  and [RegexPal](https://www.regexpal.com/). |   |
| `source-file-prefix` | Includes files if the file name matches the prefix pattern (that is, the file name starts with the characters) you specify. For example, Accounts (equivalent to regex: ^Accounts.\*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc. <br />**Note:**  This property is preempted by `include-pattern`, when specified.|   |
| `filename-override` | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files. |  |

