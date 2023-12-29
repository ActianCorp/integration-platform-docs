---
title: Using LOCAL_JOB_SPEC_DIR
tags:
 - Image Issues
---

# Using the LOCAL_JOB_SPEC_DIR Macro

The macro LOCAL_JOB_SPEC_DIR is automatically configured for your jobs running on Integration Manager. It will be automatically populated with the location of where additional files are downloaded to when your job runs.

## Design Time

 To make use of the macro, during DataConnect design time you can reference the macro as shown below:
 
![](/img/Integration-Manager-LOCAL_JOB_SPEC_DIR_1.png)

## Integration Manager

You do not need to configure this macro. You just need to upload the file to Integration Manger. When you run the Job Config, the uploaded file will be used for your map. An example is shown below:<font color="red">Image needs to be updated for new UI.</font>


![](/img/Integration-Manager-LOCAL_JOB_SPEC_DIR_2.png)

You can also embed this macro within other macros within your Job Template or Job Config:<font color="red">Image needs to be updated for new UI.</font>

![](/img/Integration-Manager-LOCAL_JOB_SPEC_DIR_3.png)