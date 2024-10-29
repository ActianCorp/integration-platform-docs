---
title: Managing Job Execution History
---

# Managing Job Execution History

You can control the amount of job history that Integration Manager maintains by date, volume, or both, depending on your needs.

:::note
Automatic job history management works only if you are storing history in a “local” repository, meaning a local file system. For other repository types, you can manage job history using their native lifecycle management policies.
* AWS S3 – https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
* Azure Blob – https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview
* Google Cloud – https://cloud.google.com/storage/docs/managing-lifecycles
:::

To configure Integration Manager job history properties:

1. Add the following entries to your `application.properties` file, replacing `<max-days>` with the maximum number of days of history to store, and replacing `<max-jobs>` with the maximum number of records to store:

    ```
   repository.storage-type=local
   job.history.max-job-age=<max-days>
   job.history.max-job-count=<max-jobs>
    ```

   For example, you could set the job history cutoff at 90 days and a maximum of 150,000 records. In this scenario, Integration Manager will remove the greater number of records exceeding either threshold:

      ```
      repository.storage-type=local
      job.history.max-job-age=90
      job.history.max-job-count=150000
      ```
2. Optionally, you can control how often your job history is evaluated. The default is once per day. 
   :::note[CAUTION]
   We strongly recommend evaluating no more often than once per day in production systems. For test and non-production systems, you may specify an interval of no less than 5 minutes (300000ms).
   :::
   To modify this interval, add the following optional property, replacing `<interval>` with the desired interval, in milliseconds:
   
   `job.history.clean-interval=<interval>`

   For example, to evaluate job history every hour:

   `job.history.clean-interval=3600000`

3. After making changes to your `application.properties` file, restart the Integration Manager service.
