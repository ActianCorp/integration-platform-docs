---
title: Dashboard
tags:
 - Content Issues
 - Image Issues
---

**<font color="red">What are we calling the elements on the Dashboard? I refer to them as widgets here.</font>**

![Dashboard](/img/Dashboard.png)

The Dashboard provides data visualization charts that you can use to monitor the overall status of your integrations, configurations, and agents. 

## Widgets

The following widgets are available on the Dashboard.

For any widget that shows ![the download icon](/img/icons/download-button.png), click the icon to download the chart in SVG or PNG format, or download the data in CSV format (which you can open in Excel).

### Recent Jobs

Recent Jobs provides a table of recently-run jobs, and displays details and status for each job. Click the Start, Name, Type, Status, or Duration column headings to toggle between ascending and descending sort order.

   ![Recent Jobs Widget](/img/Recent-Jobs-Widget.png)

Click ![the magnifying glass icon](/img/icons/log-file.png) to downlaod the log file for that job.

### ALL JOBS

The ALL JOBS chart displays the number of integrations executed for the selected time period (30, 60 or 90 days). Hover over the chart to see the value per day.

   ![All Jobs Widget](/img/All-Jobs-Widget.png)

### FAILED JOBS

The FAILED JOBS chart represents the number of failed integrations executed for the selected time period (30, 60 or 90 days). Hover over the chart to see the value per day. <font color="red">Need image with more data.</font>

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

The AGENT HEALTH chart represents the health status of agents a user has installed. In the following figure, the user has one agent installed and its status is Error. Hover over the chart to see the value per day. <font color="red">Very minor issue, but it would be nice if we added a condition such as "if numAgents == 1 then 'Agent' else 'Agents'" so we don't get the "1 Agents" label here.</font>

   ![Agent Health Widget](/img/Agent-Health-Widget.png)

Agent status can be:

* **Healthy**: The agent is connected and ready to receive jobs.
* **Warning**: The Agent has not reported its status in over 3 hours and may require attention.
* **Error**: The Agent has not reported its status in over 6 hours.
* **Updating**: The Agent is currently processing an Update Command, such as Update Worker or Update Engine.
* **Offline**: The Agent is offline or the local service is stopped. This status is typically reported just prior to a shutdown.

You can verify whether the agent is running, and also start the agent service, by opening Windows Services.

### News & Announcements

<font color="red">Need some content in this widget so I can take a screenshot. How can we populate some fake data in Dev?</font>

## Customizing the Dashboard

### Adding Widgets

1. Click ![the ellipsis icon](/img/icons/ellipsis.png) and select **Settings** to open the **Dashboard Settings** panel:
   
   ![Dashboard Settings Panel](/img/Dashboard-Settings-Panel.png)

2. Click ![the + icon](/img/icons/add-plus.png) on a widget in the **Available** section.

### Removing Widgets

To remove a widget from your Dashboard, do one of the followng:

* Click ![the ellipsis icon](/img/icons/ellipsis.png) on the widget and select **Remove**:

   ![Remove Widget](/img/Remove-Widget.png)

* Click ![the ellipsis icon](/img/icons/ellipsis.png) and select <b>Settings</b> to open the <b>Dashboard Settings</b> panel. Click ![the X icon](/img/icons/remove.png) in the **Current** section. It will move to the **Available** section.
   
   ![Dashboard Settings Panel](/img/Dashboard-Settings-Panel.png)

### Rearranging Widgets

To change the position of the widgets on your Dashboard, drag and drop the desired position. Settings are persisted the next time you log in.

