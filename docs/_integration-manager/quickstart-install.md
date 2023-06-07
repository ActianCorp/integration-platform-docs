---
layout: default
title: QuickStart Install
nav_order: 0
---
# Windows QuickStart

I need the [Linux QuickStart](#linux-quickstart)

## Prerequisites

1. Windows Operating Sytem
   * Windows 10 Enterprise or later, Windows Server 2016 or later
   * Windows user account with "Run as Administrator" privileges
2. 64-bit processor, 2.90GHz
3. 16 GB Installed memory (RAM)
4. DataConnect v12 License file (typically \*.slc)

## What Will Be Installed

1. Actian Integration Manager (Windows Service)
2. Actian Integration Manager Worker (Windows Service, optional usage)
3. DataConnect v12 Embedded Engine
4. AdoptJDK 11 Embedded JRE

## Installation

1. Download Actian Integration Manager from [https://esd.actian.com/](https://esd.actian.com/).
2. Right click the downloaded installer file (integration-manager-3.x.x.exe) and select "Run as Administrator".
3. If you have a previous 3.x.x version installed, you will be coerced to uninstall first. Uninstall will shutdown running services and prepare for library updates, it will NOT remove or alter ProgramData (conf files, logs, etc...).
4. Accept the License Agreement.
5. Select the installation path (default: C:/Program Files/Actian/IntegrationManager).
6. Select the shared data path (default: C:/ProgramData/Actian/IntegrationManager).
7. Installation should take less than a minute.

## Configuration/Reconfiguration

1. Locate the application.properties file (default: C:/ProgramData/Actian/IntegrationManager/conf/application.properties)
2. Note that if you have a previous installation of Integration Manager, none of your existing property values will be changed.&#x20;
3. You can confirm or alter the path to your DataConnect v12 license file using the property "engine.licensePath" (default: C:/ProgramData/Actian/IntegrationManager/license/cosmos.slc).
   * If you were previously using Integration Manager v2 and DataConnect v11, you will need to alter this value before executing any integrations. DataConnect v11 and v12 licenses are not interchangeable.
4. You can also run Integration Manager on a different port using the property "server.port" (default: 8080).
5. The application.properties file can be used for a variety of configurations to tailor Integration Manager to your requirements and environment. See the Server Administration documentation for a description of available properties.
6. ANY change to the application.properties file will require a restart of the service.
   * Go to Windows → Administrative Tools → Services.
   * Right click on Actian Integration Manager to stop, start, or restart.
7. Remember that configuration file changes will survive uninstallation/reinstallation.

## Service Logs & Monitoring

1. You can monitor service activity and get important additional information from the log file (default:  C:/ProgramData/Actian/IntegrationManager/logs/IntegrationManager.log)
2. You can retrieve DataConnect Engine log files by Job Id in the job history folder (default: C:/ProgramData/Actian/IntegrationManager/history/job)
3. Remember that log file data will survive uninstallation/reinstallation.&#x20;

# Linux QuickStart

I need the [Windows QuickStart](#windows-quickstart)

## Prerequisites

1. Linux Operating System
   * Red Hat Enterprise Linux 7.9 and 8 (64-bit U.S. English edition)
   * GTK Version 3
   * You need to install libnsl.so.1 separately on RHEL 8.1 or above versions.
   * Linux user account with sudo privileges
2. 64-bit processor, 2.90GHz
3. 16 GB Installed memory (RAM)
4. DataConnect v12 License file (typically \*.slc)

## What Will Be Installed

1. Actian Integration Manager (Linux Daemon)
2. Actian Integration Manager Worker (Linux Daemon, optional usage)
3. DataConnect v12 Embedded Engine
4. AdoptJDK 11 Embedded JRE

## Installation

1. Download Actian Integration Manager for Linux from Actian ESD: [https://esd.actian.com/](https://esd.actian.com/).
2. Locate downloaded rpm file (integration-manager-3.x.x.noarch.rpm).
3. Switch to root user: ```sudo su```
4. Install rpm with yum: ```yum install integration-manager-3.x.x.noarch.rpm```
5. Confirm installation path (default: /opt/actian/integration-manager).
6. Confirm shared data path (default: /etc/opt/actian/integration-manager).
7. Installation should take less than a minute.

## Configuration/Reconfiguration

1. Locate the application.properties file (default: /etc/opt/actian/integration-manager/conf/application.properties)
2. Note that if you have a previous installation of Integration Manager, none of your existing property values will be changed.&#x20;
3. You can confirm or alter the path to your DataConnect v12 license file using the property "engine.licensePath" (default: /etc/opt/actian/integration-manager/license/cosmos.slc).
   * If you were previously using Integration Manager v2 and DataConnect v11, you will need to alter this value before executing any integrations. DataConnect v11 and v12 licenses are not interchangeable.
4. You can also run Integration Manager on a different port using the property "server.port" (default: 8080).
5. The application.properties file can be used for a variety of configurations to tailor Integration Manager to your requirements and environment. See the Server Administration documentation for a description of available properties.
6. ANY change to the application.properties file will require a restart of the service.
7. Remember that configuration file changes will survive uninstallation/reinstallation.

## Service Logs & Monitoring

1. You can monitor service activity and get important additional information from the log file (default:  /etc/opt/actian/integration-manager/logs/integration-manager.log)
2. You can retrieve DataConnect Engine log files by Job Id in the job history folder (default: /etc/opt/actian/integration-manager/history/job)
3. Remember that log file data will survive uninstallation/reinstallation.&#x20;

## Start, Stop, Uninstall, Etc

* Start: ```sh -x /etc/init.d/imservice start```
* Stop: ```sh -x /etc/init.d/imservice stop```
* Status: ```sh -x /etc/init.d/imservice status```
* Uninstall: ```yum uninstall integration-manager-3.x.x.noarch.rpm```