---
title: Agent File Folder Listener
---

# File Folder Listener

## Overview
This mimics the File Folder Listener from Integration Manager.
The File Folder Listener Service is used to monitor file directories and/or cloud storage buckets/containers for new files. When a new file appears (matching your include/exclude criteria), the associated listener will submit the file to a Job Configuration.

## Basic Configuration

These properties are located in:
* Windows: `(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties`
* Linux: `/etc/opt/actian/integration-agent/conf/listeners.yml`

:::note[important]
These directories have automatic clean-out functionality and can flush out the system boot files, so make sure they are isolated from your system folders/files.
:::

```
#The folder where backups of successfully submitted files will be stored.
listener.backup-directory= /etc/opt/actian/integration-agent/listener/backup/

#The folder where failed files will be stored, e.g. Exceeded max size, service not running, etc...
listener.error-directory= /etc/opt/actian/integration-agent/listener/error/
```

## Listener Folder Advanced Configuration

```
listener.retain-backup-files=true &nbsp;#Set this to false to not retain backup files. Error files will still be saved.
listener.backup-directory-max-file-age=7 &nbsp;#How long backup files are retained in day(s).
listener.error-directory-max-file-age=14 &nbsp;#How long error files are retained in day(s).
```

