---
title: Troubleshooting
---

# Troubleshooting

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
    * Integration Manager: `<ProgramDataDirectory>\Actian\IntegrationManager\conf\application.properties`
	* Worker: `<ProgramDataDirectory>\Actian\Worker\conf\worker-application.properties`

## Jobs are Queuing

Job queuing is normal workload management behavior, depending on the Worker and Engine resources you have provisioned and/or are licensed for. 
* If jobs are queued without any marked as "Running", then it is likely that at least one Worker is not running.
* If jobs are queuing beyond your required SLA, then your provisioned Worker resources are insufficient. Note that this may be due to licensing restrictions such as the number of Engines you are licensed for. See [Workload Management](./workload-management).
