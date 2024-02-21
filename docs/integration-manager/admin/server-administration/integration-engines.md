---
title: Integration Engines
tags:
 - Content Issues
---

Integration Manager has the capability to leverage different Actian Integration Engines to execute jobs, depending on the use case. Generally, Integration Manager will install the latest GA patch of any supported Integration Engine as of the release date. It is recommended that you first update to the latest Integration Manager version before manually patching an Integration Engine.

<font color="red">GitHub Pages content puts this topic under Server Administration. Is this the right place for this topic?</font>

## Integration Engines by Version

| Integration Manager | DataConnect | DataFlow |
| :------------------ | :---------- | :------- |
| 3.1.0               | 12.1.0-22   | 8.0.0-98 |
| 3.1.1				  | 12.1.0-24   | 8.0.0-98 |
| 3.1.2				  | <font color="red">?</font>   | <font color="red">?</font> |
| 3.1.3				  | 12.1.0-38   | <font color="red">?</font> |
| 3.2.0				  | <font color="red">12.2.0-47?</font>   | <font color="red">?</font> |

<br />
<font color="red">
Please fill in the blanks above.
</font>

Sometimes it is necessary to patch one or more deployed engines between Integration Manager releases.

## Patching the DataConnect Engine

### Windows Patch
1. Request Windows standalone engine patch from Actian Support or Actian ESD, e.g. `di-standalone-engine-12.1.0-24-win64.zip`.
2. Extract the standalone engine folder from the .zip file, e.g. `di-standalone-engine-12.1.0-24`.
3. Cut and paste the engine folder to `C:\Program Files\Actian\IntegrationManager\di-standalone-engine-12.1.0-24`.
4. Open `C:\ProgramData\Actian\IntegrationManager\conf\application.properties`.
5. Update the DataConnect-specific entries. (Make sure you are not creating duplicate properties.)
    ```
    dataconnectVersion=12.1.0-24
    worker.engineJavaHome=${installPath}/di-standalone-engine-${dataconnectVersion}/jre
    engine.localEngineInstallPath=${installPath}/di-standalone-engine-${dataconnectVersion}/runtime/di9
    ```
### Linux Patch
1. Request Linux standalone engine patch from Actian Support or Actian ESD, e.g. `di-standalone-engine-12.1.0-24-linux64.tar.gz`.
2. Extract the standalone engine .tar file from the .gz file, e.g. `di-standalone-engine-12.1.0-24.tar`.
3. Extract the standalone engine folder from the .tar file, e.g. `di-standalone-engine-12.1.0-24`.
4. Move the engine folder to `/opt/actian/integration-manager/di-standalone-engine-12.1.0-24`.
5. Open `/etc/opt/actian/integration-manager/conf/application.properties`.
6. Update the DataConnect-specific entries. (Make sure you are not creating duplicate properties.)
    ```
    dataconnectVersion=12.1.0-24
    worker.engineJavaHome=${installPath}/di-standalone-engine-${dataconnectVersion}/jre
    engine.localEngineInstallPath=${installPath}/di-standalone-engine-${dataconnectVersion}/runtime/di9
    ```
## Patching the DataFlow Engine

### Windows Patch
1. Request the DataFlow engine patch from Actian Support or Actian ESD, e.g. `actian-dataflow-8.0.1-122.zip`.
2. Extract the DataFlow engine folder from the .zip file, e.g. `actian-dataflow-8.0.1-122`.
3. Cut and paste the engine folder to `C:\Program Files\Actian\IntegrationManager\actian-dataflow-8.0.1-122`.
4. Open `C:\ProgramData\Actian\IntegrationManager\conf\application.properties`.
5. Update the DataFlow-specific entries. (Make sure you are not creating duplicate properties.)
    ```
    dataflowVersion=8.0.1-122
    dataflow.localEngineInstallPath=${installPath}/actian-dataflow-${dataflowVersion}/bin
    ```

### Linux Patch
1. Request the DataFlow engine patch from Actian Support or Actian ESD, e.g. `actian-dataflow-8.0.1-122.zip`.
2. Extract the DataFlow engine folder from the .zip file, e.g. `actian-dataflow-8.0.1-122`.
3. Move the engine folder to `/opt/actian/integration-manager/actian-dataflow-8.0.1-122`.
4. Open `/etc/opt/actian/integration-manager/conf/application.properties`.
5. Update the DataFlow-specific entries. (Make sure you are not creating duplicate properties.)
    ```
    dataflowVersion=8.0.1-122
    dataflow.localEngineInstallPath=${installPath}/actian-dataflow-${dataflowVersion}/bin
    ```