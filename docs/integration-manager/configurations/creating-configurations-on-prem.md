---
title: Creating Configurations (On-Prem)
tags:
 - Content Issues
 - Bugs
---

# Creating Configurations (On-Prem)

<font color="red">

1. What is the purpose of the Data Integration Setup page, which allows you to create a config without uploading a file? (I assume you have to do that to run the config, but are there cases where you need to define other details before uploading a package?)

2. I'm having a hard time figuring out a behavior:

   * For both Cloud and On-Prem, you can create your first configuration using either the Data Integration Setup page or the Import Configuration page.
   * For Cloud, once you've created your first configuration, I cannot find a way to get the Import Configuration page again.
   * For On-Prem, once you've created your first configuration, I cannot find a way to get the Data Integration Setup page again.

   Is this intentional (and if so, why?), am I missing how to get these pages again, or is this a bug?
</font>

Configurations can be created in several ways:

1. Importing a configuration <font color="red">file [package? Is there a difference (.djar, .process, etc.)?]</font> on the **Import Configuration** page.
2. Creating a <font color="red">blank?</font> configuration on the **Data Integration Setup** page, then uploading a package on the **Configuration Details** page.
3. Automatically creating a configuration when creating a template.
4. Duplicating an existing configuration. If you need a new configuration that is very similar to an existing configuration, consider duplicating a configuration and revising it rather than creating one from scratch. See [Duplicating Configurations](./duplicating-configurations).

## Creating Your First Configuration

<font color="red">
Why does the Dashboard page still say "Create your first Configuration" even after you've already created one (until you run your first job)? Intentional or bug?
</font>

1. On the **Configurations** page, click **Create Configuration**:

   ![Create Configuration](/img/Configuration-Create-First-Dashboard-On-Prem.png)

2. On the **Data Integration Setup** page, enter a unique name and click **Create**:
   
   ![Data Integration Setup](/img/Data-Integration-Setup-On-Prem.png)
   
3.  On the **Configuration Details** page, ... **<font color="red">What is the typical process here? Is the minimum to upload a package and set an entry point?</font>**.
   
    ![Configuration Details](/img/Configuration-Details-Page-On-Prem-Manual.png)

## Importing a Configuration

1. Do one of the following:
   
   * If this is your first configuration, click **Create Configuration** on the **Dashboard** page:

      ![Create Configuration](/img/Configuration-Create-First-On-Prem.png)

   * If this is not your first configuration, click **Import Integration** on the **Configurations** page:

     <font color="red">Why does the button say "Import Integration" but the page is "Import Configuration"?</font>

     ![Import Configuration](/img/Import-Configuration-Next-On-Prem.png)

2. The **Import Configuration** page is displayed:
   
   ![Import Configuration](/img/Import-Configuration-On-Prem.png)

3. Enter a unique **Name**, then do one of the following:
   * Click **Local&nbsp;System**, select a configuration file (.djar,.rtc,.process,.ip.xml,.tf.xml,.sqlite), then click **Import**.
   * Click **Integration&nbsp;Files**. In the **File&nbsp;Manager**, select a package, then click **Select&nbsp;Package**. <font color="red">Should we describe the File Manager more fully?</font>
4. The configuration file is listed. Click **Import**.

   ![Import Configuration](/img/Import-Configuration2-On-Prem.png)

   <font color="red">If you import a .process file, the icon is different. Should we discuss the difference?</font>
5.  On the **Configuration Details** page, edit configuration details as desired. See [Editing Configuration Details](./editing-configuration-details).
   
    ![Configuration Details](/img/Configuration-Details-Page-On-Prem-Import.png)

## Creating a Configuration from a Template

Using templates makes it easier to manage multiple configurations. You can create a configuration from the **Template Details** page. Refer to [Creating a Configuration from a Template](../templates/creating-a-configuration-from-a-template).
