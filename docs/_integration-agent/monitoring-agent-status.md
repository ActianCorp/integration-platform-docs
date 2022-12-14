---
layout: default
title: Monitoring Agent Status
nav_order: 4
---
# Monitoring Agent Status

From the Agents tab, you can:

* Monitor Agent health and status
* View details about its configuration
* View details about its remote location (hostname, ip address)

| Status          | Description                                                                                            |
| :-------------- | :----------------------------------------------------------------------------------------------------- |
| Active/Inactive | This is controlled by Account Admin(s) and can be used to disable Agents for various reasons.          |
| Online          | The Agent is online as of the last check-in time and is ready to receive jobs.                         |
| Updating        | The Agent is currently processing an Update Command, such as Update Worker or Update Engine.           |
| Expired         | The Agent license and/or subscription has expired. Please contact support and/or your account manager. |
| Warning         | The Agent has not reported its status in over 3 hours and may require attention.                       |
| Error           | The Agent has not reported its status in over 6 hours.                                                 |
| Offline         | The Agent is offline. This status is typically reported just prior to a shutdown.                      |
