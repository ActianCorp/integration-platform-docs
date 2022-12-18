---
layout: default
title: Troubleshooting
nav_order: 9999
has_children: false
---
# Agent Troubleshooting

## Agent Fails to Start

This often due to a configuration error. Try [Manual Agent Registration](advanced-topics/manual-agent-registration).

## Registration Fails

9 times out of 10, this is due to one of the following:
* Incorrect credentials. Note there are multiple authentication methods allowed. The most straightforward approach is by enabling and using Platform API Password.
* Insufficient privileges. Your account admin has not given you the required authorization to register.
* Missing or expired licensing/entitlement. Please contact Actian support to resolve.
* You already have a registered Agent for this User.
* You already have a registered Agent for this machine/hostname.
* You are registering from an internal docker image without a canonical hostname.

If you have ruled out the above, try [Manual Agent Registration](advanced-topics/manual-agent-registration).

## Application Failed to Start

```
***************************
APPLICATION FAILED TO START
***************************

Description:

Web server failed to start. Port XXXX was already in use.

Action:

Identify and stop the process that's listening on port XXXX or configure this application to listen on another port.
```

This typically means there is already an instance of the service running (or perhaps another service installed on the same port). There are a few options to resolve this error:
* Locate and stop or kill the running service or process. We recommend using ProcessExplorer.
* Modify the port being used to remove the conflict. This is done by adding/changing the server.port value in:
    * Agent: (programData)IntegrationAgent/conf/application.properties
	* Worker: (programData)IntegrationAgent/conf/worker-application.properties

## Engine version not recognized 

Engine version not recognized [NoSuchFileException] (processAgentLicensing) (register)

This usually means you have one or more incorrect engine settings in your appication.properties file. Common engine-versioned properties to review are:
```
dataconnectVersion
worker.engineJavaHome
engine.localEngineInstallPath
```

This could also occur if you have manually overriden values in the cosmos.ini file.