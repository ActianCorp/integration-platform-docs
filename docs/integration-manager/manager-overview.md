---
title: Integration Manager Overview
tags:
 - Content Issues
---

# Integration Manager Overview

Integration Manager brings together the flexible APIs and scalable workloads from Actian DataCloud, the rapid integration capabilities of Actian DataConnect, and the raw power of Actian DataFlow into a single platform.

## Key Features of Integration Manager

* Run and manage DataConnect and DataFlow jobs from the same platform
* Hierarchical configuration allows you to share artifacts, macros, and files across users with less duplication
* Expose any Job Configuration as an API
* Create Jobs programmatically and execute on the fly
* Execute and monitor Jobs in real time
* Event-driven Job execution (File events, HTTP/S, Salesforce.com OBM)
* Job failure notifications
* Scale and partition workloads across engine pools and remote agents
* All functionality is delivered through APIs &mdash; anything you can do through the UI, you can also do programmatically
* Fully REST-enabled to automate the entire devops lifecycle of your integrations

## Architecture

Integration Manager can deploy anywhere to meet your enterprise requirements and is designed to easily scale to your workload requirements.

![Integration Manager Public Architecture](/img/Integration-Manager-Public-Architecture.png)

## Terminology

<font color="red">
Please review and expand/edit these definitions as appropriate.
</font>

This section describes the terminology used in the Integration Manager so you can better understand the core concepts and relationships between integrations, configurations, jobs, macros, and templates.

### Integration

Data integrations enable the transformation and migration of data by visually mapping fields between a defined source and target. When you build and test an integration, it resides in the Design environment. The Design environment provides for the creation and management of data integration designs. For details on designing integrations, see <a href="https://docs.actian.com/actiandataplatform/index.html#page/Integrations/Design.htm#ww708298" className="externalLink" target="_blank">Overview of the Design Environment</a>.

### Configuration

A configuration is a set of properties and parameters that specify when, where, and how an integration will be executed. Configurations contain references to a specific integration, the location in which the integration will be executed, and the frequency at which executions will occur.

### Job

Jobs are reports about the run results of the configurations you execute, and include details including whether the run was successful, the run duration, and log file data. Jobs are not editable. See [Run Your First Job](./configurations/run-your-first-job) and [Viewing Job Run History](./jobs/viewing-job-run-history).

:::note
The Integrations console utilizes a RESTful interface. You can use the REST API for Integration Manager to change configuration options and automate the execution of your configurations. See [Job Execution APIs](./APIs/api-overview.md).
:::

### Macro

Macros enable you to run a single integration for different types of users without having to modify the integration itself. Macros are defined when the integration is in the configuration state. Macros can save you time and reduce errors at runtime. See [Macros Overview](./macros/macros-overview).

### Template

Templates contain integration settings that are reusable by linked configurations. Templates include a package, macros, and a location to execute the job. See [Creating Templates](./templates/creating-templates).