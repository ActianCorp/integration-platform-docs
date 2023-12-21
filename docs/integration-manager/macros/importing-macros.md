---
title: Importing Macros
tags:
 - Content Issues
---

# Importing Macros

Importing macros by uploading a macro definition file (see [Macro File Examples](../macros/importing-macros#macro-file-examples)) allows you to upload multiple macros without having to manually define each macro.

You can import macros directly from a file to any object (Account, Template, User, Configuration). <font color="red">Need details about Account object.</font>

:::note[Notes]
* You can import macrodef files in XML (v9) or JSON (v9 and later) formats. For examples, see [Macro File Examples](./importing-macros#macro-file-examples).

* v9 macros cannot be encrypted. <font color="red">I read this at https://actian.atlassian.net/wiki/spaces/IM/pages/14188908/DataConnect+Macro+Management. Is this true?</font>

* Imported macrodef files with encrypted values will only import the macro name. The value will be empty.
:::

You can import macros in two ways:

* Method 1: Using the **Add Macros** dialog, which allows you to both upload a macro file and manually enter name/value pairs
* Method 2: Using the **Upload Macro File** dialog, which only allows you to upload a file.

## Method 1: Add Macros Dialog

import PartialContent1 from '../../reuse/_import_via_add_macros_dialog.mdx';

<PartialContent1 name="import_via_add_macros_dialog" />

7. You are returned to the Macros list:

    ![Macros Imported List](/img/Macros-Imported-List.png)

8. For each macro, click the empty space in the **Description** column, enter a descriptive name, and press Enter.

    ![Macros Imported List](/img/Macros-Imported-List-Description.png)

## Method 2: Upload Macro File Dialog

1. Click the dropdown arrow next to the **Add Macro** button and select **Import Macros**:
   
    ![Import Macros Dropdown](/img/Import-Macros-Dropdown1.png)

import PartialContent2 from '../../reuse/_import_via_upload_macro_file_dialog.mdx';

<PartialContent2 name="import_via_upload_macro_file_dialog" />

## Macro File Examples

<font color="red">I added this section. Is this helpful, or do we presume that all readers already know the details about macrodef file formats?</font>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JSON" label="JSON" default>

```
{
  "macroSet" : [ {
    "id" : 1,
    "name" : "T_AZURE",
    "macros" : {
      "macro" : [ {
        "id" : 1,
        "name" : "AZURE_CLIENT_ID",
        "value" : "",
        "encryptValue" : false,
        "description" : "Required. Credentials used to access azure services."
      }, {
        "id" : 2,
        "name" : "AZURE_CLIENT_SECRET",
        "value" : "",
        "encryptValue" : false,
        "description" : "Required. Credentials used to access azure services."
      }, {
        "id" : 3,
        "name" : "AZURE_TENANT_ID",
        "value" : "",
        "encryptValue" : false,
        "description" : "Required. Tenant ID (Directory ID) assigned by Azure Active Directory service."
      }, {
        "id" : 4,
        "name" : "AZURE_CONTAINER_NAME",
        "value" : "",
        "encryptValue" : false,
        "description" : "Required. Name of the container in azure storage account which contains data files"
      }, {
        "id" : 5,
        "name" : "AZURE_STORAGE_ACCOUNT",
        "value" : "",
        "encryptValue" : false,
        "description" : "Required. Name of the azure storage account."
      } ]
    }
  } ]
}
```

</TabItem>
<TabItem value="XML" label="XML" default>

<font color="red">Need review of XML and more relevant example.</font>

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<djmacros>
    <macro name="DATABASE_ENV" type="0" value="BMIPROD1">
        <description> </description>
    </macro>
    <macro name="DJWORKSPACE" type="0" value="C:\Users\jdoe\">
        <description> </description>
    </macro>
    <macro name="Database" type="0" value="SQLServer14">
        <description> </description>
    </macro>
    <macro name="LocalMacro1" type="0" value="LocalMacroValue">
        <description> </description>
    </macro>
    <macro name="macro_example" type="0" value="myExample">
        <description> </description>
    </macro>
    <macro name="v9Macro1" type="0" value="value1">
        <description> </description>
    </macro>
    <macro name="v9Macro2" type="0" value="value2">
        <description> </description>
    </macro>
</djmacros>
```

</TabItem>
</Tabs>
