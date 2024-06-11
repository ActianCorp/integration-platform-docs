---
title: DataCloud File Loader API
---
# DataCloud File Loader API

## Overview

This service allows an API consumer to stage and load a file directly into a target table.

* Allows files up to 1GB
* Autodetects field and record separators (can be overridden)
* Autodetects most primitive data types
* A single date format can be applied to coerce date fields
* Autodetects common compression formats (zip, tar, gzip, tar.gz, 7z)
* Staged files can be reloaded without uploading a second time, if the initial load fails
* Staged files are accessible for up to 7 days (archived for up to 30)

## Step 1: Set an API Password

If you have not already done so, you must set a password to enable API access.

1. In Integration Manager or Actian Data Platform, click the profile dropdown in the upper right corner and select **Profile**:

   ![](/img/profile-dropdown.png)
2. In the **Password** field, enter a password manually or select **Auto-Generate Password**:

   ![](/img/Password.png)
3. Note your username and password for use in Step 4 below.
4. Click **Update User**.

## Step 2: Locate Your Warehouse Details

1. Login to Actian Data Platform at https://avalanche.actiandatacloud.com.
2. Select the **Warehouses** tab.
3. Start the desired warehouse if it is not already started:

   ![](/img/Warehouse-Start.png)
4. Select the warehouse:

   ![](/img/Warehouse-Select.png)
5. Note the values of the  **Storage**, **Region**, and **Warehouse ID** for the warehouse:

   ![](/img/Warehouse-Details.png)

## Step 3: Access the File Loader API Doc

Go to the file loader API page for your warehouse region:

    | Cloud | Region | Functional File Loader API Page |
    | :--- | :--- |:--- |
    | AWS | US - Ohio | https://fileloader.us-east-2.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | US - Oregon | https://fileloader.us-west-2.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | EU - Frankfurt | https://fileloader.eu-central-1.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | EU - Ireland | https://fileloader.eu-west-1.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | EU - London | https://fileloader.eu-west-2.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | AP - Mumbai | https://fileloader.ap-south-1.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | AWS | SA - Sao Paulo | https://fileloader.sa-east-1.aws.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | US - Washington | https://fileloader.westus2.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | US - Virginia | https://fileloader.eastus2.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | EU - Ireland | https://fileloader.northeurope.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | UK - London | https://fileloader.uksouth.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | AP - Pune | https://fileloader.centralindia.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | Azure | EU - Germany | https://fileloader.germanywestcentral.azure.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | GCP | US - South Carolina | https://fileloader-av-gc-prod-2.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | GCP | UK - London | https://fileloader-avprddp-190.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |
    | GCP | EU - Belgium | https://fileloader-avprddp-200.avprod.actiandatacloud.com/apidocs/swagger-ui/index.html#/ |

## Step 4: Authorize Your Browser

:::note[Notes]
* Tokens are good for up to 10 hrs.
* You will need to authorize different regions separately.
:::

1. Click **Authorize**:

   ![](/img/Authorize-Button.png)
2. In the **Available authorizations** dialog, do the following:
   1. Enter your username and password from Step 1 above.
   2. If your file has a header row, select **Authorization header** in the **Client credentials location** dropdown. Otherwise, select **Request body**.
   3. Click **Authorize**:

       ![](/img/Authorize-Dialog.png)

## Step 5: Autoload

1. In the **warehouse** field, enter your warehouse ID from Step 2.  
2. If your file has a header row, select **true** in the **header** dropdown.
3. The remaining fields are optional. You can ignore these unless you have more advanced needs, such as specific date formats.
4. Click **Browse** and select the file to load from your computer.
5. Click **Execute**.

   ![](/img/File-Loader-API-Page.png)
6. With a successful post, a response such as the following is returned:

   ![](/img/File-Loader-API-Page-Success.png)

## Preview Your Data

To preview the table created in the autoload, do the following:

1. On the **Warehouses** page, click **Query Editor**:

     ![](/img/Query-Editor1.png)
2. Click the table name. The query editor and table schema are displayed. Click **Preview Table** to run the query:

     ![](/img/Query-Editor2.png)
3. The query results are displayed:

     ![](/img/Query-Editor3.png)
