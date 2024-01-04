---
title: Editing Configuration Schedules
---

# Editing Configuration Schedules

Integration Manager supports both Interval and Cron expression scheduling. The powerful Quartz scheduler engine is used to manage scheduling and schedule triggers.

To set a schedule for a configuration to run:

1. Select the **Configurations** tab.
2. Click the name of the configuration you want to schedule.
3. On the **Configuration Details** page, click the edit icon in the **Scheduling** field.
4. The **Edit Configuration Schedule** page is displayed.
5. Select a frequency from the dropdown menu:
   
   - **On Demand** – Unscheduled; the configuration must be run manually. See [Running a Configuration Manually](./running-configurations#running-a-configuration-manually).
   - **Interval** – Scheduled to run every x hours and x minutes. Note that the shortest interval is 1 minute.
   - **Daily** – Scheduled to run every x days at a specified time.
   - **Weekly** – Scheduled to run every week at a specified time on a specific day.
   - **Monthly** – Scheduled to run every month on a specific day every x months at a specified time.
   - **Custom** – Scheduled to run as per the specified schedule frequency.
   - **Custom CRON Expression** – Scheduled by a Quartz CRON expression. Refer to [Cron Expression Scheduling](./editing-configuration-schedules#cron-expression-scheduling).
6. Enter the settings for the chosen schedule type.
7. Click **Save Schedule**.
   
   The scheduling is updated on the **Configuration Details** page.

## Cron Expression Scheduling

Cron expression scheduling is a much more powerful and flexible scheduling mechanism. It uses a special syntax to specify the exact second, minute, hour, day of month, month, day of week, and/or year that a schedule will fire.

A simple example is a cron expression representing a schedule that will run at 1:25 p.m. on the first day of each month:

```
0 25 13 1 * ? *
```

![Integration Manager Job Scheduling](/img/Integration-Manager-Job-Scheduling.png)

It takes a little bit of practice, but cron can come in very handy to customize exactly when your integration jobs will run. A quick cron expression tutorial and cheat sheet provided by Quartz can be found here: [http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)

Note that cron scheduling in increments of less than 1 minute is disabled by default. You can enable increments down to the second by adding the following entry to your application.properties file (requires Integration Manager restart):

```
org.quartz.ext.allow-seconds=true
```

