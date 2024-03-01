---
title: Running Configurations
tags:
 - Content Issues
---
# Running Configurations

Configurations can be run manually or on a schedule. An integration is executed when you run an associated configuration. When completed, runtime metrics will be available for review. 

:::note
To run a configuration, it must be in the Active state. See [Activating or Inactivating Configurations](./activating-or-inactivating-configurations).
:::

## Running a Configuration Manually

1. Select the **Configurations** tab.
2. Do one of the following:
   * To run a single configuration, click the ellipsis button next to the desired configuration and select **Run**:

       ![Configuration Run 1](/img/Configuration-Run1.png)

   - To run multiple configurations, select the checkbox next to the desired configurations and click <img src="/img/icons/run.png" className="icon" alt="the Run icon"/>:

       ![Configuration Run 2](/img/Configuration-Run2.png)

3. The associated integration is executed and you are navigated to the **Jobs** page, where you can track the execution status of your Configuration Job. See [Viewing Job Run History](../jobs/viewing-job-run-history).


## Running a Configuration on a Schedule

Schedules can be set to automatically run a configuration on a defined schedule. Refer to [Editing Configuration Schedules](./editing-configuration-schedules).


## Run with Message

Running a configuration with a message allows you to pass a message object/body into a DataConnect job at runtime. The message object has a default name of “msg1” and the body (msg1.body) contents are specified within the **Run with Message** dialog. There must be a reference to “msg1” within your DataConnect djar to run a configuration with a message.

1. Do one of the following:
   * From the **Configurations** page, click the ellipsis button next to the desired configuration and select **Run with Message**:

       ![](/img/Run-With-Message1.png)

   * From the **Configuration Details** page, click the dropdown arrow next to the **Run Configuration** button and select **Run Configuration with Message**:

       ![](/img/Run-With-Message2.png)

2. In the **Run with Message** dialog, enter a message and (optionally) a message name:

   ![](/img/Run-With-Message-Dialog.png)


## Run with File

<font color="red">
This section could use an intro similar to the Run with Message section above.

Running a job with an input file allows you to...
</font>

1. Do one of the following:
   * From the **Configurations** page, click the ellipsis button next to the desired configuration and select **Run with File**:

       ![](/img/Run-With-File1.png)

   * From the **Configuration Details** page, click the dropdown arrow next to the **Run Configuration** button and select **Run Configuration with File**:

       ![](/img/Run-With-File2.png)

2. In the **Run with File** dialog, drag and drop a file, or click **BROWSE FILES** to select a file:

   ![](/img/Run-With-File-Dialog.png)
3. The file is added to the **Run with File** dialog. Optionally, enter a message name, then click **Run**:

   ![](/img/Run-With-File-Dialog2.png)

    <font color="red">Not sure what type of file would typically be used here. Is there a better file type for a real-world use case?</font>
