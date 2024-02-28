---
title: Creating a Configuration From a Template
tags:
 - Content Issues
---

# Creating a Configuration From a Template

To create a configuration from a template:

1. Select the **Templates** tab. The **Templates** page displays the available integration templates.
2. Click the desired template name:

   ![Template Select](/img/Template-Select.png) 
3. On the **Template Details** page, click **Create Configuration**: 

   ![Template Select](/img/ConfigFromTemplate1.png) 
4. Enter a unique name for your configuration:

   ![Template Select](/img/ConfigFromTemplate2.png) 
5. The **Template** dropdown is preselected to the template selected in Step 2. You can select a different template, if desired. Keep in mind that each template uses its own package and entry point, so make sure the selected template uses the desired package and entry point.
6. Click **Create**. The **Configuration Details** page is displayed for the new configuration:
 
   ![Template Select](/img/ConfigFromTemplate3.png) 

    Note that the new configuration inherits properties from the selected template. You can edit the configuration to override specific properties set in the template, if desired. See [Editing Configuration Details](../configurations/editing-configuration-details).

<font color="blue">
JG Feedback - This also confused me. The only way I could link a configuration to template was by editing the template after a configuration was created. When creating a configuration from a template, there was no option to use the current template package. Not sure if this is a bug or desired functionality. Need Garrett or Jason to confirm. 
</font>

<font color="green">
GGH Feedback - I mean... I don't know of a lot of care required when switching a parent template from a config.  It doesn't change anything on the actual Config except for the jobTemplateId.  And the relationship between a config and a template is that a config will have access to all of the templates fies and macros and such.  If a config doesn't have a package or entry point selected, it will inherit tht from the template.  So, I guess if a Config was set up to rely on the package and entry point from a Template, know that changing that will change what happens opn the config.  Does that make sense?  So, long story short.  Or maybe short story long, they basically just need to know that anything that isn't explicitly configured in the config will be pulled in from the template so it could change it's behavior.  Now, take that... work doc magic on it to make it not sound crazy.   
</font>

<font color="red">
DL reply: Changed the wording above. As I revisit this topic, I'm seeing a difference between on-prem and cloud that makes this topic incorrect for cloud.

For **On-Prem**, when you select a template and click Create Configuration, the Data Integration Setup page provides a Template dropdown (preselelected to the template from which you clicked Create Configuration):

   ![](/img/Temp1.png)

Once created, the Config shows the selected template as the base template:

   ![](/img/Temp2.png)

For **Cloud**, the Template dropdown does not exist, and there is no Source Template shown on the right as with on-prem:

   ![](/img/Temp3.png)

Once you create the Config, the Base Template field is **Not Set** and you must select the template again:

   ![](/img/Temp4.png)

Is this an intentional difference? The concept of creating a Configuration from a Template doesn't seem to apply to the cloud version as is.
</font>

