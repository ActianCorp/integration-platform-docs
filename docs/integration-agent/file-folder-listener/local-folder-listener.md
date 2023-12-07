---
title: Local Folder Listener
---

# Local Folder Listener

## Overview

The Local Folder Listener monitors file folders for files and will execute a pre-defined Job Configuration (config-id) when triggered.

## Listener Configuration

### listeners.yml

* Windows: `(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml`
* Linux: `/etc/opt/actian/integration-agent/conf/listeners.yml`

:::caution[Important]
   Indentation is critical for YAML syntax!
:::

Example:
```
listeners:
  - id: local-listener-folder-accounts
    config-id: 90378
    listener-type: agent
    active: true
    source-directory: C:/DataSources/accounts
    include-pattern: ^Accounts.*
    exclude-pattern: ^skipme.txt
    filename-override: Accounts.txt
  - id: local-listener-folder-contacts
    config-id: 90379
    listener-type: agent
    active: true
    source-directory: C:/DataSources/contacts
    include-pattern: ^Contacts.*
    exclude-pattern: ^skipme.txt
    filename-override: Contacts.txt
```

> **Note:**
> Agent Service must be restarted for any configuration changes to take effect.


## Properties

| Property                | Default | Description                                                                                                                                                                                                                               |
| :---------------------- | :------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                      |         | A unique identifier for the listener.                                                                                                                                                                                                     |
| listener-type           |         | Available listener types: agent.                                                                                                                                                                                                          |
| config-id               |         | The Job Configuration id to run in Integration Manager.                                                                                                                                                                                   |
| active                  | true    | Whether or not this listener is active.                                                                                                                                                                                                   |
| source-directory        |         | The source directory to monitor for new files.                                                                                                                                                                                            |
| include-pattern         |         | Includes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet), [RegexPal](https://www.regexpal.com/) |
| exclude-pattern         |         | Excludes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet), [RegexPal](https://www.regexpal.com/) |
| filename-override       |         | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files.                                           |
| auto-create-directories | true    | Automatically create missing directories in the source-directory path.                                                                                                                                                                    |
| recursive               | false   | Look for files in all the sub-directories of the source-directory as well.                                                                                                                                                                |
| flatten-directories     | false   | Flatten the file name path to strip any leading paths, so it’s just the file name. This allows you to consume recursively into sub-directories, but only track the filename for backup and error purposes.                                |