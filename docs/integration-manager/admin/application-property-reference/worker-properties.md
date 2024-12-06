---
title: Worker Properties
hide_table_of_contents: true
---

# Worker Properties

Refer to the following table for available Worker properties:

| Property| Description| Default |
| --- | --- | --- |
| `worker.concurrency` | Number of concurrent jobs this worker is allowed to process |  |
| `worker.destinationId` | The destination Id (job queue) this worker pulls jobs from |  |
| `worker.embedded` | Allows Integration Manager to spin up an embedded worker without external queueing. Not appropriate for production or network systems. | `true` |
| `worker.engineJavaHome` | The Java Runtime Environment used by this worker to create engines | `{sharedDataPath}/di-standalone-engine/jre` |
| `worker.workerLocalDir` | Temporary workspace used by the worker to process job artifacts and results | `{sharedDataPath}/local` |
| `worker.libraryPath` | **Note:** Set during installation. Do not edit. | `{installPath}/lib` |
| `worker.api.port` | Port used to communicate with the worker remotely | `6000` or `7000`, depending on installation type |
