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

## Activating XML DSL

Once you have created your DSL, drop it in the appropriate folder as `routes.xml`:

* Integration Manager: `<ProgramDataDirectory>\Actian\IntegrationManager\camel\routes.xml`
* Integration Agent: `<ProgramDataDirectory>\Actian\IntegrationAgent\camel\routes.xml`

## Platform Configurations

Refer to the following topics for example configurations and available properties:

* [File Folder Listener Example](./camel-route-local.md)
* [AWS S3 Bucket Listener Example](./camel-route-aws)
* [Azure Blob Storage Listener Example](./camel-route-azure)
* [GCP Cloud Storage Listener Example](./camel-route-google)
* [Listener File History & Backup Configuration](./camel-history-management)