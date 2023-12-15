---
title: Run Your First Remote Job
tags:
 - Content Issues
---
# Run Your First Remote Job

**<font color="red">Can this be reused from IM docs (or linked there)?</font>**

1. Navigate and login to Integration Manager Cloud or Avalanche Connect in your web browser.
2. Navigate to the Configurations tab.
3. Click +Add.
4. Setup a new Configuration:
   * Give it a unique Name.
   * <b>Set Run Location to "User Agent".</b>
   * Click **Add Package**.
   * Upload a DataConnect djar file.
   * Select an Entry Point within the djar.
   * Click on the Macros sub-tab.
   * Add and/or import any macros your djar requires.
5. Click Run Configuration.
6. Navigate to the Jobs sub-tab to view job progress and log file.
7. You can monitor Job progress in real-time even though it is executing on the Agent machine.



:::note
This topic is intended to provide an overview of running jobs in the Integration Manager. If you haven't yet run a job, some of the steps in this process might require further explanation. Refer to the links provided.
:::

## Step 1: Create a Configuration

1. Select the **Configurations** tab:

   ![Configurations Tab](/img/Configurations-Tab.png)

2. Click ![Create Configuration Button](/img/icons/Create-Configuration-Button.png).
3. Import a configuration. See [Creating Configurations (On-Prem)](../configurations/creating-configurations-on-prem) or [Creating Configurations (Cloud)](../configurations/creating-configurations-cloud).

## Step 2: Select an Entry Point

1. Click ![the edit icon](/img/icons/edit-icon.png) next to **Entry Point** and select an Entry Point within the djar:
   
   ![Entry Point](/img/Entry-Point.png)

2. Edit other configuration details as desired. See [Editing Configuration Details](../configurations/editing-configuration-details).
    
## Step 3: Add Macros

1. Select the **Macros** tab.
2. Add and/or import any macros your djar requires. See [Macros Overview](../macros/macros-overview).

## Step 4: Run the Job

1. Click **Run&nbsp;Configuration**.

   ![Run Configuration](/img/Configuration-Run2.png)

2. Navigate to the **Jobs** tab to view job progress and log file.

:::note
   You can create schedules on which to run configurations. See [Editing Configuration Schedules](../configurations/editing-configuration-schedules).
:::