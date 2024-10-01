---
title: Dashboard
---

The Dashboard provides data visualization charts that you can use to monitor the overall status of your integrations, configurations, and agents. 

![Dashboard](/img/Dashboard.png)

## Widgets

The following widgets are available on the Dashboard.

For any widget that shows the download icon, click <img src="/img/icons/download-button.png" className="icon" alt="the Download icon"/> to download the chart in SVG, PNG, or CSV format.

### Recent Jobs

Recent Jobs provides a table of recently-run jobs, and displays details and status for each job. Click the Start, Name, Type, Status, or Duration column headings to toggle between ascending and descending sort order.

   ![Recent Jobs Widget](/img/Recent-Jobs-Widget.png)

Click <img src="/img/icons/log-file.png" className="icon" alt="the magnifying glass icon"/> to download the log file for that job. See [Downloading the Log File](./integration-manager/jobs/downloading-the-log-file).

### ALL JOBS

The ALL JOBS chart displays the number of integrations executed for the selected time period (30, 60 or 90 days). Hover over the chart to see the value per day.

   ![All Jobs Widget](/img/All-Jobs-Widget.png)

### FAILED JOBS

The FAILED JOBS chart represents the number of failed integrations executed for the selected time period (30, 60 or 90 days). Hover over the chart to see the value per day.

   ![Failed Jobs Widget](/img/Failed-Jobs-Widget.png)

### JOB STATUS

The JOB STATUS chart represents run results status for configuration jobs executed during the selected time period (30, 60 or 90 days).

   ![Job Status Widget](/img/Job-Status-Widget.png)

Sync result status can be:

* **Finished**: Job has successfully completed. A log file is available (or soon will be).
* **Running**: Job is currently executing on a worker.
* **Cancelled**: Job was canceled prior to being acquired by a worker (during the Waiting or Queued state). No log file will be produced.
* **Error**: Job encountered an exception during execution. Depending on configuration and artifact design, the job may or may not have completed. A log file is available (or soon will be).
* **Queued**: Job has been queued for execution by the next available worker.
* **Failed**: Job failed or was manually stopped by user command or exception at some point during initialization or execution. A log file may or may not be available.

### AGENT HEALTH

The AGENT HEALTH chart represents the health status of agents a user has installed. In the following figure, the user has one agent installed and its status is Finished. Hover over the chart to see the value per day. 

   ![Agent Health Widget](/img/Agent-Health-Widget.png)

Agent status can be:

* **Healthy**: The agent is connected and ready to receive jobs.
* **Warning**: The Agent has not reported its status in over 3 hours and may require attention.
* **Error**: The Agent has not reported its status in over 6 hours.
* **Updating**: The Agent is currently processing an Update Command, such as Update Worker or Update Engine.
* **Offline**: The Agent is offline or the local service is stopped. This status is typically reported just prior to a shutdown.

You can verify whether the agent is running, and also start the agent service, by opening Windows Services.

## Customizing the Dashboard

### Adding and Removing Widgets

To add or remove a widget, do the following:

1. Click <img src="/img/icons/ellipsis.png" className="icon" alt="the ellipsis icon"/> in the upper right corner of any dashboard widget and select **Settings**:

     ![](/img/Settings-Ellipsis.png)

2. The **Dashboard Settings** panel is opened:
   
   ![](/img/Dashboard-Settings-Panel.png)

3. To remove a widget, click <img src="/img/icons/remove.png" className="icon" alt="the Remove icon"/> in the **Current** section. It will move to the **Available** section.
4. To add a widget, click <img src="/img/icons/add-plus.png" className="icon" alt="the Add icon"/> on a widget in the **Available** section. It will move to the **Current** section.

You can also remove a single widget by clicking <img src="/img/icons/ellipsis.png" className="icon" alt="the ellipsis icon"/> on the widget and selecting **Remove**:

   ![](/img/Remove-Widget.png)

### Rearranging Widgets

To change the position of the widgets on your Dashboard, drag and drop the desired position. Settings are persisted the next time you log in.

