---
title: Viewing Job Run History
---

# Viewing Job Run History

You can view job run history for recent jobs, all jobs, or a specific job.

## Viewing the Run History for Recent Jobs

1. Select the **Dashboard** tab. The Dashboard displays a list of recent jobs, as well as additional details that you can customize. See [Customizing the Dashboard](../dashboard#customizing-the-dashboard).

   ![](/img/Recent-Jobs-Widget.png)

## Viewing the Run History for All Jobs

1. Select the **Jobs** tab. 
   
   The **Run History** page is displayed with a list of execution history:

   ![](/img/Configuration-Run-History.png)

The default page size is set to 25. Page size and navigation controls are located at the bottom of the page. If your configuration is not listed on the first page, use the search box to locate it.

The following details are displayed:

| Column Name| Description
| --- | ---
| Start | The date and time the job was started. The time displayed here is specific to your time zone.
| Name | The integration or configuration name. Clicking on the name displays the **Configuration Details** page.
| Type | The type of Job that was run (Configuration or Integration). 
| Owner | Displays the first two characters of the Job owner (creator) name. Clicking on the initials displays the username of the owner.
| Status | Status of the job. See [Job Status Codes](./job-status-codes).
| Duration | Execution time.
| Server | Where the job was executed.
| Log | Click <img src="/img/icons/log-file.png" className="icon" alt="the magnifying glass icon"/> for a specific record in the Run History table. The **Run History** page is displayed for the selected job, where you can view and download the log file. See [Downloading the Log File](./downloading-the-log-file).

## Viewing Run Details for a Specific Job

1. Select the **Jobs** tab.
   
   The **Run History** page is displayed with a list of execution history:

   ![](/img/Configuration-Run-History.png)

2. Click <img src="/img/icons/log-file.png" className="icon" alt="the magnifying glass icon"/> next to the desired job.
3. The detailed **Run History** is displayed for the specific job:

   ![](/img/Job-Run-History-Detailed.png)

:::note
You can also view the run details for a specific job from the **Dashboard** page by clicking <img src="/img/icons/log-file.png" className="icon" alt="the magnifying glass icon"/> in the **Recent Jobs** list.
:::
