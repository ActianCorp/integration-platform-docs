---
layout: default
title: Azure Blob Storage Listener
nav_order: 3
parent: File Folder Listener
---
# Azure Blob Storage Listener

## Overview

The Azure Blob Storage Listener monitors Blob containers for files and will execute a pre-defined Job Configuration (config-id) when triggered.

## Add Blob Storage Permissions

For more information on how to create/obtain this key, see [https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys)

**application.properties**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties

Example:
```
# Azure Connection Info
azure.blob.accesskey=EXAMPLEKEYVALUENefMtV50Sp7o7dW2GhKeZQWUce6z6nTb/gylpzsq5m5UEUcgB2QqxlDgEXAMPLEKEYVALUE== 
```

## Listener Configuration

Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization

**listeners.yml**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml

NOTE: indentation is critical for YAML syntax!

Example:
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

NOTE: "include-pattern" preempts "source-file-prefix"

| Property                | Default | Description                                                                                                                                                                                                                               |
| :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                      |         | A unique identifier for the listener.                                                                                                                                                                                                     |
| listener-type           |         | Available listener types: local, aws, gcp, azure.                                                                                                                                                                                         |
| config-id               |         | The Job Configuration id to run in Integration Manager.                                                                                                                                                                                   |
| active                  | true    | Whether or not this listener is active.                                                                                                                                                                                                   |
| storage-account-name    |         | The Azure storage account name.                                                                                                                                                                                                           |
| source-container-name   |         | The Azure blob container name to monitor for new files.                                                                                                                                                                                   |
| include-pattern         |         | Includes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet), [RegexPal](https://www.regexpal.com/) |
| source-file-prefix      |         | Includes files if the file name matches the prefix pattern (i.e. file name starts with) you specify. Ex: Accounts (equivalent to regex: ^Accounts.\*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc...                          |
| filename-override       |         | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files.                                           |