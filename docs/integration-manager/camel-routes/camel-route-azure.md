---
layout: default
title: Azure Blob Storage Listener Example
nav_order: 3
parent: Camel Route Configuration
---
# Camel Route Configuration for Azure Blob Storage

## Overview

Monitors an Azure Blob Container folder for new files and submit to the JobConfig run API.

## Route Configuration

**routes.xml**

* Integration Manager: `<ProgramDataDirectory>\Actian\IntegrationManager\camel\routes.xml`
* Integration Agent: `<ProgramDataDirectory>\Actian\IntegrationAgent\camel\routes.xml`

:::note
Multiple routes (i.e., AWS, Azure, GCP, and Local) can be added into a single `routes.xml`.
:::

### Example
```
<?xml version="1.0" encoding="UTF-8"?>
<routes xmlns="http://camel.apache.org/schema/spring">    
    <route id="run-jobconfig-with-azure-blob" autoStartup="false">
        <setProperty name="jobConfigId">
            <constant>102712</constant>
        </setProperty>
        <setProperty name="filenameOverride">
            <constant>input.txt</constant>
        </setProperty>
        <from uri="azure-storage-blob://azure-storage-account-name/azureStorageContainerName?credentialType=SHARED_ACCOUNT_KEY&amp;accessKey={{azure.blob.accesskey}}&amp;backoffMultiplier=6&amp;backoffErrorThreshold=5&amp;backoffIdleThreshold=5"/>
        <doTry>
            <process ref="runJobConfigWithFile"/>
            <to uri="file://{{sharedDataPath}}/listener/processed"/>
            <!--camel azure component does not support delete after read-->
            <toD uri="azure-storage-blob://azure-storage-account-name/azureStorageContainerName?operation=deleteBlob&amp;credentialType=SHARED_ACCOUNT_KEY&amp;accessKey={{azure.blob.accesskey}}"/>
            <doCatch>
                <exception>java.lang.Exception</exception>
                <to uri="file://{{sharedDataPath}}/listener/unprocessed"/>
                <process ref="writeExceptionFile"/>
                <to uri="file://{{sharedDataPath}}/listener/unprocessed"/>
            </doCatch>
        </doTry>
    </route>    
    <route id="manage-processed-file-history" autoStartup="false">
        <from uri="file://{{sharedDataPath}}/listener/processed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
        <to uri="log:trash?level=OFF"/>
    </route>
    <route id="manage-unprocessed-file-history" autoStartup="false">
        <from uri="file://{{sharedDataPath}}/listener/unprocessed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
        <to uri="log:trash?level=OFF"/>
    </route>
</routes>
```
## Properties

| Property | Description | Default |
| :--- | :--- | :--- |
| `route id` | A unique identifier for the route configuration. |  |
| `autoStartup` | Prevents Camel starting the routes on startup. | `false` |
| `jobConfigId` | The job configuration Id in your Integration Manager. The jobConfigId in the above example is configured above with the constant value 102712 (```<constant>102712</constant>```) |  |
| `filenameOverride` | The name of the file you want to override i.e. (```<constant>input.txt</constant>```). The constant value is `input.txt`. |
| `azure-storage-account-name1` | The name of your storage account. This ```azure-storage-account-name1``` example is a sample value and must be replaced with your storage account name. |  |
| `azureStorageContainerName` | The name of your storage container. This ```azureStorageContainerName``` is a sample value and must be replaced with your storage container name. |  |
| `credentialType` | Determines the credential strategy to adopt. | `AZURE_IDENTITY` |
| `accessKey` | Access key for the associated azure account name to be used for authentication with azure blob services. In the above example, ```azure.blob.accesskey``` is the placeholder for accesskey value. |  |
| `backoffMultiplier` | Allows the scheduled polling consumer to back off if there has been a number of subsequent idles/errors in a row. The multiplier is then the number of polls that will be skipped before the next actual attempt is made again. When this option is in use, `backoffIdleThreshold` and/or `backoffErrorThreshold` must also be configured. |  |
| `backoffErrorThreshold` |  The number of subsequent error polls (failed due to some error) that should happen before the `backoffMultiplier` should kick in. |  |
| `backoffIdleThreshold` | The number of subsequent idle polls that should happen before the backoffMultiplier should kick in. |  |
| `process ref` | A unique identifier for the error handler process. |  |
| `recursive` | If a directory, will look for files in all the sub-directories as well. | `false` |
| `filterFile` | Filters the file based on Simple language. For example, to filter on file size, you can use a ```$\{file:size}``` of `5000`. In the above example, filterFile is configured with file that was modified over 14 days ago (i.e., ```${file:modified} &lt; ${date:now-14d}``` ). |  |
| `level` | Logging level to use. In the above example, the log endpoint is configured to trash. | `INFO` |