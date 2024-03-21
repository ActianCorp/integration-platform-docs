---
title: Using LOCAL_JOB_SPEC_DIR
---

# Using the LOCAL_JOB_SPEC_DIR Macro

The macro LOCAL_JOB_SPEC_DIR is automatically configured for your jobs running in Integration Manager. It will be automatically populated with the location to which additional files are downloaded when your job runs.

## Design Time

 To make use of the macro, you can reference the macro during DataConnect design time as shown below:
 
![](/img/LOCAL_JOB_SPEC_DIR-1.png)

## Integration Manager

You do not need to configure this macro. You just need to upload the file to Integration Manager. When you run the Job Config, the uploaded file will be used for your map. An example is shown below:

![](/img/LOCAL_JOB_SPEC_DIR-2.png)

You can also embed this macro within other macros within your Job Template or Job Config:

![](/img/LOCAL_JOB_SPEC_DIR-3.png)