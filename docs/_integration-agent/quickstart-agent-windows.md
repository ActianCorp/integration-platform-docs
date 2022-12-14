---
layout: default
title: QuickStart - Windows
nav_order: 1
---
# QuickStart - Windows

## Prerequisites

1. Windows
   * Windows 10 Enterprise or later, Windows Server 2016 or later
   * Windows user account with "Run as Administrator" privileges
2. 64-bit processor, 2.90GHz
3. 8 GB Installed memory (RAM)
4. DataConnect Cloud or Avalanche Subscription

## What Will be Installed

1. Actian Integration Agent (Windows Service)
2. DataConnect v12 Embedded Engine
3. AdoptJDK 11 Embedded JRE

## Installation

1. Download Actian Integration Agent for Windows from:
    * Agents Console [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents), or 
	* Actian ESD: [https://esd.actian.com/](https://esd.actian.com/).
2. Right click the downloaded installer file (integration-agent-xxx-win.exe) and select "Run as administrator".
3. If you have a previous 3.x.x version installed, you will be coerced to uninstall first. Uninstall will shutdown running services and prepare for library updates, it will NOT remove or alter ProgramData (conf files, logs, etc...).
4. Accept the License Agreement.
5. Select the installation path (default: C:/Program Files/Actian/IntegrationAgent).
6. Select the shared data path (default: C:/ProgramData/Actian/IntegrationAgent).
7. Installation should take less than a minute.
8. If installed locally, open [http://localhost:6001/home](http://localhost:6001/home). If installed on a network server, open http://[agent hostname]:6001/home.
9. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.
10. Now you should be able to view and manage your Agent from the cloud:
    * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
    * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
    * Private Cloud on Kubernetes: https://[your hosted domain]/im/agents
11. You can also open [http://localhost:6001/home](http://localhost:6001/home) at anytime to confirm the status of the Agent on the installed machine.

## Run Your First DJAR Remotely

1. Navigate and login to Integration Manager Cloud or Avalanche Connect in your web browser.
2. Navigate to the Configurations tab.
3. Click +Add.
4. Setup a new Configuration:
   * Give it a unique Name.
   * Set Run Location to User Agent.
   * Click Add Package.
   * Upload a DataConnect djar file.
   * Select an Entry Point within the djar.
   * Click on the Macros sub-tab.
   * Add and/or import any macros your djar requires.
5. Click Run Configuration.
6. Navigate to the Jobs sub-tab to view job progress and log file.
7. You can monitor Job progress in real-time even though it is executing on the Agent machine.

## Service Logs & Monitoring

1. You can monitor Agent health, location, and job history from the cloud:
   * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
   * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
   * Private Cloud on Kubernetes: https://[your hosted domain]/ui/agents
2. You can monitor service activity and get important additional information from the log file on the Agent machine (default:  C:/ProgramData/Actian/IntegrationAgent/logs/Agent.log)
3. Remember that log file data will survive uninstallation/reinstallation.&#x20;
