---
title: User Management
hide_table_of_contents: false
tags:
 - Content Issues
---

# User Management

Administrators can create and manage users within the Administration Console. Note that User Management requires Account Admin access.

Account administrators can:

* Add a new user
* Activate/Inactivate a user
* Edit user profile information
* Enable direct API access for a user (where required)
* Create, generate, or reset the API password for a user
* Enable/Disable Admin access for a user

## Adding a New User

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click <img src="/img/icons/Add-New-User.png" className="icon" alt="the Add New button"/>.
3. On the **Create User Account** page, enter the **First Name** and **Last Name**.
4. In the **Username** field, enter the user's email address as the username.
   
   :::note
   Usernames cannot be changed once created, they can only be deactivated.
   :::

5. In the **Password** field, enter a password manually or select **Auto-Generate Password**.
6. In the **Status** field, **Active** is selected by default. If you do not yet want the user account to be active, select **Inactive**.

   ![Create-User2](/img/Create-User1.png)

7. Click <img src="/img/icons/Continue-Button2.png" className="icon" alt="the Continue button"/>.
8. Under **What role would you like to assign to the user?**, click **Admin** or **General User**.
9. If you selected **General User**, click the **Select policies** dropdown and select the desired policy. See [Access Control Policies](./access-control-polices).

   ![Create-User2](/img/Create-User2.png)
   
10. Click <img src="/img/icons/Add-User-Button.png" className="icon" alt="the Add User button"/>.

## Activating or Inactivating a User

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click the ellipsis icon in the right column for the desired user and select **Set as Active** or **Set as Inactive**.
   
   ![Inactivate-User](/img/Inactivate-User.png)

## Editing User Profile Information

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click the ellipsis icon in the right column for the desired user and select **Edit**.
   
   ![Edit-User](/img/Edit-User-Dropdown.png)

   :::note
      You can also click the Username for the desired user and then click <img src="/img/icons/edit-icon.png" className="icon" alt="the Edit icon"/> in the **User Details** pane:

      ![Edit-User2](/img/Edit-User2.png)
   :::

3. On the **Edit User Account** page, edit the user's first and last name, status, and password:

   ![Edit-User3](/img/Edit-User3.png)

   :::note
      Usernames cannot be changed once created, they can only be deactivated.
   :::

   :::note
   Users (admin and non-admin alike) are not allowed to activate/deactivate, or enable/disable Admin Access for themselves.
   :::

4. Click <img src="/img/icons/Continue-Button2.png" className="icon" alt="the Continue button"/>.
5. Under **What role would you like to assign to the user?**, click **Admin** or **General User**.
6. If you selected **General User**, click the **Select policies** dropdown and select the desired policy. See [Access Control Policies](./access-control-polices).

   ![Edit-User4](/img/Edit-User4.png)
   
7.  Click **Update User**.

## Enabling Direct API Access

<font color="red">GH Pages topic lists this as being something an admin can manage. I don't see anything in the UI for this. Need instructions here.</font>
<font color="blue">GGH Feedback - I might need to dig in here.  Don't think we limit API access as like a user flag or anything, so not totally sure what this is about.  Once a user has been authenticated, they have the same API rights whether through a direct API call or through the UI making an API call.</font>

## Enabling/Disabling Admin Access

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click the ellipsis icon in the right column for the desired user and select **Edit**.
   
   ![Edit-User](/img/Edit-User-Dropdown.png)

3. Click <img src="/img/icons/Continue-Button2.png" className="icon" alt="the Continue button"/>.
4. Click **Admin** or **General User**, then click **Update User**.

   ![Update-Admin-Access](/img/Update-Admin-Access.png)
