---
layout: default
title: Camel Route Configuration for AWS S3
nav_order: 2
parent: File Folder Listener
---
# Camel Route Configuration for AWS S3

## Overview

The File Folder Listner can be configured with Camel route and its typically consists of a series of processing steps that are connected in a linear sequence.

## Route Configuration

Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization

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
