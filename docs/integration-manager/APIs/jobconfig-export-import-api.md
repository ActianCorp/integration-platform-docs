---
title: JobConfig/JobTemplate Export/Import API
---
# JobConfig/JobTemplate Export/Import API

This service allows an API consumer to export packages and configurations from an on-prem installation of Integration Manager and import them to the cloud, enabling you to easily migrate between deployments.

:::caution
Exported macros cannot contain encrypted values.
:::

Refer to the Open API Spec for the following endpoints:

* [Export a JobConfig](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config/exportJobConfig): Create/download a zip file containing JobConfig metadata, package, attached files, and macros.
* [Import a JobConfig](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config/importJobConfig): Upload an export zip file and extract it into a JobConfig clone in the new environment (with new record ids).
* [Export a JobTemplate](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Template/exportJobTemplate): Create/download a zip file containing JobTemplate metadata, package, attached files, and macros. You can optionally include child JobConfig exports.
* [Import a JobTemplate](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Template/importJobTemplate): Upload and extract a JobTemplate zip file and recursively process any JobConfig children.