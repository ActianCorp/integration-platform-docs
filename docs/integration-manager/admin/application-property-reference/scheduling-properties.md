---
title: Scheduling Properties
hide_table_of_contents: true
tags:
 - Content Issues
---

# Scheduling Properties

Refer to the following table for available Scheduling properties:

| Property| Description| Default |
| --- | --- | --- |
| `org.quartz.ext.correct-timeouts-at-startup`| Rebuild job timeout schedules and triggers at startup | `true` |
| `org.quartz.ext.correct-schedules-at-startup` | Rebuild job schedules and triggers at startup | `false` |
| `spring.quartz.auto-startup` | Whether to automatically start the scheduler after initialization | `true` |
| `spring.quartz.properties.*` | Additional Quartz Scheduler properties. http://www.quartz-scheduler.org/documentation/quartz-2.3.0/configuration/. You can also drop a quartz.properties file into the IntegrationManager/conf folder | — |
| `spring.quartz.scheduler-name`| Name of the scheduler. This is typically used in a distributed environment, or where you may have multiple Integration Manager servers connecting to a single external database. | — |
| `spring.quartz.startup-delay` | The amount of time to wait before starting the scheduler. | `15s` |
| `spring.quartz.wait-for-jobs-to-complete-on-shutdown` | Whether the scheduler should pause shutdown and wait for running jobs to complete before shutting down. | `false` |
