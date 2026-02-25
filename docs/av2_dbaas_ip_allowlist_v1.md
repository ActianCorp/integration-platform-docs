---
title: Managing IP Allow Lists (Test 1)
---

# Managing IP Allow Lists (Test 1)

Testing AI conversion of video to docs using Docsie.


## What You'll Learn

- How to control database access by adding and removing IP addresses from the allow list
- How to organize and manage IP addresses using labels and CIDR ranges
- How to quickly add Avalanche Integration IPs for system-to-system connections
- How to modify and sort existing IP addresses in your allow list
- Best practices for securing your database connections

## Introduction

Database security begins with controlling who can connect to your data. The IP Allow List in Avalanche Cloud Data Platform acts as a gatekeeper, ensuring only connections from approved IP addresses can reach your database. Even with valid user credentials, a connection will be denied if it originates from an IP address not on your allow list.

This tutorial walks you through managing your database's IP Allow List, from adding single IP addresses to configuring CIDR ranges and integration IPs. By the end, you'll be able to confidently control network-level access to your Avalanche database.

## Prerequisites

Before starting this tutorial, ensure you have:

- Access to the Avalanche Cloud Data Platform console
- Permissions to manage database instances
- The IP addresses or CIDR ranges you want to allow (if adding custom entries)
- Basic understanding of IP addresses and CIDR notation (optional but helpful)

## Key Concepts

**IP Allow List**: A security feature that specifies which IP addresses are permitted to connect to your database. Connections from unlisted IPs are automatically rejected, regardless of credentials.

**CIDR Notation**: A compact way to specify IP address ranges using the format `XXX.XXX.XXX.XXX/##`. For example, `24.57.154.0/24` represents 256 addresses (24.57.154.0 through 24.57.154.255). Avalanche accepts CIDR blocks from `/24` to `/30`. A `/32` represents a single IP address.

**Avalanche Integration IPs**: Pre-configured IP addresses used by Avalanche's internal integration services. Adding these enables system-to-system connections for data loading and other platform features.

## Managing Your IP Allow List

In this section, you'll learn how to view, add, modify, and delete IP addresses from your database's allow list.

### Step 1: Access the IP Allow List

Navigate to the Database Instances console in Avalanche Cloud Data Platform. Select the database whose IP Allow List you want to manage. Notice that you don't need to start the database to modify its allow list—security settings can be changed while the database is stopped.

![Database Instances console with ExampleDB](/img/test/1.jpg)

In the database details, locate the "IP Allow List" section. You'll see any IP addresses already configured, including the one provided during database provisioning. Use the IP Allow List toggle to switch the view between displaying IP addresses and their associated labels.

### Step 2: Add a Single IP Address

Click the plus (+) symbol next to the IP Allow List heading, then select "Add Allowed IPs."

Enter the IP address you want to allow. For example, to allow connections from a specific workstation, enter `35.227.107.172/32`. The `/32` suffix indicates this is a single IP address, not a range.

Add a descriptive label like `JohnDoe` to help you remember what this IP address represents. Labels make it easier to manage your allow list as it grows.

![Adding a new IP address with label](/img/test/2.jpg)

Click "Add" to include the new IP address in your allow list. The address is now authorized to connect to your database.

### Step 3: Add a CIDR Range

To allow connections from an entire subnet or range of addresses, use CIDR notation. In the IP Address field, enter a CIDR range like `24.57.154.0/24`. This represents all IP addresses from 24.57.154.0 through 24.57.154.255.

Enter a descriptive label such as `Office Network` or `CIDR Range` to identify this entry.

**Note:** Avalanche accepts only CIDR blocks from `/24` to `/30`. The `/31` notation is not supported, and `/32` is equivalent to entering a single IP address.

Click "Add" to include the CIDR range. All addresses within this range can now connect to your database.

### Step 4: Modify an Existing Label

As your team or infrastructure changes, you may need to update labels for clarity. Click directly on any label text in your allow list to edit it. For example, change `JohnDoe` to `John_Workstation` for more specificity.

This is helpful when IP addresses are reassigned or when you want to maintain more detailed records of what each entry represents.

### Step 5: Sort Your IP Addresses

When your allow list grows, sorting helps you find entries quickly. Click on the "IP Address" or "Label" column heading to sort the list. Click once for ascending order, click again for descending order.

![Sorting the IP Allow List](/img/test/3.jpg)

Sorting by IP address groups entries numerically, while sorting by label groups them alphabetically. Use whichever view makes the most sense for your management workflow.

### Step 6: Delete a Single IP Address

When an IP address should no longer have access, hover your mouse over the entry you want to remove. A delete (trash can) icon appears next to the IP address.

![Delete icon for removing an IP address](/img/test/4.jpg)

Click the delete icon to remove that IP address from your allow list. This immediately revokes connection access from that address.

### Step 7: Delete Multiple IP Addresses

To remove several addresses at once, select the checkbox next to each IP address you want to delete. After selecting all target entries, use the drop-down menu and choose "Delete IP Addresses." Confirm the deletion when prompted.

Bulk deletion is useful when decommissioning old infrastructure or cleaning up unused entries.

## Checkpoint

At this point, you should be able to:
- View your current IP Allow List
- Add single IP addresses and CIDR ranges
- Edit labels for better organization
- Sort entries for easier management
- Delete individual or multiple IP addresses

You've now mastered the core IP Allow List management tasks. Next, you'll learn about a specialized feature for platform integrations.

## Adding Avalanche Integration IPs

Avalanche Cloud Data Platform provides built-in integrations for data loading and other platform services. These integrations connect from specific IP addresses that Avalanche maintains. Rather than manually entering each integration IP, you can add them all at once using a convenient shortcut.

### Step 1: Access the Integrations Menu

From your selected database (for example, "ExampleDB"), click the Integrations menu at the top of the screen. You'll see options like "Create Integration," "Load Files," "Existing Configurations," and others.

Notice the notification at the bottom: "Please note that the Avalanche Integration IP's can be added at database creation time." While you can add them during provisioning, this tutorial shows you how to add them to an existing database.

![Integrations menu with notification](/img/test/5.jpg)

### Step 2: Locate the IP Allow List Section

On the right side of the database details page, find the IP Allow List section. Click the "Add Allowed IPs" button to open the entry dialog.

### Step 3: Select Avalanche Integration IPs

In the IP Address field, you'll see a drop-down menu next to "IP or CIDR address." Click this drop-down and select "Avalanche Integration IPs" from the list.

![Selecting Avalanche Integration IPs from drop-down](/img/test/6.jpg)

This is important because it tells Avalanche to automatically populate all the IP addresses used by platform integrations. You don't need to know or track these addresses individually.

### Step 4: Add Optional Label and Confirm

Optionally, enter a label like "Avalanche Integration IPs" to identify these entries in your allow list. This helps distinguish integration IPs from your custom entries.

![Avalanche Integration IPs ready to add](/img/test/7.jpg)

Click the "Add" button. Avalanche automatically adds all necessary integration IP addresses to your allow list.

### Step 5: Verify the Integration IPs

Review your IP Allow List to confirm the Avalanche Integration IPs were added. You'll see multiple entries, each labeled "Avalanche Integration IPs," such as:

- 3.222.1.52/32 – Avalanche Integration IPs
- 3.220.1.81/32 – Avalanche Integration IPs
- 3.222.57.220/32 – Avalanche Integration IPs
- 52.149.201.156/32 – Avalanche Integration IPs
- 52.224.29.160/30 – Avalanche Integration IPs
- 35.227.107.174/32 – Avalanche Integration IPs

![IP Allow List with integration IPs added](/img/test/8.jpg)

Your database can now accept connections from Avalanche's integration services. This enables features like automated data loading and platform-managed processes.

## Summary

You've learned how to secure your Avalanche Cloud Data Platform database by managing its IP Allow List. You can now add individual IP addresses or CIDR ranges, organize entries with labels, sort and search your allow list, and remove access when needed. You've also learned how to quickly enable Avalanche Integration IPs for platform features.

Remember that the IP Allow List works in conjunction with user credentials—both must be valid for a connection to succeed. This layered security approach ensures your data remains protected while giving you flexible control over network access.

## Next Steps

Now that you've mastered IP Allow List management, consider these next topics:

- **User Management**: Learn how to create and manage database user accounts and their permissions
- **Database Security Best Practices**: Explore additional security features like encryption and audit logging
- **Integration Configuration**: Set up your first data integration now that integration IPs are allowed
- **Monitoring Connections**: Learn how to view active connections and identify which IPs are currently accessing your database

## FAQ

**Do I need to restart my database after modifying the IP Allow List?**  
No. Changes to the IP Allow List take effect immediately, even when the database is stopped. New connections will be evaluated against the updated list right away.

**What happens if I delete all IP addresses from the allow list?**  
If the allow list is empty, no external connections can reach your database, regardless of credentials. Always ensure at least one IP address or range is configured for administrative access.

**Can I use wildcards in IP addresses?**  
No. Avalanche doesn't support wildcards in IP addresses. Use CIDR notation instead to specify ranges. For example, use `192.168.1.0/24` rather than `192.168.1.*`.

**How do I find my current IP address to add to the allow list?**  
The method depends on your network setup. For a quick check, search "what is my IP address" in a web browser. Note that this shows your public IP, which may differ from your local network IP.

**Will Avalanche automatically update the Integration IPs if they change?**  
Once added, Integration IPs remain static in your allow list. If Avalanche updates its integration infrastructure, you may need to re-add Integration IPs to get the latest addresses. Check the platform documentation or notifications for any such updates.