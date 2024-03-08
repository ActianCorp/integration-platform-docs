---
title: Camel Routes Overview
---

# Apache Camel Route Support

## Overview

Apache Camel is a library of common Enterprise Integration Patterns, including FTP, file folder listeners, message/event aggregation, and much more. You can learn more about Enterprise Integration Patterns here: https://camel.apache.org/components/4.4.x/eips/enterprise-integration-patterns.html.

Integration Manager and Integration Agent both have full Apache Camel support for their XML DSL. You can learn more about Camel XML DSL here: https://camel.apache.org/components/4.4.x/others/java-xml-io-dsl.html.

:::note
Camel DSL support supersedes and replaces the File Folder Listener support provided in versions prior to 3.2.
:::

## Activating XML DSL

Once you have created your DSL, drop it in the appropriate folder as `routes.xml`:

* Integration Manager: `(ProgramDataDirectory)/Actian/IntegrationManager/camel/routes.xml`
* Integration Agent: `(ProgramDataDirectory)/Actian/IntegrationAgent/camel/routes.xml`

## Platform Configurations

Refer to the following topics for example configurations and available properties:

* [Camel File Processing History Management](./camel-history-management)
* [Camel Route Configuration for AWS S3](./camel-route-aws)
* [Camel Route Configuration for Azure Blob Storage](./camel-route-azure)
* [Camel Route Configuration for Google Cloud Storage](./camel-route-google)
* [Camel Route Configuration for Local Storage](./camel-route-local.md)