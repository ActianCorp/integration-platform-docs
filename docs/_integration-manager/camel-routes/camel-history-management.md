---
layout: default
title: Camel File Processing History Management
nav_order: 5
parent: File Folder Listener
---
# Camel File Processing History Management
All processed & unprocessed file history can be magnaged here.


## Manage Processed File History
All unprocessed files will be moved to this specified configured location.

Example:
```
<route id="manage-processed-file-history" autoStartup="false">
        <from uri="file://{{sharedDataPath}}/listener/processed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
        <to uri="log:trash?level=OFF"/>
</route>
```


## Manage Unprocessed File History

All unprocessed files will be moved to this specified configured location.

Example:
```
<route id="manage-unprocessed-file-history" autoStartup="false">
        <from uri="file://{{sharedDataPath}}/listener/unprocessed?recursive=true&amp;filterFile=${file:modified} &lt; ${date:now-14d}"/>
        <to uri="log:trash?level=OFF"/>
    </route>
```