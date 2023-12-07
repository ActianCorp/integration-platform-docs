---
layout: default
title: Camel Route Configuration for AWS S3
nav_order: 2
parent: Camel Route Configuration
---
# Camel Route Configuration for AWS S3

## Overview

Monitor an S3 folder for new files and submit to the JobConfig run API.

## Route Configuration

**routes-prototype.xml**
(ProgramDataDirectory)/Actian/FileFolderListener/conf/routes-prototype.xml

NOTE: Multiple routes (i.e. for AWS,Azure, GCP and Local) can be added into a single routes-prototype.xml

Example:
```
<?xml version="1.0" encoding="UTF-8"?>
<routes xmlns="http://camel.apache.org/schema/spring">    
    <route id="run-jobconfig-with-S3-file" autoStartup="false">
        <setProperty name="jobConfigId">
            <constant>102712</constant>
        </setProperty>
        <setProperty name="filenameOverride">
            <constant>input.txt</constant>
        </setProperty>
        <from uri="aws2-s3://aws-s3-bucket-name?region=us-east-1&amp;accessKey=RAW({{aws.s3.accesskey}})&amp;secretKey=RAW({{aws.s3.secretkey}})&amp;maxMessagesPerPoll=1&amp;backoffMultiplier=6&amp;backoffErrorThreshold=5&amp;backoffIdleThreshold=5"/>
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

| Property                | Default | Description                                                                                                                                                                                                                               |
| :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| route id                      |         | A unique identifier for the route configuration.                                                                                                                                                                                                     |
| autoStartup           | false       | This prevent Camel starting the routes on startup.                                                                                                                                                                                         |
| jobConfigId              |         | The jobConfigId is configured above with constant value 102712 i.e. (```<constant>102712</constant>```). The constant value is the job configuration Id in your Integration Manager.                                                                                                                                                                                  |
| filenameOverride              |         | The name of the file you want to override i.e. (```<constant>input.txt</constant>```). The constant value is input.txt.                                                                                                                                                                                  |
| aws-s3-bucket-name                  |     | The S3 Bucket name you want to specify. This ```aws-s3-bucket-name``` is a sample value for bucket name and this need to be replaced with your bucket  name.                                                                                                            |
| region      |         | The region in which S3 buckets needs to work.                                                                                                                                                                                              |
| accessKey    |         | Amazon AWS Access Key. In the above example ```aws.s3.accesskey``` is a sample value for AWS accesskey and this need to be replaced with your accesskey.                                                                                                                                                   |
| secretKey         |         | Amazon AWS Secret Key. In this above example ```aws.s3.secretkey``` is a sample value for AWS secretkey and this need to be replaced with your secretkey.                                                                                                                                                                                                 |
| maxMessagesPerPoll      | 10       | This gets the maximum number of messages as a limit to poll at each polling. The default value is 10. Use 0 or a negative number to set it as unlimited.                          |
| backoffMultiplier       |         | To let the scheduled polling consumer backoff if there has been a number of subsequent idles/errors in a row. The multiplier is then the number of polls that will be skipped before the next actual attempt is happening again. When this option is in use then backoffIdleThreshold and/or backoffErrorThreshold must also be configured.                                      |
| backoffErrorThreshold       |         | The number of subsequent error polls (failed due some error) that should happen before the backoffMultipler should kick-in.    |
| backoffIdleThreshold       |         | The number of subsequent idle polls that should happen before the backoffMultipler should kick-in.    |
| process ref       |         | A unique identifier for error handler process.    |
| sharedDataPath       |         | The destination location where the file will be stored after processed. In the above example sharedDataPath is configured with Integration Manager.     |
| recursive       | false       | If a directory, will look for files in all the sub-directories as well.    |
| filterFile      |         | Filters the file based on Simple language. For example to filter on file size, you can use ```$\{file:size}``` 5000. In the above example filterFile is configured with file that was modified over 14 days ago (i.e. ```${file:modified} &lt; ${date:now-14d}``` ).  |
| level       | INFO        | Logging level to use. In the above example the log endpoint is configured to trash.  |