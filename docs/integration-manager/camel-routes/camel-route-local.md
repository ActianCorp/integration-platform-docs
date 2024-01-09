---
layout: default
title: Camel Route Configuration for Local Storage
nav_order: 1
parent: Camel Route Configuration
---
# Camel Route Configuration for Local Storage

## Overview

Monitor a local folder for new files and submit to the JobConfig run API.

## Route Configuration

**routes-prototype.xml**

`(ProgramDataDirectory)/Actian/FileFolderListener/conf/routes-prototype.xml`

:::note
Multiple routes (i.e., AWS, Azure, GCP, and Local) can be added into a single `routes-prototype.xml`.
:::

Example:
```
<?xml version="1.0" encoding="UTF-8"?>
<routes xmlns="http://camel.apache.org/schema/spring">    
    <route id="run-jobconfig-with-local-file" autoStartup="false">
        <setProperty name="jobConfigId">
            <constant>102712</constant>
        </setProperty>
        <setProperty name="filenameOverride">
            <constant>input.txt</constant>
        </setProperty>
        <from uri="file://{{sharedDataPath}}/listener/run"/>
        <doTry>
            <process ref="runJobConfigWithFile"/>
            <to uri="file://{{sharedDataPath}}/listener/processed"/>
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
| `recursive` | If a directory, will look for files in all the sub-directories as well. | `false` |
| `filterFile` | Filters the file based on Simple language. For example, to filter on file size, you can use a ```$\{file:size}``` of `5000`. In the above example, filterFile is configured with file that was modified over 14 days ago (i.e., ```${file:modified} &lt; ${date:now-14d}``` ). |  |
| `level` | Logging level to use. In the above example, the log endpoint is configured to trash. | `INFO` |