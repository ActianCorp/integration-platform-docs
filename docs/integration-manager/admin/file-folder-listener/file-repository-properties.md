---
title: File Repository Properties
hide_table_of_contents: true
---

# File Repository Properties

| Property| <div style={{width: 220}}>Description</div>| Default |
| --- | --- | --- |
| `repository.storage-type` | <ul><li>`local` – Local File System</li><li>`aws` – Amazon S3</li><li>`azure` – Azure Blob Storage</li><li>`gcp` - Google Cloud Storage</li></ul> | `local` |
| `repository.source-bucket` | Base path for job input collateral (artifacts, additional files) | `${sharedDataPath}` |
| `repository.source-prefix` | Job artifact storage location (source-bucket + source-prefix) | `repository` |
| `repository.local-temp-dir` | Temporary file storage location (source-bucket + local-temp-dir) | `tmp` |
| `repository.target-bucket` | Base path for job output collateral (log files, job data files) | `${sharedDataPath}` |
| `repository.target-prefix` | Job output storage location, including log files (target-bucket + target-prefix) | `history/job` |

