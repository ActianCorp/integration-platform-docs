---
title: JobConfig/JobTemplate Export/Import API
---
# JobConfig/JobTemplate Export/Import API

This service allows an API consumer to export packages and configurations from an on-prem installation of Integration Manager and import them to the cloud, enabling you to easily migrate between deployments.

Refer to the Open API Spec for the following endpoints:

* [Export a JobConfig](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config/exportJobConfig): create/download a zip file containing JobConfig metadata, package, attached files, and macros (no encrypted values).
* [Import a JobConfig](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Config/importJobConfig): upload an export zip file and extract it into a JobConfig clone in the new environment (with new record ids).
* [Export a JobTemplate](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Template/exportJobTemplate): create/download a zip file containing JobTemplate metadata, package, attached files, and macros (no encrypted values). You can optionally include child JobConfig exports.
* [Import a JobTemplate](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Configuration#/Job%20Template/importJobTemplate): upload and extract a JobTemplate zip file and recursively process any JobConfig children.