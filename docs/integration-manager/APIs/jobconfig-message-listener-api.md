---
title: JobConfig Message Listener API
---

# JobConfig Message Listener API

## Overview

This service allows an API consumer to run an existing JobConfig with a text, json, or xml input message.

* Maximum payload size is 750KB
* Maximum synchronous wait time is 30 seconds
* Content-Types allowed: application/json, application/xml, text/plain

### Synchronous

* Text Message payload 200 OK response (response body is driven by your integration process through outmessagename)
* Text Message payload 408 Timeout response:
  * Your integration process does not complete within 30 secs
  * Result/output may be retrieved asynchronously after the job is complete

### Asynchronous

* Text Message payload 202 Accepted response
* Result/output may be retrieved asynchronously after the job is complete

Refer to [Open API Spec: Run Job with Input Message](https://console.im.actiandatacloud.com/apidocs/#/Job%20Execution/runJobConfigWithMessage).

## Step 1: Retrieve an Access Token

import PartialContent1 from '../../reuse/_retrieve_access_token.mdx';

<PartialContent1 name="retrieve_access_token" />

## Step 2: Run Job with Message

REQUEST:

```
POST https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]/listener?messagename=[input message name]&outmessagename=[output message name]
Authorization: Bearer [access token value]
Content-Type: [text/plain | application/json | text/xml | application/xml]

[message body]
```
RESPONSE:

```
202 Accepted
Content-Type: application/json

{
    "id": "[job id]",
    "status": "QUEUED",
    "scheduled": "[job submitted timestamp]",
    "jobConfig": {
        "id": "[jobconfig id]"
    }
    "submittedByUser": {
        "id": "[user id]"
    }
}
```

## Step 3: Retrieve Job Output Message Body (if applicable)

REQUEST:

```
POST https://api.im.actiandatacloud.com/v2/api/jobs/[job id]/out/[output message name]/text
Authorization: Bearer [access token value]
```
RESPONSE:

```
200 OK
Content-Type: [text/plain | application/json | text/xml | application/xml]

[message body]
```

**<font color="red">Content below this line is from existing docs on docs.actian.com and is not in this topic in the "unofficial" docs on GH Pages. Copying here to determine whether this content is current and if it belongs here.</font>**

 ## Example requests with allowed Content-Types:
 ```
POST /api/jobconfigs/1/listener?messagename=inputData&outmessagename=output HTTP/1.1 Authorization: Bearer eyJhbGciOiJIUzUxMiJ9. eyJzY29wZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwic Content-Type: application/json

{
"name": "value", "metric": 124
}

POST /api/jobconfigs/1/listener?messagename=inputData HTTP/1.1 Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.
eyJzY29wZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwic Content-Type: application/xml

<document>
    <name>value</name>
    <metric>124</metric>
</document>

POST /api/jobconfigs/1/listener?messagename=inputData HTTP/1.1 Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.
eyJzY29wZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwic Content-Type: text/plain

"Name","Metric"
"Value","124"
```

## How to Consume the Input Message

The input message is exposed as a DJMessage data type within DataConnect.

You must initialize the DJMessage to be able to run a transformation or process within another process (that is, as a transformation step or subprocess).

```
Dim inputMsg as DJMessage
Set inputMsg = FindMessage("inputData") //This needs to match the "messagename" query parameter
If inputMsg is Nothing then
    Set inputMsg = new DJMessage "inputData"
End If
LogMessage("INFO", inputMsg.body)
Once initialized, the message can be consumed as a Map source file or Component input message through the djmessage:///{messagename} protocol.
djmessage:///inputData
```
