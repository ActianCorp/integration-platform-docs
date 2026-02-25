---
title: Managing IP Allow Lists (Test 2)
---

# Managing IP Allow Lists (Test 2)

Testing AI conversion of video to docs using video2docs.

## Overview

This tutorial covers how to manage the **IP Allow List** for your **Avalanche Cloud Data Platform** database instance. The IP Allow List is a critical security feature that controls which IP addresses are permitted to connect to your database. Only connections from explicitly allowed IP addresses will succeed — all others are denied.

By the end of this tutorial, you will know how to:

- **Add** individual IP addresses and CIDR ranges to the allow list
- **Update** existing IP address entries
- **Sort** the IP Allow List by column headers
- **Delete** IP addresses from the allow list
- **Use the Avalanche Integration IPs** shortcut to add platform-required IPs

---

## Prerequisites

Before following this tutorial, ensure you have:

- An active **Actian Avalanche** account with appropriate permissions
- Access to the **Database Instances** section of the Avalanche Cloud Data Platform
- The IP address(es) you wish to add, in standard IPv4 or CIDR notation
- A basic understanding of IP addressing and CIDR notation (e.g., `192.168.1.0/24`)

> **Note:** CIDR blocks `/24` through `/30` are accepted. `/31` is not accepted, and `/32` is equivalent to a single IP address. Enter addresses in the format: `XXX.XXX.XXX.XXX/##`.

---

## Section 1: Introduction to the Avalanche Cloud Data Platform

The tutorial begins with the **Avalanche Cloud Data Platform** splash screen and branding introduction.

![Step 1](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0001.png)

1. When you launch the **Avalanche Cloud Data Platform** application, you will see the branded splash screen featuring the Avalanche logo — a series of layered blue chevron shapes representing the platform's identity.

![Step 4](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0004.png)

2. The splash screen transitions to display the full **Avalanche Cloud Data Platform** branding, including the product name and logo. This confirms the application has loaded successfully and is ready for use.

---

## Section 2: Understanding the Database IP Allow List

Before diving into the configuration steps, this section introduces the four key operations available for managing your database's IP Allow List.

![Step 6](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0006.png)

1. The tutorial introduces the **Database IP Allow List** topic. This section of the Avalanche Cloud Data Platform controls which IP addresses can connect to your database instance.

![Step 8](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0008.png)

2. The platform provides a visual overview of the IP Allow List management capabilities. The first available action is **"Add an IP Address"** — represented by a green **+** icon — which allows you to grant new IP addresses access to your database.

![Step 10](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0010.png)

3. The second available action is **"Update an IP Address"** — represented by a circular refresh/checkmark icon — which allows you to modify the label or details of an existing IP entry in the allow list.

4. The overview diagram expands to reveal a third action: **"Sort the IP Addresses"** — represented by an A-to-Z sort icon — which allows you to reorder the IP Allow List entries by clicking on column headers.

![Step 12](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0012.png)

5. The complete overview diagram now shows all **four key operations** available for IP Allow List management:
   - 🟢 **Add an IP Address** — Grant access to a new IP
   - 🟢 **Update an IP Address** — Modify an existing entry
   - 🟡 **Sort the IP Addresses** — Reorder the list
   - 🔵 **Delete an IP Address** — Remove an IP from the allow list

> **Note:** All four operations are accessible from the **IP Allow List** panel within your database instance's configuration page.

---

## Section 3: Navigating to the IP Allow List

This section walks you through accessing the IP Allow List configuration for your database instance.

![Step 14](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0014.png)

1. From the main application, click the **Database Instances** tab in the top navigation bar. The page will display your database instances along with an overview of the four IP Allow List management actions available.

![Step 19](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0019.png)

2. On the **All Databases** page, locate your database instance — in this example, **ExampleDB** — hosted on **Google Cloud** in the **Google US – South Carolina** region. Note that the database status shows **"Stopped"**. Click on the database name to open its detail page.

3. The **Database Details** page opens, showing the full configuration for **ExampleDB**. In the upper-right area of the details panel, you will see the current **Stopped** status indicator.

![Step 16](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0016.png)

4. Scroll down within the database details panel to locate the **IP Allow List** section, which is highlighted with an orange border. Confirm that the **IP Allow List toggle** is switched to the **ON** (blue) position. You will see the currently configured IP address tags displayed as pill-shaped labels, including entries such as **"Avalanche Integration IPs"** and **"Actian Education IP Address"**.

![Step 18](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0018.png)

5. Review the informational tooltip that explains the IP Allow List security behavior. The tooltip confirms three important rules:
   - *"A connection to the Database is possible."* — when the IP is listed
   - *"If the IP address is not specified, then a connection is denied."*
   - *"Access to Database data is achieved if the user's security credentials are also valid."*

> **Note:** Even if an IP address is on the allow list, users must still provide valid security credentials to access database data. The IP Allow List is one layer of security, not the only layer.

---

## Section 4: Opening the IP Allow List Panel

To manage individual IP entries, you must open the dedicated **IP Allow List** side panel.

![Step 21](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0021.png)

1. In the **IP Allow List** section of the database configuration page, locate the blue **"+"** (plus) button on the right side of the row. A tooltip reading **"Add or remove IP addresses"** will appear when you hover over it. Click this **"+"** button to open the IP Allow List management panel.

2. The tooltip confirms the purpose of the **"+"** button — clicking it opens the full IP Allow List panel where you can add, update, sort, and delete IP entries.

![Step 23](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0023.png)

3. The **IP Allow List** side panel slides open on the right side of the screen. The panel displays:
   - A **"+ Add Allowed IPs"** button (blue) with a dropdown arrow at the top
   - A **search icon** (magnifying glass) in the top-right corner
   - A table with two columns: **IP Address** and **Label**
   - All currently configured IP entries

   The current list includes the following entries:

   | IP Address | Label |
   |---|---|
   | `35.227.107.174/32` | Avalanche Integration IPs |
   | `52.224.29.160/30` | Avalanche Integration IPs |
   | `52.149.201.156/32` | Avalanche Integration IPs |
   | `3.222.57.220/32` | Avalanche Integration IPs |
   | `3.220.1.81/32` | Avalanche Integration IPs |
   | `3.222.1.52/32` | Avalanche Integration IPs |
   | `140.82.201.75/32` (**MY IP**) | Actian Education IP Address |

> **Note:** The entry tagged **"MY IP"** indicates that this IP address matches your current connection's IP address. This helps you quickly identify your own IP in the list.

---

## Section 5: Adding an IP Address

This section demonstrates how to add a new individual IP address to the allow list.

![Step 25](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0025.png)

1. In the **IP Allow List** panel, click the **"+ Add Allowed IPs"** button (highlighted with an orange border in the tutorial). This button is located at the top of the panel and will expand an inline form for entering a new IP address.

![Step 33](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0033.png)

2. The **"Add Allowed IPs"** form expands inline within the panel. The **IP Address** field is automatically focused (highlighted with an orange border), ready for input. The form contains:
   - **IP Address \*** field (required) — with an ℹ️ info icon
   - **Label** field — optional descriptive name
   - **"Add"** button (blue, full-width) — submits the entry

![Step 27](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0027.png)

3. In the **IP Address \*** field, type the IP address you wish to add in CIDR notation. For this example, enter `35.227.107.172/32`. Then click into the **Label** field and type a descriptive name — for this example, enter `JohnDoe`.

4. With both fields populated — **IP Address** set to `35.227.107.172/32` and **Label** set to `JohnDoe` — confirm the values are correct. The **Label** field is highlighted with an orange border, indicating it is the currently active field.

![Step 29](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0029.png)

5. Review the completed form showing the IP address `35.227.107.172/32` and label `JohnDoe`. Click the blue **"Add"** button to save the new IP entry to the allow list.

![Step 31](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0031.png)

6. The new IP entry **"35.227.107.172/32 — JohnDoe"** now appears at the bottom of the IP Allow List table, highlighted with an orange border to confirm it was successfully added. The allow list now contains 8 entries total.

> **✅ Success:** The IP address `35.227.107.172/32` with label `JohnDoe` has been successfully added to the allow list.

---

## Section 6: Adding a CIDR Range

In addition to single IP addresses, you can add CIDR ranges to allow entire subnets access to your database.

1. Click the **"+ Add Allowed IPs"** button again to open a new **"Add Allowed IPs"** form. The form fields will be empty, ready for a new entry.

![Step 35](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0035.png)

2. In the **IP Address \*** field, enter a CIDR range. For this example, type `24.57.154.0/24`. In the **Label** field, enter a descriptive name such as `CIDR Range`.

   > **💡 Tip:** A tutorial banner at the bottom of the screen reminds you: *"CIDR blocks 24–30 are accepted. 31 is not accepted, and 32 is the same as the IP address itself. Enter in the form: XXX.XXX.XXX.XXX/##."*

   When you enter a CIDR range, the platform automatically calculates and displays the full IP range. For example, `24.57.154.0/24` expands to the range `24.57.154.0` to `24.57.154.255`.

3. Click the blue **"Add"** button to save the CIDR range entry. The new entry `24.57.154.0/24 — CIDR Range` will appear in the IP Allow List table.

![Step 37](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0037.png)

4. Verify the updated IP Allow List panel now shows all entries including the newly added `JohnDoe` entry (`35.227.107.172/32`). The panel confirms all 8 IP entries are correctly configured.

---

## Section 7: Sorting the IP Allow List

The IP Allow List can be sorted alphabetically or numerically by clicking on the column headers.

![Step 38](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0038.png)

1. In the **IP Allow List** panel, locate the column headers at the top of the table: **"IP Address"** and **"Label"**. A tutorial tooltip reads: *"Click on the 'IP Address' or 'Label' to sort in ascending or descending order."* The **"IP Address"** column header is highlighted with an orange border.

2. Click the **"IP Address"** column header to sort all IP entries in ascending order by IP address. Click it again to toggle to descending order.

3. Alternatively, click the **"Label"** column header to sort all IP entries alphabetically by their label names. Click it again to reverse the sort order.

> **💡 Tip:** Sorting is useful when you have a large number of IP entries and need to quickly locate a specific address or label.

---

## Section 8: Deleting IP Addresses

This section demonstrates how to remove one or more IP addresses from the allow list.

### Method 1: Delete Using the Row Delete Icon

![Step 40](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0040.png)

1. In the **IP Allow List** panel, hover over the row containing the IP address you wish to delete. For this example, hover over the **"35.227.107.172/32 — John Doe"** entry. A **red trash/delete icon** (🗑️) will appear on the right side of the row, highlighted with an orange border.

2. Click the **red trash/delete icon** on the target row to initiate deletion of that specific IP entry.

### Method 2: Delete Multiple IPs Using the Dropdown

![Step 42](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0042.png)

1. To delete multiple IP addresses at once, first select the entries you wish to remove by clicking the **blue checkmark circles** next to each row. In this example, both the **"John Doe"** (`35.227.107.172/32`) and **"CIDR Range"** (`24.57.154.0/24`) entries are selected (shown with blue filled checkmark circles, highlighted with an orange border).

2. With the desired entries selected, click the **dropdown arrow** (chevron ▼) next to the **"+ Add Allowed IPs"** button at the top of the panel to reveal additional options.

3. From the dropdown menu that appears, select **"Delete IP Addresses"** (highlighted in blue) to initiate the bulk deletion process.

![Step 44](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0044.png)

4. A confirmation dialog titled **"Delete from IP Allow List"** appears in the center of the screen. The dialog displays the warning message: *"Are you sure you want to delete 2 IP address(es)? This action cannot be undone."*

5. Review the confirmation message carefully. If you are certain you want to proceed, click the blue **"Delete"** button in the bottom-right of the dialog to permanently remove the selected IP addresses. To cancel without deleting, click the **"×"** (close) button in the top-right corner of the dialog.

> **⚠️ Warning:** Deleting IP addresses from the allow list is **permanent and cannot be undone**. Ensure you have selected the correct entries before confirming deletion. Removing an IP address will immediately block connections from that address.

---

## Section 9: Adding Avalanche Integration IPs

The Avalanche platform provides a convenient shortcut to add all required **Avalanche Integration IPs** at once using an autocomplete feature.

![Step 52](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0052.png)

1. In the **IP Allow List** panel, click the **"+ Add Allowed IPs"** button to open the add form. Then click the **dropdown arrow** (chevron ▼) on the right side of the button. A dropdown option labeled **"Avalanche Integration IPs"** appears as a blue button, highlighted with an orange border.

2. Click the **"Avalanche Integration IPs"** option from the dropdown. This will automatically populate the **IP Address** field with all required Avalanche platform IP addresses.

![Step 54](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0054.png)

3. After selecting **"Avalanche Integration IPs"**, the **IP Address** field is automatically populated with a comma-separated list of all Avalanche integration IP addresses (e.g., `3.222.1.52, 3.220.1.81, 3.222.57.220, 52.149.201.156, 52.224.29.1...`). The **Label** field is also automatically populated with **"Avalanche Integration IPs"**. The orange highlight box draws attention to the Label field and **"Add"** button.

4. Confirm the auto-populated values are correct, then click the blue **"Add"** button to save all Avalanche Integration IPs to the allow list in a single action.

> **💡 Note:** Avalanche Integration IPs can also be added at **database creation time**. A tutorial banner reminds you: *"Please note that the Avalanche Integration IPs can be added at database creation time."*

---

## Section 10: Reviewing the Final IP Allow List

After completing all add, update, sort, and delete operations, review the final state of your IP Allow List.

1. With the **IP Allow List** panel open, scroll through the complete list of entries to verify all IP addresses are correctly configured.

![Step 57](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0057.png)

2. The final IP Allow List panel displays all configured entries. The **Avalanche Integration IPs** section (highlighted with an orange border) shows the six system-required IP addresses that enable Avalanche platform integrations to function:

   | IP Address | Label |
   |---|---|
   | `140.82.201.75/32` (**MY IP**) | Actian Education IP Address |
   | `35.227.107.172/32` | John Doe |
   | `24.57.154.0/24` | CIDR Range |
   | `3.222.1.52/32` | Avalanche Integration IPs |
   | `3.220.1.81/32` | Avalanche Integration IPs |
   | `3.222.57.220/32` | Avalanche Integration IPs |
   | `52.149.201.156/32` | Avalanche Integration IPs |
   | `52.224.29.160/30` | Avalanche Integration IPs |
   | `35.227.107.174/32` | Avalanche Integration IPs |

3. Confirm that the **IP Allow List toggle** in the main database configuration panel remains **ON** (blue/enabled). This ensures that the allow list is actively enforced for all incoming connections.

> **💡 Important:** The **Avalanche Integration IPs** are system-managed IP addresses required for the Avalanche platform's integration features to function correctly. These should not be removed unless you intentionally want to disable platform integrations.

---

## Section 11: Exploring the Integrations Menu

While on the database details page, you can also explore the **Integrations** menu for additional platform capabilities.

![Step 46](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0046.png)

1. In the top navigation bar, click the **"Integrations"** menu item (with a dropdown arrow ▼). A dropdown menu appears with the following organized sections and options:

   **Top-level actions:**
   - **Create Integration**
   - **Load Files**

   **Details section:**
   - **Existing Configurations**
   - **Jobs**

   **Components section:**
   - **Templates**
   - **Macros**
   - **Files**
   - **Agents**

![Step 48](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0048.png)

2. Review all available **Integrations** menu options. These options allow you to create new data integrations, load files, manage existing configurations, monitor jobs, and work with integration components such as templates, macros, files, and agents.

![Step 50](https://videotodocs.fra1.cdn.digitaloceanspaces.com/projects/screenshots/9b502a9a-0442-46ef-b8f8-d31b34f7bb0f/frame_0050.png)

3. The **Integrations** dropdown is fully expanded, showing all eight available options across three sections. Select the appropriate option based on your integration needs, or press **Escape** or click elsewhere to close the dropdown without making a selection.

---

## Summary

In this tutorial, you have successfully learned how to manage the **IP Allow List** for an Avalanche Cloud Data Platform database instance. Here is a recap of everything covered:

| Task | How To Do It |
|---|---|
| **Open the IP Allow List panel** | Click the blue **"+"** button in the IP Allow List row of the database configuration page |
| **Add a single IP address** | Click **"+ Add Allowed IPs"**, enter the IP/CIDR and a label, click **"Add"** |
| **Add a CIDR range** | Use CIDR notation (e.g., `24.57.154.0/24`) in the IP Address field |
| **Add Avalanche Integration IPs** | Click the dropdown arrow next to **"+ Add Allowed IPs"** and select **"Avalanche Integration IPs"** |
| **Sort the list** | Click the **"IP Address"** or **"Label"** column header to toggle ascending/descending sort |
| **Delete a single IP** | Hover over a row and click the **red trash icon** |
| **Delete multiple IPs** | Select entries with checkboxes, click the dropdown arrow, choose **"Delete IP Addresses"**, confirm |

---

## What's Next

Now that you are familiar with managing the **Database IP Allow List** in the Avalanche Cloud Data Platform, consider exploring these related topics:

- 🔗 **Database Connections** — Configure connection strings and client tools using the **Connections** tab in the left sidebar
- 👥 **User Management** — Add and manage database users via the **Users** tab
- 📊 **Monitoring** — Track database performance and connection activity in the **Monitoring** tab
- ⚡ **Query Editor** — Run SQL queries directly in the browser using the **Query Editor** tab
- 🔌 **Integrations** — Set up data pipelines and integrations using the **Integrations** menu, including creating new integrations and loading files
- 🔒 **DB Admin Access** — Explore the **DB Admin Access (BETA)** feature for uploading RSA public keys for enhanced administrative security
- 📈 **Scaling Compute** — Use the **Scale** link next to the **Compute** field to adjust your database's compute resources as your workload grows

> **💡 Best Practice:** Regularly audit your IP Allow List to remove outdated or unnecessary entries. Keeping the allow list lean and up-to-date is an important part of maintaining a secure database environment. Always ensure the **Avalanche Integration IPs** remain in the list if you are using any Avalanche platform integration features.