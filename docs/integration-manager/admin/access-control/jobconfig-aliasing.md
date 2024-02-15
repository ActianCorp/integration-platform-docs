---
title: JobConfig Listener Aliasing
---

# JobConfig Listener Aliasing

## Overview

For better integration with external apps, any JobConfig Listener can be aliased to create a custom URL for your clients to execute your integration.

An alias defines an alternative name for an existing Configuration to be executed from the HTTP Listener API service. An alias can only be mapped to one Configuration; however, a configuration can be mapped to multiple aliases.

Aliasing allows you to:

* Create custom/branded API endpoints for your internal and external integration consumers
* Make it easier for API consumers by providing a static endpoint name that does not change even when the configuration is changed on the back end
* Seamlessly upgrade/downgrade/exchange the backend integration without disruption to consumers
* Use various access control mechanisms for your custom API endpoint, including:
   * Basic User Authentication (username/password)
	* API Keys (defined separately for each Alias you create)
	* Public access (not recommended to service consumers outside of your internal network)

As an example, you can turn this:
```
POST /api/jobconfigs/79356/listener?messagename=msg1 HTTP/1.1 Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.
eyJzY29wZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwic Content-Type: application/json

{
    "name": "value",
    "metric": 124
}
```

into this:

```
POST /api/listener/my-custom-job-url HTTP/1.1
Authorization: Basic sIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwi
Content-Type: application/json

{
    "name": "value",
    "metric": 124
}
```

## API Details

<font color="red">The current docs include this content, but not in the "unoffical" docs on GH Pages. Is this appropriate here?</font>

* Maximum payload size is 750KB
* Maximum synchronous wait time is 30 seconds
* Content-Types allowed: application/json, application/xml, text/plain
  
### Synchronous
  * Text Message payload 200 OK response (response body is driven by your integration process using outmessagename)
  * Text Message payload 408 Timeout response:
    * Your integration process does not complete within 30 seconds
    * Result/output may be retrieved asynchronously after the job is complete

### Asynchronous
  * Text Message payload 202 Accepted response
  * Result/output may be retrieved asynchronously once the job is complete

## Step 1: Create an Alias

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![](/img/Administration.png)

2. Click **Listeners**:

   ![](/img/Create-Alias1.png)

3. Click **Add Listener**:

   ![](/img/Create-Alias2.png)

4. In the **Alias name** field, enter a globally-unique, URL-safe name for your Alias. This is the endpoint your consumers will use:

   ![](/img/Create-Alias3.png)

5. Select the backend configuration to run when your Alias is invoked. You can change it as needed:

   ![](/img/Create-Alias4.png)

6. Click **Continue**:

   ![](/img/Create-Alias5.png)

7. Either select an existing IP Address, or enter a new IP Address and Label, then click **Add**.

   ![](/img/Create-Alias6.png)

8. Click **Save**:

   ![](/img/Create-Alias7.png)

9. The Alias is displayed in **Integration Listeners** list:

   ![](/img/Create-Alias8.png)

## Step 2: Secure the Alias

The Access Key and Secret Key are used for programmatic (API) access to your listener. You can either fill in your own keys or generate them using the Generate button.

### To Generate a Key:

1. Select the listener from the  **Integration Listeners** list.
2. Click <img src="/img/icons/generate.png" className="icon" alt="the Generate icon"/> to create an API Key for your Alias, or enter your own<br/>

   ![](/img/Create-Alias9.png)

    <font color="red">If I generate a key, then delete it, I am unable to then enter my own. Is this intended, and if so, why?</font>

3. The following dialog is displayed. Click **Generate Keys**:

   ![](/img/Create-Alias10.png)

4. The listener is updated with the generated keys.

   ![](/img/Create-Alias11.png)

	:::note
	You can re-generate or delete this key at any time to revoke consumer access
	:::

### To Enter Your Own Key:

1. Select the listener from the  **Integration Listeners** list.
2. Enter an Access Key and Secret Key, then click **Continue**:

   ![](/img/Create-Alias12.png)

3. The listener is updated with the generated keys.

   ![](/img/Create-Alias11.png)

## Step 3: TestInvoke the Alias

<font color="blue">
JG Feedback - Looks like Step 3 title is either meant to be 'Test the Alias' or 'Invoke the Alias'. 
</font>

You can invoke an Alias, that is, run a JobConfig, through the Job Execution API in several ways with several options. Note that your Alias only exposes the ability to execute a JobConfig with parameters. No user or configuration data is accessible through the Listener API.

* If ONLY api key is set, then it must be supplied via the 'x-api-key' header
* If BOTH api key and api secret are set, then Authorization: Basic is required, in the format of Base64Encode(api-key:api-secret)
* (Discouraged) Aliases support User credential authentication, Authorization: Basic is required, in the format of Base64Encode(username:password)
* (Discouraged) Public Aliases do not require any authentication

See the Job Execution API for more details: [https://api.im.actiandatacloud.com/v2/apidocs/#/Job%20Execution/runAliasWithMessage](https://api.im.actiandatacloud.com/v2/apidocs/#/Job%20Execution/runAliasWithMessage).

<font color="red">The current docs have this content instead. Is this incorrect, or does the above need to be updated?</font>

:::danger[Warning]
Using HTTPS is always recommended. Otherwise, API tokens, credentials, and payloads are subject to hijack. HTTPS is always enabled and enforced for DataCloud and VPC deployments.
:::

You can invoke a JobConfig Alias these ways:

* Authorization: Bearer (access_token)
* Bearer tokens can be retrieved from /api/login. (You must set an API Password for your user to call /api/login).
* Bearer tokens can be retrieved using Actian ID or OAuth authorization_code flow.
* Authorization: Basic (encoded user credentials)
  * You must set an API Password for your user.
  * Credentials are constructed by first combining the Username and Password with a colon (aladdin:opensesame), and then by encoding the resulting string in base64 (YWxhZGRpbjpvcGVuc2VzYW1l).
  * Example: Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
* Authorization: Basic (encoded api keys)
  * You must create API keys for this Alias.
  * Credentials are constructed by first combining the Access Key and Secret Key with a colon (TESTACCESSKEY:TESTSECRETKEY), and then by encoding the resulting string in base64 (VEVTVEFDQ0VTU0tFWTpURVNUU0VDUkVUS0VZ).
  * Example: Authorization: Basic VEVTVEFDQ0VTU0tFWTpURVNUU0VDUkVUS0VZ

## Deleting a Listener

To delete a listener:

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![](/img/Administration.png)

2. Click **Listeners**:

   ![](/img/Create-Alias1.png)

3. Click the listener you want to delete:

   ![](/img/Select-Listener.png)

4. Click **Delete Listener**:

   ![](/img/Delete-Listener.png)

5. The **Delete Listener?** dialog appears, warning you that this action cannot be undone. To proceed with deleting the listener, click **Delete Listener**:

   ![](/img/Delete-Listener-Warning.png)
