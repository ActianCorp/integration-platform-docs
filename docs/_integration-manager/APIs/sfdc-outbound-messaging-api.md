---
title: Salesforce.com Outbound Messaging
---

# Salesforce.com Outbound Messaging API

## Overview

The Salesforce.com Outbound Messaging API securely and asynchronously processes outbound messages sent from your Salesforce.com organization.

These outbound messages will execute a desired configuration and can pass any of the data contained within the OBM to your integration. Any time your workflow rule is triggered, an outbound message will be sent to DataCloud and your job configuration will execute. (Of course, your integration needs to know what to do with the message.)

:::info[Note]
You must have setup/configuration privileges within the Salesforce.com org, typically a System Administrator profile.
:::

:::tip
You can monitor the messages in Salesforce by going to **Setup** → **Administration Setup** → **Monitoring** → **Outbound Messages**.
:::

To use the event driven Salesforce.com event notification service, log in to Salesforce.com as an administrator, then perform the following steps.

## Step 1: Create a new Custom Setting

1. Go to **Setup** → **Develop** → **Custom Settings**.
2. Click **New**, then enter:
    * **Label**: DataCloud User Credential
    * **Object Name**: DataCloud_User_Credential
    * **Setting Type**: Hierarchy
    * **Visibility**:  Public
3. Click **Save**.
4. Under **Custom Fields**, click **New** and enter:
    * **Data Type**: Text
5. Click  and enter:
    * **Field Label**: Username
    * **Length**: 120
    * **Field Name**: Username
6. Click **Next**.
7. Click **Save**.
8. Click **New**.
9. Under **Custom Fields**, click New and enter:
    * **Data Type**: Text
10. Click **Next** and enter:
    * **Field Label**: Password
    * **Length**: 120
    * **Field Name**: Password
11. Click **Next**.
12. Click **Save**.

## Step 2: Create a new DataCloud User Credential

1. Go to **Setup** → **Develop** → **Custom Settings**.
2. Click **Manage** next to the **DataCloud User Credential** setting
3. Click **New**.
4. Add the DataCloud username and password that the outbound message will use to authenticate.
5. Click **Save**.

## Step 3: Create a new Workflow Rule and Outbound Message

1. Go to **Setup** → **Create** → **Workflow & Approvals** → **Workflow Rules**.
2. Click **New Rule**.
3. Set up your Workflow Rule:
    * **Name**
    * **Evaluation Criteria**
    * **Rule Criteria**
4. Click **Save**.
5. Click **Next**.
6. Click **Add Workflow Action** → **New Outbound Message**.
7. Set up your Outbound Message:
    * **Name**
    * **Unique Name**
    * **Endpoint** (e.g., https<nolink>:</nolink>//api.im.actiandatacloud.com/v2/api/jobconfigs/*[jobconfig&nbsp;id]*/sfdc/obm)
    * [Salesforce.com] User to send as
    * **Send Session ID** = true
    * Object fields to send (these fields will be available as an XML DJMessage object within your integration:)
	![](/img/sfdc-outbound-messaging-api-1.png)
8. Click **Save (Outbound Message)**.
9. Click **Done (Outbound Message)**.
10. Click **Activate (Workflow Rule)**.
