---
layout: default
title: AWS S3 Bucket Listener
nav_order: 2
parent: File Folder Listener
---
# AWS S3 Bucket Listener

## Overview

The AWS S3 Bucket Listener monitors S3 buckets for files and will execute a pre-defined Job Configuration (config-id) when triggered.

## Add Bucket Permissions

**application.properties**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties

Example:
```
# AWS S3 Connection Info
aws.s3.accesskey=AKIAIOSFODNN7EXAMPLE 
aws.s3.secretkey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

## Listener Configuration

Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization

**listeners.yml**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml

NOTE: indentation is critical for YAML syntax!

Example:
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

| Property                | Default | Description                                                                                                                                                                                                                               |
| :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                      |         | A unique identifier for the listener.                                                                                                                                                                                                     |
| listener-type           |         | Available listener types: local, aws, gcp, azure.                                                                                                                                                                                         |
| config-id               |         | The Job Configuration id to run in Integration Manager.                                                                                                                                                                                   |
| active                  | true    | Whether or not this listener is active.                                                                                                                                                                                                   |
| source-bucket-name      |         | The S3 bucket name to monitor for new files.                                                                                                                                                                                              |
| source-bucket-region    |         | Region of the S3 bucket (Note that AWS S3 region codes are slightly different from GCP).                                                                                                                                                  |
| include-pattern         |         | IGNORED. NOT SUPPORTED FOR THIS LISTENER.                                                                                                                                                                                                 |
| source-file-prefix      |         | Includes files if the file name matches the prefix pattern (i.e. file name starts with) you specify. Ex: Accounts (equivalent to regex: ^Accounts.\*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc...                          |
| filename-override       |         | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files.                                           |