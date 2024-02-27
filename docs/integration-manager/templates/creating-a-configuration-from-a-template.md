---
title: Creating a Configuration From a Template
tags:
 - Content Issues
---

# Creating a Configuration From a Template

To create a configuration from a template:

1. Select the **Templates** tab.
   
   The **Templates** page displays the available integration templates.
   
2. Click the desired template name.
   
   The **Template Details** page is displayed.
3. On the **Template Details** page, click **Create Configuration**.

   The **Data Integration Setup** page is displayed.
   
4. Enter a unique name for your configuration.
5. (Optional) Select a different template.

    :::caution[IMPORTANT]
    Care is required if you are changing the source and template. <font color="red">This needs further explanation. What does the user need to do or avoid?</font>
    :::

<font color="blue">
JG Feedback - This also confused me. The only way I could link a configuration to template was by editing the template after a configuration was created. When creating a configuration from a template, there was no option to use the current template package. Not sure if this is a bug or desired functionality. Need Garrett or Jason to confirm. 
</font>

<font color="green">
GGH Feedback - I mean... I don't know of a lot of care required when switching a parent template from a config.  It doesn't change anything on the actual Config except for the jobTemplateId.  And the relationship between a config and a template is that a config will have access to all of the templates fies and macros and such.  If a config doesn't have a package or entry point selected, it will inherit tht from the template.  So, I guess if a Config was set up to rely on the package and entry point from a Template, know that changing that will change what happens opn the config.  Does that make sense?  So, long story short.  Or maybe short story long, they basically just need to know that anything that isn't explicitly configured in the config will be pulled in from the template so it could change it's behavior.  Now, take that... work doc magic on it to make it not sound crazy.   
</font>

6. Click **Create**. 
   
   A configuration is created based on the specified information. The **Configuration Details** page is displayed for the new configuration. See [Editing Configuration Details](../configurations/editing-configuration-details).

