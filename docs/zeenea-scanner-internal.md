---
title: Zeenea Scanner Setup
---
# Zeenea Scanner Setup

<font color="red">The content in this topic is a combination of other topics that already exist in ZenDesk. <br />https://support.zeenea.com/hc/en-001/articles/21059970696721-Zeenea-Scanners-prerequisite-and-setup<br />https://support.zeenea.com/hc/en-001/articles/21261600809105-Manage-API-Keys.<br />
I am assuming that this topic will live here temporarily to help internal users get up and running quickly, but we wouldn't make changes to the existing Scanner setup docs in ZenDesk.</font>

## Prerequisites

* The current Scanner version requires Java 11. Either OpenJDK or Oracle JDK can be installed.

## Step 1: Install Zeenea Scanner

1. Open Zeenea Studio. For testing purposes, you can use https://actian-dev.preprod.zeenea.app/.
2. Click the apps icon in the upper right and select **Administration**:

     ![](/img/zeenea-administration.png)

3. Click **Download Scanner**:
   
      ![](/img/zeenea-scanner-download.png)

4. Extract the tar file to the desired location. This is the `[scanner_install_dir]` referenced below. 

## Step 2: Create an API Key

1. Go to the [API Keys](https://actian-dev.preprod.zeenea.app/admin/api-keys) page and click **New API Key**:

      ![](/img/zeenea-api-keys1.png)
2. Enter a name for the scanner, select **Scanner** under **Permission Scope**, then click **Create**:

      ![](/img/zeenea-api-keys2.png)
3. Copy the API key for later use. You will not be able to view this key again after closing the page.

## Step 3: Create the Configuration File

1. Open `[scanner_install_dir]/conf`.
2. Rename `application.conf.template` to `application.conf`.
3. Specify your Zeenea platform URL and API key in `application.conf`: 
   
    ```
    zeenea-url = "Your Zeenea platform URL here"
    authentication = {"Paste api-key.secret here"}
    ```

## Step 4: Start the Scanner

1.  CD to `[scanner_install_dir]`.
2.  Start the Scanner. (Windows: `.\bin\zeenea-scanner.bat`, Linux: `bin/zeenea-scanner`)
     
     :::note
     This script must be run from the root directory of the Scanner. It will not work if you cd to the bin folder and run it there.
     :::

## Step 5: Check the Scanner Status

1. In Zeenea Administration, click **Scanners** and verify that your scanner is running:

      ![](/img/zeenea-scanners.png)
2. If you encounter any issues, review the `scanner.log` file located in the `[scanner_install_dir]/logs` folder for troubleshooting guidance. Also refer to [Troubleshooting for scanners and connections](https://support.zeenea.com/hc/en-001/articles/21059830419345-Troubleshooting-for-scanners-and-connections).


 