---
title: Quick Start Installation
hide_table_of_contents: true
---

# Quick Start Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows" default>

## <svg width="32" height="32" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#00ADEF"/></svg> **Windows Installation**

### Prerequisites

1. Windows
   * Windows 10 Enterprise or later, Windows Server 2016 or later
   * Windows user account with "Run as Administrator" privileges
2. 64-bit processor, 2.90GHz
3. 8 GB Installed memory (RAM)
4. DataConnect Cloud or Avalanche Subscription

### What Will be Installed

1. Actian Integration Agent (Windows Service)
2. DataConnect v12 Embedded Engine
3. AdoptJDK 11 Embedded JRE

### Download

You can download the Actian Integration Agent installer from either the **Agents and Devices** page in Integration Manager or Actian ESD:

#### From Integration Manager:

1. Open Integration Manager at [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents).
2. Select the **Agents** tab.
3. Click the **Download Agent** dropdown and select your platform:

   ![](/img/Download-Agent.png)

#### From Actian ESD:

1. Go to [https://esd.actian.com/](https://esd.actian.com/), select **Actian DataCloud Agent**.
2. Click **DataCloud Agent** for your platform and click **Download**.

      ![](/img/Download-Agent-ESD.png)

### Installation

1. Right-click the downloaded installer file (`integration-agent-xxx-win.exe`) and select "Run as administrator".
2. If you have a previous 3.x.x version installed, you will be prompted to uninstall first. Uninstall will shutdown running services and prepare for library updates, it will NOT remove or alter ProgramData (conf files, logs, etc.).
3. Accept the License Agreement.
4. Select the installation path (default: `C:\Program Files\Actian\IntegrationAgent`).
5. Select the shared data path (default: `C:\ProgramData\Actian\IntegrationAgent`).
6. Installation should take less than a minute.

### Registration

1. If installed locally, open [http://localhost:6001/home](http://localhost:6001/home). If installed on a network server, open http://\[agent hostname]:6001/home.
2. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.

   ![](/img/Agent-Registered.png)

   :::note
   You can open [http://localhost:6001/home](http://localhost:6001/home) at any time to confirm the status of the Agent on the installed machine. Clicking the **Check-in** button updates the **Last Check-In** time on the **Agents** tab in Integration Manager. 
   :::

3. You should now be able to view and manage your Agent from the cloud on the **Agents** tab in Integration Manager:

   ![](/img/Registered-Agents.png)

If you encounter issues, try the following:

* Make sure the agent has been activated. See [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices). 
* Go to **Windows** → **Administrative Tools** → **Services** and ensure that the Integration Agent service is running.
* Refer to [Agent Troubleshooting](./agent-troubleshooting.md).

### Run Your First DJAR

You are now ready to run your first remote job. Refer to [Run Your First Remote Job](./run-your-first-remote-job).

### Service Logs & Monitoring

1. You can monitor Agent health, location, and job history from the cloud:

   * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
   * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
   * Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents
  

   :::note
    For more information on managing agents and devices from the Integration Manager, see [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices).
   :::
   
2. You can monitor service activity and get important additional information from the log file on the Agent machine (default: `C:\ProgramData\Actian\IntegrationAgent\logs\Agent.log`)

### Uninstalling

To uninstall Actian Integration Agent from your Windows machine, simply run the installer .exe file and click **Yes**:

![](/img/Uninstall-Agent.png)

:::note
Log file data will survive uninstallation/reinstallation.
:::

</TabItem>

<TabItem value="linux" label="Linux">

## <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#202020" d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z"/><path fill="#F8BF11" d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z"/><path fill="#D6A312" d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z"/><path fill="#202020" d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z"/><path fill="#ffffff" d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z"/><path fill="#E6E6E6" d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z"/><path fill="#ffffff" d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z"/><path fill="#202020" d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z"/></svg> **Linux Installation**

### Prerequisites

1. Linux
   * Red Hat Enterprise Linux 7.9 and 8 (64-bit U.S. English edition)
   * Linux user account with sudo privileges
2. 64-bit processor, 2.90GHz
3. 8 GB Installed memory (RAM)
4. DataConnect v12 License file (typically \*.slc)

### What Will Be Installed

1. Actian Integration Agent (Linux Daemon)
2. DataConnect v12 Embedded Engine
3. AdoptJDK 11 Embedded JRE

### Download

You can download the Actian Integration Agent installer from either the **Agents and Devices** page in Integration Manager or Actian ESD:

#### From Integration Manager:

1. Open Integration Manager at [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents).
2. Select the **Agents** tab.
3. Click the **Download Agent** dropdown and select your platform:

   ![](/img/Download-Agent-Linux.png)

#### From Actian ESD:

1. Go to [https://esd.actian.com/](https://esd.actian.com/), select **Actian DataCloud Agent**.
2. Click **DataCloud Agent** for your platform and click **Download**.

      ![](/img/Download-Agent-ESD.png)

### Installation

1. Locate the downloaded rpm file (`integration-agent-3.x.x.noarch.rpm`).
2. Switch to root user: `sudo su`
3. Install Graphical Interface Tool Kit Version 3 (gtk3): `yum install gtk3`
4. Install Network Services Library (libnsl): `yum install libnsl`
5. Install Integration Manager: `yum install integration-manager-3.x.x.noarch.rpm`
6. Confirm the installation path (default: `/opt/actian/integration-agent`).
7. Confirm the shared data path (default: `/etc/opt/actian/integration-agent)`).
8. Installation should take less than a minute.

### Registration

1. If installed locally, open [http://localhost:6001/home](http://localhost:6001/home). If installed on a network server, open http://\[agent hostname]:6001/home.
2. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.

   ![](/img/Agent-Registered.png)

   :::note
   You can open [http://localhost:6001/home](http://localhost:6001/home) at any time to confirm the status of the Agent on the installed machine. Clicking the **Check-in** button updates the **Last Check-In** time on the **Agents** tab in Integration Manager. 
   :::

3. You should now be able to view and manage your Agent from the cloud on the **Agents** tab in Integration Manager:

   ![](/img/Registered-Agents.png)
   
   See [Service Logs & Monitoring](#service-logs--monitoring-1) below.

If you encounter issues, activate the agent. See [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices). If the issue doesn’t resolve, ensure that the service is running. See [Start/Stop/Status](./quickstart-install#startstopstatus).

### Run Your First DJAR

You are now ready to run your first remote job. Refer to [Run Your First Remote Job](./run-your-first-remote-job).

### Service Logs & Monitoring

1. You can monitor Agent health, location, and job history from the cloud:

   * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
   * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
   * Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents
  
   :::note
    For more information on managing agents and devices from the Integration Manager, see [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices).
   :::
 
 2. You can monitor service activity and get important additional information from the log file on the Agent machine (default: `/etc/opt/actian/integration-agent/logs/integration-agent.log`).

### Start/Stop/Status

Start: `sh -x /etc/init.d/agentservice start`

Stop: `sh -x /etc/init.d/agentservice stop`

Status: `sh -x /etc/init.d/agentservice status`

### Uninstalling

`yum uninstall integration-agent-3.x.x.noarch.rpm`

:::note
Log file data will survive uninstallation/reinstallation.
:::

</TabItem>
<TabItem value="docker" label="Docker" default>

## <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#2396ED" d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"></path></g></svg> **Docker Installation**

Integration Agent can be installed using a Docker image via Docker Desktop and Docker CLI.

### Prerequisites

* DataConnect Cloud or Avalanche Subscription
* Docker Hub account
* Access to the Actian Docker Hub. [Create a New Case](https://communities.actian.com/s/create-new-case) to request access to the Actian Docker Hub.

### Install Docker Desktop

1. Download Docker Desktop from https://hub.docker.com/.
2. Run the Docker Desktop installer using recommended settings.
3. Launch Docker Desktop and sign in.
4. Click the **Hub** tab.
5. Select **actian** in the hub dropdown.
6. Enter **agent** in the search field.
7. Ensure that you have access to the **actian/datacloud-integration-agent** image:
   
     ![](/img/Docker-Agent-Image.png)
8. Create the following Docker Compose file with the name `docker-compose.yaml`:

   ```
   version: '3.8'
   volumes:
     job_logs:
     conf_props:
     agent_log:
     license_path:
       driver: local
       driver_opts:
          type: none
          device: <path to license file, such as ./src/main/license>
          o: bind
   services:
     agent_service:
       image: actian/datacloud-integration-agent:3.2.0-SNAPSHOT
       user: root
       privileged: true
       hostname: im-agent
       volumes:
          - conf_props:/opt/Actian/conf
          - license_path:/opt/Actian/volume
          - agent_log:/opt/Actian/logs
          - job_logs:/opt/Actian/local/work/job
       ports:
          - 6001:6001
       command: bash -c "tail -f /dev/null"
   ```
9. Save the `docker-compose.yaml` file to local folder. 
10. Update the `device` property to point to the path of your `cosmos.slc` license file, relative to the folder containing the `docker-compose.yaml` file.
11. The `image` specified above is `3.2.0-SNAPSHOT`. You can specify any image listed in the **Tags** column:
    
    ![](/img/Docker-Agent-Image-Tag.png)
    
    :::note
    If **latest** is listed for the image, specifying `image: actian/integration-agent:latest` will pull the latest image.
    :::

12. If desired, you can use a different port. To use port 8085, for example, you would change the above port entry to `8085:8080`.
13. Open a command prompt and navigate to the folder containing the `docker-compose.yaml` file.
14. Run the following command:
    
    ```
    docker compose up
    ```
15. The Agent service should now be running in your Docker container.
   
### Registration

1. Open [http://localhost:6001/home](http://localhost:6001/home).
2. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.

   ![](/img/Docker-Agent-Registered.png)

   :::note
   You can open [http://localhost:6001/home](http://localhost:6001/home) at any time to confirm the status of the Agent. Clicking the **Check-in** button updates the **Last Check-In** time on the **Agents** tab in Integration Manager. 
   :::

3. You should now be able to view and manage your Agent from the cloud on the **Agents** tab in Integration Manager:

   ![](/img/Docker-Registered-Agents.png)

If you encounter issues, try the following:

* Make sure the agent has been activated. See [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices). 
* In Docker Desktop, click **Containers** in the left pane and ensure that the Integration Agent service is running:

     ![](/img/Docker-Agent-Running.png)
  
* Refer to [Agent Troubleshooting](./agent-troubleshooting.md).

### Run Your First DJAR

You are now ready to run your first remote job. Refer to [Run Your First Remote Job](./run-your-first-remote-job).

### Configuration

Docker Desktop exposes directories containing configuration files, including the `application.properties` file, which can be used for a variety of configurations to tailor Integration Manager and Agent to your requirements and environment. See [Application Property Reference](../integration-manager/admin/application-property-reference/properties-overview) for a description of available properties.

To modify the `application.properties` file in Docker Desktop, do the following:

1. In Docker Desktop, click **Volumes** in the left pane, then click **docker_conf_props**:

   ![](/img/Docker-Props.png)

2. Double-click **application.properties**:
   
   ![](/img/Docker-Application-Properties.png)
3. Make any desired edits, then click the disk icon to save changes.

   ![](/img/Docker-Properties-Save.png)

### Service Logs & Monitoring

You can monitor Agent health, location, and job history from the cloud:

* DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
* Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
* Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents

   :::note
    For more information on managing agents and devices from the Integration Manager, see [Managing Agents and Devices](../integration-manager/agents-and-devices/managing-agents-and-devices).
   :::
   
You can monitor service activity and get important additional information from the log file in Docker Desktop. Do the following:

1. In Docker Desktop, click **Containers** in the left pane.
2. Click the Agent service:

   ![](/img/Docker-Agent-Log1.png)

3. The **Logs** tab is displayed:
   
   ![](/img/Docker-Agent-Log2.png)

</TabItem>
</Tabs>
