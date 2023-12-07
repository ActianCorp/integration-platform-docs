---
title: Scheduling Properties
hide_table_of_contents: true
tags:
 - Content Issues
---

# Scheduling Properties

| Property| Description| Default |
| --- | --- | --- |
| `org.quartz.ext.correct-timeouts-at-startup`| Rebuild job timeout schedules and triggers at startup | `true` |
| `org.quartz.ext.correct-schedules-at-startup` | Rebuild job schedules and triggers at startup | `false` |
| `spring.quartz.auto-startup` | Whether to automatically start the scheduler after initialization | `true` |
| `spring.quartz.properties.*` | Additional Quartz Scheduler properties. http://www.quartz-scheduler.org/documentation/quartz-2.3.0/configuration/. You can also drop a quartz.properties file into the IntegrationManager/conf folder | — |
| `spring.quartz.scheduler-name`| Name of the scheduler. This is typically used in a distributed environment, or where you may have multiple Integration Manager servers connecting to a single external database. | — |
| `spring.quartz.startup-delay` | The number of seconds to wait before starting the scheduler **<font color="red">The default value listed in current docs says "15s". This implies that you need to add "s" after the number. I'm assuming not, so I changed the default value to 15. Please correct if I'm wrong.</font>** | 15 seconds (`15`) |
| `spring.quartz.wait-for-jobs-to-complete-on-shutdown` | **<font color="red">Current docs say "spring.quartz.wait-for-jobs-to-complete-on-shutdown", which is the same text as the property name. This should be a description.</font>** | `false` |