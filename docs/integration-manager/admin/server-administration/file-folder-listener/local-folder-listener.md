---
title: Local Folder Listener
---
# Local Folder Listener

The Local Folder Listener monitors file folders for files and will execute a pre-defined Job Configuration (config-id) when triggered.

:::note[Notes]

* The File Folder Listener Service must be restarted for any configuration changes to take effect.
* Make sure you have already completed [Authorizing the File Folder Listener Service](./file-folder-listener-service#authorizing-the-file-folder-listener-service).

:::

## Listener Configuration

**listeners.yml**

`<ProgramDataDirectory>/Actian/FileFolderListener/conf/listeners.yml`

### Example

:::info[IMPORTANT]
Indentation is critical for YAML syntax!
:::

```
listeners:
  - id: local-listener-folder-accounts
    config-id: 90378
    listener-type: local
    active: true
    source-directory: C:/DataSources/accounts
    include-pattern: ^Accounts.
    exclude-pattern: ^skipme.txt
    filename-override: Accounts.txt
  - id: local-listener-folder-contacts
    config-id: 90379
    listener-type: local
    active: true
    source-directory: C:/DataSources/contacts
    include-pattern: ^Contacts.*
    exclude-pattern: ^skipme.txt
    filename-override: Contacts.txt
```

## Properties

| <div style={{width: 175}}>Property</div> | Description | Default |
| :--- | :--- | :--- |
| `id` | A unique identifier for the listener. |  |
| `listener-type` | Available listener types: `local`, `aws`, `gcp`, `azure`. |  |
| `config-id` | The Job Configuration id to run in Integration Manager. |  |
| `active` | Whether or not this listener is active. | `true` |
| `source-directory` | The source directory to monitor for new files. |  |
| `include-pattern` | Includes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)  and [RegexPal](https://www.regexpal.com/). |   |
| `exclude-pattern` | Excludes files if the file name matches the regular expression pattern you specify. See [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)  and [RegexPal](https://www.regexpal.com/). |   |
| `filename-override` | This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files. |  |
| `auto-create-directories` | Automatically create missing directories in the source-directory path. | `true` |
| `recursive` | Look for files in all the sub-directories of the source-directory as well. | `false` |
| `flatten-directories` | Flatten the file name path to strip any leading paths, so it’s just the file name. This allows you to consume recursively into sub-directories, but only track the filename for backup and error purposes. | `false` |


