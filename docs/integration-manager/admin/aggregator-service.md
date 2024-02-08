---
title: Aggregator Service
tags:
 - Content Issues
---

# Aggregator Service

<font color="red">Where in the TOC should this topic live?</font>
<font color="bue">GGH Feedback - By the File Folder Listener stuff</font>

## Overview

<font color="red">This section needs to start with more high-level introduction.</font>
<font color="blue">GGH Feedback - Haven't worked on this feature before, but it seems to be an extension/evolutoin of the file folder listener or job message listener.  It will collect messages and when the proper batch size has been reached, it will cull those together and send them as input to a job config and execute it.  That all make sense?</font>

Messages can be submitted to:

`POST: [server base url]/api/aggregators?type=jobconfigs&id=[entity id]`

These messages will be aggregated according to the corresponding entry in `aggregator-config.yml`. When the number of messages received equals completion-size, or the completion-timeout is reached after the last message is received, then the aggregated message will be submitted to `[server base url]/api/jobconfigs/[entity id]/listener`. The aggregated message can be accessed through djmessage 'msg1' within the dataconnect process.

## Aggregator Configuration

:::note
The File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: [Authorizing the File Folder Listener Service](./file-folder-listener/file-folder-listener-service#authorizing-the-file-folder-listener-service).
:::

**aggregator-config.yml**

`(ProgramDataDirectory)/Actian/IntegrationManager/conf/aggregator-config.yml`

:::info[IMPORTANT]
Indentation is critical for YAML syntax!
:::

Example:
```
aggregators:
  - name: Aggregator-Config-xml
    entity-id: 21
    entity-type: jobconfig
    account-id: 1
    active: true
    completion-size: 5
    completion-timeout: 5000
    data-type: xml
  - name: Aggregator-Config-json
    entity-id: 22
    entity-type: jobconfig
    account-id: 1
    active: true
    completion-size: 5
    completion-timeout: 5000
    data-type: json
  - name: Aggregator-Config-record
    entity-id: 23
    entity-type: jobconfig
    account-id: 1
    active: true
    completion-size: 5
    completion-timeout: 5000
    data-type: record
```

## Properties

| <div style={{width: 160}}>Property</div> | Description | Default |
| :--- | :--- | :--- |
| `name` |  A unique identifier for the aggregator |  |
| `entity-type` | The entity type for the aggregator. Valid types (case-sensitive): jobconfig |  |
| `entity-id` | The Job Configuration id to run in Integration Manager. |  |
| `active` | Whether or not this aggregator is active | `true` |
| `account-id` | Account ID that owns the entity |  |
| `completion-size` | The number of messages to aggregate before submitting the aggregated message to the listener API | `200` |
| `completion-timeout` | The amount of time (in millisenconds) to wait after receiving the last message before submitting the aggregated message to the listener API | `10000` |
| `data-type` | The data type for the submitted message to the aggregator API. This determines how the messages are aggregated. Valid types (case-sensitive): record, xml, json |  |

## Text Record Aggregation Example

Example JSON message/event:
```
POST /api/aggregators?type=jobconfig&id=22
Authorization: Bearer [bearer token value]
Content-Type: text/plain
 
"Tove","Jani","Reminder","Don't forget me this weekend!"
```

Example JSON aggregated batch message:
```
"Tove","Jani","Reminder","Don't forget me this weekend!"
"Tove","Jani","Reminder","Don't forget me this weekend!"
"Tove","Jani","Reminder","Don't forget me this weekend!"
"Tove","Jani","Reminder","Don't forget me this weekend!"
"Tove","Jani","Reminder","Don't forget me this weekend!"
```

## JSON Aggregation Example

Example JSON message/event:
```
POST /api/aggregators?type=jobconfig&id=22
Authorization: Bearer [bearer token value]
Content-Type: text/plain
 
{
   "to": "Tove",
   "from": "Jani",
   "heading": "Reminder",
   "body": "Don't forget me this weekend!"
}
```

Example JSON aggregated batch message:
```
[
   {
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Don't forget me this weekend!"
   },{
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Don't forget me this weekend!"
   },{
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Don't forget me this weekend!"
   },{
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Don't forget me this weekend!"
   },{
      "to": "Tove",
      "from": "Jani",
      "heading": "Reminder",
      "body": "Don't forget me this weekend!"
   }
]
```

## XML Aggregation Example

Example XML message/event:
```
POST /api/aggregators?type=jobconfig&id=22
Authorization: Bearer [bearer token value]
Content-Type: text/plain
 
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
```

Example XML aggregated batch message:
```
<items type="array">
    <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note><note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note><note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note><note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note><note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note>
</items>
```
