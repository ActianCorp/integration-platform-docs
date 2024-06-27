---
title: File Listener Services Overview
---

# File Listener Services Overview

## Overview

Listener services are used to monitor file directories or cloud storage buckets/containers for new files.

When a new file appears that matches your include/exclude criteria, the associated listener submits the file to a Job Configuration in Integration Manager. The file will be available to the specified integration process using the $(LOCAL_JOB_SPEC_DIR) macro at runtime. For example, a file named Accounts.txt will be available as $(LOCAL_JOB_SPEC_DIR)Accounts.txt.

:::note
Camel DSL support supersedes and replaces the File Folder Listener support provided in versions prior to 3.2.
:::

## Enabling File Listener Core Services

Locate your `application.properties` file:

* Integration Manager: `<ProgramDataDirectory>\Actian\IntegrationManager\conf\application.properties`
* Integration Agent: `<ProgramDataDirectory>\Actian\IntegrationAgent\conf\application.properties`

Add the following properties if they do not already exist:

```
camel.springboot.auto-startup=true
camel.springboot.routes-reload-enabled=true
camel.springboot.routes-reload-directory=${sharedDataPath}/camel
```

Restart Integration Manager (or Integration Agent).

## File Listener COnfiguration Examples

Refer to the following topics for example configurations and available properties:

* [File Folder Listener Example](./file-listener-local.md)
* [AWS S3 Bucket Listener Example](./file-listener-aws)
* [Azure Blob Storage Listener Example](./file-listener-azure)
* [GCP Cloud Storage Listener Example](./file-listener-google)
* [Listener File History & Backup Configuration](./file-listener-history-management)