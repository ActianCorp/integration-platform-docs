---
title: Configuration Files
hide_table_of_contents: true
---
# Configuration Files

Most Agent properties are set automatically and do not require maintenance or modification. In some cases, the default settings must be changed for various environment-specific reasons or corporate protocols. This section is a reference for making such changes, if required.

## Main Application Configuration

These properties are found in: `shared\_data\_path\conf\application.properties`

| Property | Description  | Default |
| :--- | :--- | :--- |
| `sharedDataPath` | Populated during installation. Do not modify.   | Determined at Installation |
| `installPath` | Populated during installation. Do not modify.   | Determined at Installation  |
| `logging.level.com.actian.datacloud` | This property can be added to enhance Agent-specific logging for debug purposes, for example, set to `DEBUG`. | `INFO` |
| `agent.auth-server` | Actian ID Service URL. Set for DataCloud and Avalanche production environments. Note: You must update this property for Private Cloud/Kubernetes hosted environments. | `https://api.aop.aws.actiandatacloud.com` |
| `agent.control-server` | Integration Manager API URL. Set for DataCloud and Avalanche production environments. Note: You must update this property for Private Cloud/Kubernetes hosted environments.  | `https://api.im.actiandatacloud.com/v2`|
| `agent.identity-provider`   | Populated automatically. Do not modify. | — |
| `agent.refresh-token` | Populated automatically. Do not modify. | — |
| `worker.api.port`| Populated during installation. Port used for Agent to Worker communication. If changed, you must also change server.port in shared\_data\_path\conf\worker-application.properties to match. | `6000` |
| `worker.concurrency`  | Number of DataConnect engines allowed to run in parallel. Make sure the appropriate licensing is in place before changing this value to avoid compliance issues. | `1` |
| `worker.destinationId`| Populated automatically. Do not modify. | — |
| `worker.embedded`| Populated automatically. Do not modify.| `false` |
| `worker.engineJavaHome`| Populated during installation. Controls the JVM used when launching DataConnect. JDK 11 or higher is required. | `${sharedDataPath}/di- standalone-engine/jre`|
| worker.libraryPath   | Populated during installation. Do not modify.   | `${installPath}/lib`|
| `worker.workerLocalDir`| Populated during installation. Controls where temporary job information is stored, for example, integration artifacts, logfiles.| `${sharedDataPath}/local` |
| `engine.licensePath`  | Populated automatically. Do not modify.| `${sharedDataPath}/license/cosmos.slc` |
| `engine.iniFilePath`  | Populated automatically. Do not modify.| `${sharedDataPath}/conf/cosmos.ini`|
| `engine.localEngineInstallPath` | Populated during installation. Controls the location of the DataConnect Engine.| `${sharedDataPath}/di- standalone-engine/runtime/di9` |
| `engine.localEngineListenerPort`| Populated during installation. Port used for Worker-to-DataConnect Engine communication.| `5999` |

These properties are found in: `shared\_data\_path\conf\worker-application.properties`:

| Property| Description| Default |
| :---- | :--- | :---- |
| `server.port` | Populated during installation. Port used for Agent-to-Worker communication.If changed, you must also change `worker.api.port` in `shared\_data\_path\conf\application.properties` to match. | `6000`|

These properties are found in: `shared\_data\_path\conf\worker-control.properties`:

| Property  | Description   | Default Value|
| :--- | :--- | :--- |
| `sharedDataPath` | Populated during installation. Do not modify.| Determined at Installation |
| `server.port`  | Populated during installation. Port used for Agent application container. | `6001` |
