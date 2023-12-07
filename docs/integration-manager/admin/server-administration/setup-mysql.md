---
title: MySQL
---

# MySQL

## Overview

MySQL is a production-capable database server that can be installed locally or on a network server. It is also available as a fully-managed cloud service via Amazon Aurora, Azure Database, and Google Cloud SQL.

Integration Manager is compatible with MySQL version 5.6.51 or later.

## Step 1: Install MySQL

* You can find the latest MySQL for Windows download at: [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
* You can find the latest MySQL for Windows installation instructions at: [https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html)

## Step 2: Verify MySQL Database Service

1. Go to Windows → Services.
2. Confirm that the MySQL Database service is registered and running.
3. Open Programs → MySQL → MySQL Workbench to confirm your connection info.
4. If you run into problems, see [https://dev.mysql.com/doc/refman/8.0/en/windows-troubleshooting.html](https://dev.mysql.com/doc/refman/8.0/en/windows-troubleshooting.html).

## Step 3: Integration Manager Configuration

Integration Manager uses the "spring.datasource" prefix properties in the ../conf/application.properties file to create a database connection.

:::note

Any change to application.properties requires a restart of the Integration Manager Service.
:::

Note that Integration Manager will initialize all required database tables at the initial startup.

Here are some example properties to connect Integration Manager to a MySQL database:
```
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://DB_HOSTNAME:3306/datacloud_db?useSSL=false&createDatabaseIfNotExist=true
spring.datasource.username=DB_USERNAME
spring.datasource.password=DB_PASSWORD
spring.datasource.initialize=false
spring.datasource.continue-on-error=false
spring.jpa.properties.eclipselink.cache.shared.default=false
spring.liquibase.change-log=classpath:db.changelog-master.xml
```