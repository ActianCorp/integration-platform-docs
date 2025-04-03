---
title: Integration Engines
---

Integration Manager has the capability to leverage different Actian Integration Engines to execute jobs, depending on the use case. Generally, Integration Manager will install the latest GA patch of any supported Integration Engine as of the release date. It is recommended that you first update to the latest Integration Manager version before manually patching an Integration Engine.

## Integration Engines by Version

| Integration Manager | DataConnect | DataFlow |
| :------------------ | :---------- | :------- |
| 3.1.0               | 12.1.0-22   | 8.0.0-98 |
| 3.1.1				  | 12.1.0-24   | 8.0.0-98 |
| 3.1.2				  | 12.1.0-24   | 8.0.0-98 |
| 3.1.3				  | 12.1.0-38   | 8.0.0-98 |
| 3.2.0				  | 12.2.0-42   | 8.0.0-98 |
| 3.3.0				  | 12.3.0-43   | 8.1.0-148 |

Sometimes it is necessary to patch one or more deployed engines between Integration Manager releases.

## Patching the DataConnect Engine

### Windows Patch
1. Request Windows standalone engine patch from Actian Support or Actian ESD, e.g. `di-standalone-engine-12.3.0-45-win64.zip`.
2. Extract the standalone engine folder from the .zip file, e.g. `di-standalone-engine-12.3.0-45`.
3. Copy the standalone engine location, e.g. `C:\Users\User-Name\Downloads\di-standalone-engine-12.3.0-45`. 
4. Open `C:\ProgramData\Actian\IntegrationManager\conf\IntegrationManagerWrapper.conf`.
5. Update the DI_HOME and DI_VERSION entries. (Make sure you are not creating duplicate properties.)
    ```
    set.DI_HOME=C:/Users/User-Name/Downloads/di-standalone-engine-12.3.0-45
    set.DI_VERSION=12.3.0-45
    ```
### Linux Patch
1. Request Linux standalone engine patch from Actian Support or Actian ESD, e.g. `di-standalone-engine-12.3.0-45-linux64.tar.gz`.
2. Extract the standalone engine .tar file from the .gz file, e.g. `di-standalone-engine-12.3.0-45.tar`.
3. Extract the standalone engine folder from the .tar file, e.g. `di-standalone-engine-12.3.0-45`.
4. Copy the standalone engine location, e.g. `/home/actian/Downloads/di-standalone-engine-12.3.0-45`.
5. Open `/etc/profile.d/env_actian_integration_manager.sh`.
6. Update the DI_HOME and DI_VERSION entries. (Make sure you are not creating duplicate properties.)
    ```
    export DI_HOME=/home/actian/Downloads/di-standalone-engine-12.3.0-45
    export DI_VERSION=12.3.0-45
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