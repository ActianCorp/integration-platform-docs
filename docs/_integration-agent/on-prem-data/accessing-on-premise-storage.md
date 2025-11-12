---
title: Accessing On-Premise Storage
---

# Accessing On-Premise Storage

A common scenario for using DataCloud Agent to execute an integration is when you need to read or write a file stored either locally or on a network.

:::tip
When configuring a network file location, use a Macro value referencing the full network path (e.g., \\\\_servername_\\_folder_\\_filename_.csv).
:::

On Windows, the Agent runs using the Windows Local System account by default. This may or may not be sufficient, depending on your business' security protocols. Similar Local System limitations exist for other Windows Authorized Services, such as Microsoft SQL Server.

If the integration is unable to find, access, or connect to a file or data that you can see, you likely need to re-configure the service to log on as a domain user with the appropriate access. Each time the Agent starts, it will log on as that user.

1. Open **Windows Administrative Tools** → **Services**.
2. Locate and right-click **Actian Integration Agent** and select **Properties**.
3. Select the **Log On** tab.
4. Select the option for "This account:".
5. Enter the Domain User credentials that have appropriate access to the local storage or database.
6. Click **OK**.
7. Right-click **Actian Integration Agent** and select **Restart**.

