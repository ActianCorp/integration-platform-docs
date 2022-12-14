---
layout: default
title: Microsoft SQL Server
nav_order: 510
parent: Server Administration
---
# Microsoft SQL Server

## Overview

Microsoft SQL Server is a production capable database server that can be installed locally, or on a network server. Microsoft SQL Server is also available as a fully managed cloud service via Amazon Aurora, Azure Database, and Google Cloud SQL.

Integration Manager is compatible with Microsoft SQL Server version 13 (aka SQL Server 2016) or later.

## Step 1: Install MS SQL Server

* You can find the latest MS SQL Server for Windows download here: [https://www.microsoft.com/en-us/sql-server/sql-server-downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* You can find the latest MS SQL Server for Windows installation instructions here: [https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2016](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2016)

## Step 2: Verify MS SQL Server Service

1. Go to Windows → Services
2. Confirm SQL Server (MSSQLSERVER) service is registered and running
3. Open Programs → Microsoft SQL Server Tools → Microsoft SQL Server Management Studio to confirm your connection info
4. If you run into problems: [https://docs.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-2016](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-2016)

## Step 3: Integration Manager Configuration

* Integration Manager uses the "spring.datasource" prefix properties in the ../conf/application.properties file to create a database connection
* Note that any application.properties change requires a restart of the Integration Manager Service
* Note that Integration Manager will initialize all required database tables at the initial startup
* Example properties to connect Integration Manager to a MS SQL Server database:
```
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
spring.datasource.url=jdbc:sqlserver://DB_HOSTNAME;databaseName=datacloud_db;integratedSecurity=true
spring.datasource.initialize=false
spring.datasource.continue-on-error=false 
spring.jpa.properties.eclipselink.cache.shared.default=false
spring.liquibase.change-log=classpath:db.changelog-master.xml
```

## Step 4: Create SQL Server Compatible Quartz Properties file

The default Quartz configuration is not compatible with SQL Server, so you will need to create a custom properties file.

* Create a file named quartz.properties in the (ProgramData)/Actian/IntegrationManager/conf folder
* Note that any quartz.properties change requires a restart of the Integration Manager Service
* Add the contents below to properly initialize the Quartz subsystem in SQL Server:
```
org.quartz.scheduler.instanceName=ServerScheduler
org.quartz.scheduler.instanceId=AUTO
org.quartz.scheduler.skipUpdateCheck=true
org.quartz.scheduler.jobFactory.class=org.quartz.simpl.SimpleJobFactory
org.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool
org.quartz.threadPool.makeThreadsDaemons=true
org.quartz.threadPool.threadCount=20
org.quartz.threadPool.threadPriority=5
org.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.MSSQLDelegate
org.quartz.jobStore.useProperties=true
org.quartz.jobStore.misfireThreshold=6000000
org.quartz.jobStore.tablePrefix=QRTZ_
org.quartz.jobStore.isClustered=true
org.quartz.jobStore.clusterCheckinInterval=30000
org.quartz.jobStore.txIsolationLevelSerializable=true
org.quartz.jobStore.acquireTriggersWithinLock=true
org.quartz.jobStore.lockHandler.class=org.quartz.impl.jdbcjobstore.UpdateLockRowSemaphore
```

## Step 5: Configure the Integration Manager Service for Domain login

1. Go to Windows → Services → Actian Integration Manager
2. Right click Actian Integration Manager, select "Properties"
3. Select the "Log On" tab
4. Select "This account:" and enter a Window Domain User with read/write access to MS SQL Server
5. Click "OK"
6. Select the "General" tab
7. Right click Actian Integration Manager, select "Start" or "Restart" (depending on whether the service is currently running)