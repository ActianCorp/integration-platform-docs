---
title: Job Status Codes
---

# Job Status Codes

| Status | Description
| --- | --- |
| **WAITING** | Job has been created but needs additional information or a trigger event prior to being queued for execution.
| **SEQUENCED** | Job has been sequenced for execution and will be queued in order relative to other jobs for this jobconfig.
| **QUEUED** | Job has been queued for execution by the next available worker.
| **CANCELLED** | Job was cancelled prior to being acquired by a worker (during the WAITING or QUEUED state). No log file will be produced.
| **INITIALIZING** | Job has been acquired by a worker and is being prepared for execution.                                                                                                           
| **RUNNING** | Job is currently executing on a worker.
| **FINISHED** | Job has successfully completed. A log file is available (or soon will be).                                                                                                       
| **ERROR** | Job encountered an exception during execution. Depending on configuration and artifact design, the job may or may not have completed. A log file is available (or soon will be).
| **FAILED** | Job failed or was manually stopped by user command or exception at some point during initialization or execution. A log file may or may not be available.
