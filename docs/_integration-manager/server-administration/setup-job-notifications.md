---
layout: default
title: Job Notifications
nav_order: 600
parent: Server Administration
---
# Job Notifications

## Overview

Integration Manager has the capability of sending email notifications for certain job completion events (not currently available for DataCloud SaaS accounts).

This feature requires access to an external SMTP server in order to deliver the email notifications. SMTP is currently the only supported protocol for job notifications.

## Notification Properties

You can enable Integration Manager to connect to your SMTP server and how to format the notifications by adding the following entries to your application.properties file (requires Integration Manager restart):

```
# SMTP Connection Info
spring.mail.host= [hostname of the smtp server]
spring.mail.username= [username to access smtp server (with send email permissions)]
spring.mail.password= [password to access smtp server]
```

```
# Job Notifications Config
notifications.enabled=true
notifications.mailFrom=noreply@yourcompanydomain.com
notifications.mailTo=admin@yourcompanydomain.com,finance@yourcompanydomain.com
notifications.attachLogs=true
```