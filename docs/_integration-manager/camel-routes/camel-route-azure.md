---
layout: default
title: Camel Route Configuration for Azure Blob Storage
nav_order: 3
parent: Camel Route Configuration
---
# Camel Route Configuration for Azure Blob Storage

## Overview

The File Folder Listner can be configured with Camel route and its typically consists of a series of processing steps that are connected in a linear sequence.

## Route Configuration

**routes-prototype.xml**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/routes-prototype.xml

NOTE: Multiple routes (i.e. for AWS,Azure, GCP and Local) can be added into a single routes-prototype.xml

Example:
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

| Property                | Default | Description                                                                                                                                                                                                                               |
| :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| route id                      |         | A unique identifier for the route configuration.                                                                                                                                                                                                     |
| autoStartup           | false       | This prevent Camel starting the routes on startup.                                                                                                                                                                                         |
| jobConfigId              |         | The jobConfigId property is configured above with constant value 102712 i.e. (```<constant>102712</constant>```). The constant value is the job configuration Id in your Integration Manager.                                                                                                                                                                                  |
| filenameOverride              |         | The filenameOverride property is the of the file you want to override i.e. (```<constant>input.txt</constant>```). The constant value is input.txt.      |
| azure-storage-account-name1                  |     | This is the name of your storage account you want to specify. This  ```azure-storage-account-name1``` is a sample value and this need to be replaced with your storage account name.                                                                                                                                                                             |
| azureStorageContainerName                  |     | This is the name of your storage container you want to specify. This   ```azureStorageContainerName``` is a sample value and this need to be replaced with your storage container name.                                                                                                                                                                             |
| credentialType      | AZURE_IDENTITY        | Determines the credential strategy to adopt.                                                                                                                                                                                              |
| accessKey    |         | Access key for the associated azure account name to be used for authentication with azure blob services. In the above example ```azure.blob.accesskey``` is the placeholder for accesskey value.                                                                                                                                                   |
| backoffMultiplier       |         | To let the scheduled polling consumer backoff if there has been a number of subsequent idles/errors in a row. The multiplier is then the number of polls that will be skipped before the next actual attempt is happening again. When this option is in use then backoffIdleThreshold and/or backoffErrorThreshold must also be configured.                                      |
| backoffErrorThreshold       |         | The number of subsequent error polls (failed due some error) that should happen before the backoffMultipler should kick-in.    |
| backoffIdleThreshold       |         | The number of subsequent idle polls that should happen before the backoffMultipler should kick-in.    |
| process ref       |         | A unique identifier for error handler process.    |
| recursive       | false       | If a directory, will look for files in all the sub-directories as well.    |
| filterFile      |         | Filters the file based on Simple language. For example to filter on file size, you can use ```$\{file:size}``` 5000. In the above example filterFile is configured with file that was modified over 14 days ago (i.e. ```${file:modified} &lt; ${date:now-14d}``` ).  |
| level       | INFO        | Logging level to use. In the above example the log endpoint is configured to trash.  |