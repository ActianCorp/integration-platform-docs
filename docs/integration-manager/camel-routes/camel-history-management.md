---
title: Camel File Processing History Management
tags:
 - Content Issues
---

# Camel File Processing History Management

<font color="red">
Would an overview be helpful here for readers who might not be as familiar with Camel, or are we assuming this is common knowledge for our audience? Or is this something Admins might know but users less so? Also, should we be capitalizing Camel (as in Apache Camel) or is it used generically?
</font>

All processed & unprocessed file history can be managed with camel route(s).

## Manage Processed File History

All processed files will be moved to this specified configured location. Note that the folder location must match the target folder(s) of another camel route, e.g., <code>run&#8209;jobconfig&#8209;with&#8209;azure&#8209;blob</code>.

Example:
```
<route id="manage-processed-file-history" autoStartup="false">
    <from uri="file://{{sharedDataPath}}/listener/processed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
    <to uri="log:trash?level=OFF"/>
</route>
```

## Manage Unprocessed File History

All unprocessed files will be moved to this specified configured location. Note that the folder location must match the target folder(s) of another camel route, e.g., <code>run&#8209;jobconfig&#8209;with&#8209;azure&#8209;blob</code>.

Example:
```
<route id="manage-unprocessed-file-history" autoStartup="false">
    <from uri="file://{{sharedDataPath}}/listener/unprocessed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
    <to uri="log:trash?level=OFF"/>
</route>
```