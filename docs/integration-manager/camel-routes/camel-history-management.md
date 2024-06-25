---
title: Listener File History & Backup Configuration
---

# Listener File History & Backup Configuration

All processed and unprocessed file history can be managed with camel routes.

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