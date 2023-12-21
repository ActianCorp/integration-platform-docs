---
title: Windows Service Wrapper
hide_table_of_contents: true
tags:
 - Content Issues
---
# Windows Service Wrapper (Windows Installations Only)

**<font color="red">NOTE: This topic does not exist in the "unofficial" GitHub Pages site. I pulled this from the current docs.actian.com content. Does this belong here?</font>**

The following properties are found in: `shared_data_path\conf\AgentWrapper.conf`.

:::danger[Caution!]
This file contains many properties. Any that are not listed here, DO NOT MODIFY!
:::

## Main Application Configuration

These properties are found in: `shared\_data\_path\conf\application.properties`

| <div style={{width: 280}}>Property</div> | Description  | Default |
| :--- | :--- | :--- |
| `set.PATH` | Populated during installation. You may add additional environment variables here if required, but you must keep the existing values intact. | `%shared_data_path/jre/bin;% shared_data_path/di-standalone-engine/runtime/di9/;%PATH%` |
| `wrapper.java. command. loglevel` | Wrapper application-specific logging level. | `INFO`  |
| `wrapper.logfile` | Populated during installation. Controls the location of the Agent log file. Changing this value will disable the ability to retrieve the log from Integration Manager. | `%shared_data_path/logs/Agent.log` |
| `wrapper. logfile.loglevel` | Controls GLOBAL Agent logging level.<br />**Note:**  We recommend that you do not modify this property. It is better to use logging.level.com.actian.datacloud in application.properties instead. | `INFO` |
| `wrapper. logfile.maxsize` | Maximum size that the Agent log file is allowed to reach before the log is rolled. <font color="red">What unit?</font> | 2m |
| `wrapper. logfile.maxfiles` | Maximum number of rolled log files allowed before old files are deleted. | `5` |
| `wrapper. syslog.loglevel` | Forward log events to Windows Sys/Event Log.<br />**Note:**  We recommend that you do not modify this property. | `NONE` |
