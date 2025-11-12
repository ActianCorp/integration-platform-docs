---
title: Actian Integration Manager Worker
hide_table_of_contents: true
---

# Actian Integration Manager Worker

This section describes how to install, configure, and use the Actian Integration Manager Worker.

### Why and when is this installation required?

Installing a separate Integration Manager Worker (worker service) is optional. The Worker service is already included by default when you install Integration Manager. A separate Worker service installation is only required when the you also want to install additional workers on other machines.

## Quick Start Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows" default>

## <svg width="32" height="32" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#00ADEF"/></svg> **Windows Installation**

### Prerequisites​

* Windows Operating System
* Windows 10 Enterprise or later, Windows Server 2016 or later
* Windows user account with "Run as Administrator" privileges
* 64-bit processor, 2.90GHz
* 16 GB installed memory (RAM)
* DataConnect v12 License file (typically *.slc)
* RabbitMQ Messaging Broker

### What Will Be Installed​

* Actian Integration Manager Worker (Windows Service)
* DataConnect v12 Embedded Engine
* AdoptJDK 11 Embedded JRE

### Installation​

1. Make sure RabbitMQ Messaging Broker has been installed and running locally or remotely to configure the Integration Manager Worker.
2. Download Actian Integration Manager Worker for Windows from Actian ESD: [ESD - Electronic Software Distribution](https://esd.actian.com/).
3. Right-click the downloaded installer file (`integration-worker-3.3.x-xx.exe`) and select "Run as Administrator".

    :::note
    If you have a previous 3.x.x version installed, you will be prompted to uninstall first. Uninstalling will shutdown running services and prepare for library updates, it will NOT remove or alter ProgramData (conf files, logs, etc.). See [Uninstallation](#uninstallation) below.
    :::

4. Accept the License Agreement.
5. Select the installation path (default: `C:\Program Files\Actian\IntegrationWorker`).
6. Select the shared data path (default: `C:\ProgramData\Actian\IntegrationWorker`).
7. Installation should take less than a minute.

### Configuration/Reconfiguration​

The `application.properties` file can be used for a variety of configurations to tailor Integration Manager Worker to your requirements and environment. See [Application Property Reference](../application-property-reference/properties-overview.md) for a description of available properties.

:::note
If you have a previous installation of Integration Worker, none of your existing property values will be changed.
:::

1. Locate the `application.properties` file (default: `C:\ProgramData\Actian\IntegrationWorker\conf\application.properties`).
2. Configure `Messaging Configuration` and `Worker Configuration` in the properties file, replacing the placeholder property values below with the required values for your environment.

    * **Worker Configuration**
    
        ```
        # Worker Configuration
        worker.destinationId=<your-destination-id>
        Messaging Configuration
        ```

    * **Messaging Configuration**

        ```
        queue.host= <rabbitmq-host>
        queue.port= <rabbitmq-port>
        queue.username= <rabbitmq-username>
        queue.password= <rabbitmq-password>
        queue.ssl.enabled= true
        ```

3. Confirm or alter the path to your DataConnect v12 license file using the property `engine.licensePath` (default: `C:\ProgramData\Actian\IntegrationWorker\license\cosmos.slc`).

    :::note
    If you were previously using Integration Manager v2 and DataConnect v11, you will need to alter this value before executing any integrations. DataConnect v11 and v12 licenses are not interchangeable.
    :::

4. Any change to the `application.properties` file will require a restart of the service.

    1. Go to **Windows** → **Administrative Tools** → **Services**.
    2. Right-click **Actian Integration Manager Worker** and select **Restart**.

    :::note
    Configuration file changes will survive uninstallation/reinstallation.
    :::

### Service Logs & Monitoring​

* You can monitor service activity and get important additional information from the log file (default: `C:\ProgramData\Actian\IntegrationWorker\logs\IntegrationWorker.log`)
* You can retrieve DataConnect Engine log files by Job Id in the job history folder (default: `C:\ProgramData\Actian\IntegrationWorker\history\job`)

:::note
Log file data will survive uninstallation/reinstallation.
:::

### Uninstallation​

To uninstall Integration Manager Worker, execute `uninstaller.exe` in the program directory (default `C:\Program Files\Actian\IntegrationWorker`).

#### Testing and Running a Job on the Worker

1. Ensure that the Integration Manager Worker service is started and connected to the RabbitMQ Broker.
2. Login to Integration Manager console and configure a Job.
3. Change the run location to the configured `<your-destination-id>`.
4. Run the Job.
5. Verify that the job has run successfully, and verify the logs.

</TabItem>
<TabItem value="linux" label="Linux" default>

## <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#202020" d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z"/><path fill="#F8BF11" d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z"/><path fill="#D6A312" d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z"/><path fill="#202020" d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z"/><path fill="#ffffff" d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z"/><path fill="#E6E6E6" d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z"/><path fill="#ffffff" d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z"/><path fill="#202020" d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z"/></svg> **Linux Installation**


### Prerequisites​

* Linux Operating System
* Red Hat Enterprise Linux 7.9 and 8 (64-bit U.S. English edition)
* Linux user account with sudo privileges
* 64-bit processor, 2.90GHz
* 16 GB Installed memory (RAM)
* DataConnect v12 License file (typically *.slc)
* RabbitMQ Messaging Broker

#### What Will Be Installed​

* Actian Integration Manager Worker (Linux Daemon)
* DataConnect v12 Embedded Engine
* AdoptJDK 11 Embedded JRE

#### Installation​

1. Make sure RabbitMQ Messaging Broker has been installed and running locally or remotely to configure the Integration Manager Worker.
2. Download Actian Integration Manager Worker for Linux from Actian ESD: [ESD - Electronic Software Distribution](https://esd.actian.com/).
3. Locate the downloaded rpm file (`integration-worker-3.x.x.noarch.rpm`).
4. Switch to root user: `sudo su`
5. Install Graphical Interface Tool Kit Version 3 (gtk3): `yum install gtk3`
6. Install Network Services Library (libnsl): `yum install libnsl`
7. Install Integration Manager: `yum install integration-worker-3.x.x.noarch.rpm`
8. Confirm the installation path (default: `/opt/actian/integration-worker`).
9. Confirm the shared data path (default: `/etc/opt/actian/integration-worker`).
10. Installation should take less than a minute.

#### Configuration/Reconfiguration​

The `application.properties` file can be used for a variety of configurations to tailor Integration Manager Worker to your requirements and environment. See [Application Property Reference](../application-property-reference/properties-overview.md) for a description of available properties.

1. Locate the application.properties file (default: `/etc/opt/actian/integration-worker/conf/application.properties`)

    * Worker Configuration

        ```
        # Worker Configuration
        worker.destinationId=<your-destination-id>
        ```
        
    * Messaging Configuration

        ```
        # Messaging Configuration
        queue.host= <rabbitmq-host>
        queue.port= <rabbitmq-port>
        queue.username= <rabbitmq-username>
        queue.password= <rabbitmq-password>
        queue.ssl.enabled= true
        ```

2. Confirm or alter the path to your DataConnect v12 license file using the property engine.licensePath (default: `/etc/opt/actian/integration-worker/license/cosmos.slc`).

    :::note
    If you were previously using Integration Manager Worker v2 and DataConnect v11, you will need to alter this value before executing any integrations. DataConnect v11 and v12 licenses are not interchangeable.
    :::

3. Any change to the application.properties file will require a restart of the service.

    :::note
    Configuration file changes will survive uninstallation/reinstallation.
    :::

#### Service Logs & Monitoring​

* You can monitor service activity and get important additional information from the log file (default: `/etc/opt/actian/integration-worker/logs/integration-worker.log`)
* You can retrieve DataConnect Engine log files by Job Id in the job history folder (default: `/etc/opt/actian/integration-worker/history/job`)

    :::note
    Log file data will survive uninstallation/reinstallation.
    :::

#### Start, Stop, Status, Uninstall​

* **Start**: `sh -x /etc/init.d/workerservice start`
* **Stop**: `sh -x /etc/init.d/workerservice stop`
* **Status**: `sh -x /etc/init.d/workerservice status`
* **Uninstall**: `yum uninstall integration-worker-3.x.x.noarch.rpm`

#### Testing and Running a Job on the Worker

1. Ensure that the Integration Manager Worker service is started and connected to the RabbitMQ Broker.
2. Login to Integration Manager console and configure a Job.
3. Change the run location to the configured `<your-destination-id>`.
4. Run the Job.
5. Verify that the job has run successfully, and verify the logs.

</TabItem>
</Tabs>
