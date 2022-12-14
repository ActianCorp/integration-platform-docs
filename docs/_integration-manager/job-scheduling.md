---
layout: default
title: Job Scheduling
nav_order: 4
---
# Job Scheduling

## Overview

Integration Manager supports both Interval and Cron expression scheduling. The powerful Quartz scheduler engine is used to manage scheduling and schedule triggers.

## Interval Scheduling

Interval scheduling is a convenient way to setup an integration to run every X hour(s) and/or X minute(s).

Note that the interval scheduling smallest unit is 1 minute.

## Cron Expression Scheduling

Cron expression scheduling is a much more powerful and flexible scheduling mechanism. It uses a special syntax to specify the exact second, minute, hour, day of month, month, day of week, and/or year that a schedule will fire.

A simple example is a cron expression representing a schedule that will run at 1:25 p.m. on the first day of each month:

```
0 25 13 1 * ? *
```

<figure><img src="https://actian.atlassian.net/wiki/download/thumbnails/15008051/image2022-2-10_14-57-3.png?version=1&#x26;modificationDate=1644505023000&#x26;cacheVersion=1&#x26;api=v2&#x26;width=596&#x26;height=120" alt=""><figcaption></figcaption></figure>

It takes a little bit of practice, but cron can come in very handy to customize exactly when your integration jobs will run.

Note that cron scheduling in increments of less than 1 minute is disabled by default. You can enable increments down to the second by adding the following entry to your application.properties file (requires Integration Manager restart):

```
org.quartz.ext.allow-seconds=true
```

## Advanced Cron Scheduling

A quick cron expression tutorial and cheat sheet provided by Quartz can be found here: [http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)
