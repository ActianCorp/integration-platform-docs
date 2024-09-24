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

## Checksum Issues in Liquibase

When editing a Liquibase script and running it on an existing database, you might encounter checksum issues. Changing a column definition, altering SQL statements, adjusting the author tag, etc., can cause a checksum mismatch. The following procedure can be used to fix this issue if you encounter it before Actian releases a patch.

In the following example, an attribute was removed from multiple changeset IDs in the Liquibase scripts. Running this updated script against an existing database will result in checksum mismatches, as indicated in the following log entries:

<pre>
2024-08-12T17:54:38.154+05:30  WARN 19716 --- [           main] ConfigServletWebServerApplicationContext : 
Exception encountered during context initialization - cancelling refresh attempt: 
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 
'entityManagerFactory' defined in class path resource 
[com/actian/datacloud/persistence/JpaCoreConfiguration.class]: Failed to initialize dependency 
'liquibase' of LoadTimeWeaverAware bean 'entityManagerFactory': Error creating bean with name 
'liquibase' defined in class path resource 
[org/springframework/boot/autoconfigure/liquibase/LiquibaseAutoConfiguration$LiquibaseConfiguration.class]: 
liquibase.exception.ValidationFailedException: Validation Failed:
     2 changesets check sum
          db.changelog-release-2.1.x.xml::<font className="codeHighlight">2.1.4-IP-2580-AGENT-LIC</font>::jwagner was: 
          9:21135dfd31afdbb7cf5063f60002d860 but is now: 9:16143b35e0bd74dd68efb3b904d77610
          db.changelog-release-2.1.x.xml::<font className="codeHighlight">2.1.5-ADD-USERNAME-TO-FAILED-LOGIN</font>::ghargrove was: 
          9:1e670b2ef0f746cf53e0752e55e12776 but is now: 9:9632b50f7cc76feb35352d4d7ad85260
</pre>

The above log entries indicate that two changesets have failed validation due to checksum discrepancies:

1. `db.changelog-release-2.1.x.xml::2.1.4-IP-2580-AGENT-LIC::jwagner`:

   * Previous checksum: `9:21135dfd31afdbb7cf5063f60002d860`
   * Current checksum: `9:16143b35e0bd74dd68efb3b904d77610`

2. `db.changelog-release-2.1.x.xml::2.1.5-ADD-USERNAME-TO-FAILED-LOGIN::ghargrove`:

   * Previous checksum: `9:1e670b2ef0f746cf53e0752e55e12776`
   * Current checksum: `9:9632b50f7cc76feb35352d4d7ad85260`

:::note
`db.changelog-release-2.1.x.xml::2.1.4-IP-2580-AGENT-LIC::jwagner` means the issue is with the `db.changelog-release-2.1.x.xml` file, specifically the changeset with ID  <font className="codeHighlight">`2.1.4-IP-2580-AGENT-LIC`</font> authored by `jwagner`.
:::

To address checksum issues in the `DATABASECHANGELOG` table, you can reset the `MD5SUM` column for the conflicting changeset IDs using a SQL statement similar to the following, replacing the changeset IDs with your own:

```
UPDATE PUBLIC.DATABASECHANGELOG
SET MD5SUM = NULL
WHERE ID IN ('2.1.4-IP-2580-AGENT-LIC', '2.1.5-ADD-USERNAME-TO-FAILED-LOGIN');
```