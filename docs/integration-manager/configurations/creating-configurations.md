---
title: Creating Configurations
tags:
 - Content Issues
 - Bugs
---

# Creating Configurations

## Creating Configurations Manually

<font color="red">
It would be helpful here to describe why you would create a config manually rather than using the Import Configuration page. Are there cases where you need to define other details before uploading a package?
</font>

To create a configuration manually:

1. On the **Configurations** page, click **Create Configuration**:

   ![](/img/Create-Configuration.png)
2. On the **Data Integration Setup** page, enter a unique name and click **Create**:
   
   ![](/img/Create-Configuration2.png)
3.  On the **Configuration Details** page, click <img src="/img/icons/edit-icon.png" className="icon" alt="the Edit icon"/> to the right of **Package Uploaded**: <font color="red">If the first step is to upload a package, I'm not sure why you wouldn't just use the Import Configuration page right from the start. It would help to understand the use case for this method.</font>.
   
    ![](/img/Create-Configuration3.png)
4. In the **Upload Packages & Files** dialog, do one of the following:
    
    * Drag and drop a file, or click **BROWSE FILES** to select a file.
    * Select a package and click **DONE**. **Note:** Any configuration files uploaded to the configuration will be listed in the **Select an existing package** dropdown. See [Managing Configuration Files](./managing-configuration-files).

       ![](/img/Selected-Package-Change.png)
8. The **Package Uploaded** field now shows the uploaded package:

   ![](/img/Create-Configuration4.png)

9. <font color="red">What comes next?</font>

## Creating a Configuration from a Template

Using templates makes it easier to manage multiple configurations. You can create a configuration from the **Template Details** page. Refer to [Creating a Configuration from a Template](../templates/creating-a-configuration-from-a-template).

## Duplicating Configurations

If you need a new configuration that is very similar to an existing configuration, consider duplicating a configuration and revising it rather than creating one from scratch. See [Duplicating Configurations](./duplicating-configurations).