---
title: Access Control Policies
---

# Access Control Policies

By default, non-admin users only have access to JobTemplates and JobConfigs they create. You can grant additional privileges and share artifacts across users by using Access Control Policies.

| Resource Type | Assignable Actions |
| :------------ | :----------------- |
| jobconfigs    | view, edit, delete |
| jobtemplates  | view, edit, delete |

Refer to the Open API specs for [Access Control Policy APIs](../../../../access-control-policies).

## Editing Access Control Policies

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![](/img/Administration.png)

2. Click **Policies**:

   ![](/img/Policies.png)

3. Click the name of the desired policy:
   
   ![](/img/Policy-Edit1.png)
4. On the **Edit Access Policy** page, edit the **Name** and **Description** as desired.
5. Click the **Resource Types** dropdown and select **jobconfigs** or **jobtemplates**.
6. Click the **Allowed Actions** dropdown and select the desired action(s).
7. Click the **Resource Id(s)** dropdown and do one of the following:

   * To associate all Resource Ids with the selected Policy, * Select **\* (All Resource Ids)**.
   * To associate specific Resource Ids with the selected Policy, click **Browse Resource Ids**, select the desired Resource Id(s), then click **Add Selected Resource Id**.

     ![](/img/Resource-IDs.png)
8. Click **Update Access Policy**:

     ![](/img/Update-Access-Policy.png)

## Using the Advanced Editor

Custom permissions can be added for many resource types. In the advanced editor, custom and complex policies can be built via a JSON object rather than using the simple GUI editor.

1. Click **Advanced Editor**:

   ![](/img/Advanced-Editor-Button.png)   
2. Edit the JSON in the **Permissions** field. Refer to [Policy Examples](#policy-examples).

     ![](/img/Advanced-Editor.png)
3. Click **Update Access Policy**:

### Policy Examples

```
{
    "name": "View All JobConfigs",
    "description": "Allows read access to all JobConfigs in this Account",
    "permissions": [
        {
            "resourceType": "jobconfigs",
            "allowed": ["view"],
            "resourceIds": ["*"]
        }
    ]
}
```

```
{
    "name": "Manage All JobConfigs",
    "description": "Allows full access to all JobConfigs in this Account",
    "permissions": [
        {
            "resourceType": "warehouses",
            "allowed": ["view", "edit", "delete"],
            "resourceIds": ["*"]
        }
    ]
}
```

```
{
    "name": "View My JobTemplate and Manage It's JobConfigs",
    "description": "Allows read access to JobTemplate da966b62-48e7-4f83-99cf-53f3197af99d. Allows full access to JobConfigs 123 and 456",
    "permissions": [
        {
            "resourceType": "jobtemplates",
            "allowed": ["view"],
            "resourceIds": ["da966b62-48e7-4f83-99cf-53f3197af99d"]
        },
        {
            "resourceType": "jobconfigs",
            "allowed": ["view", "edit", "delete"],
            "resourceIds": ["123", "456"]
        }
    ]
}
```

## Child Policy Access

It is possible to give users access to all child configurations for a template, including the ability to create new configurations for that template, while giving users only read-only access to the template itself. You can do that by creating a policy of `"resourceType": "jobconfigs"` while adding `template:<some template ID here>` to the `resourceIds` array.

For example:

```
{
    "name": "User Access to Child Objects For A Job Template",
    "description": "Allows read access to JobTemplate da966b62-48e7-4f83-99cf-53f3197af99d. Allows full access to all JobConfigs for that template.",
    "permissions": [
        {
            "resourceType": "jobconfigs",
            "allowed": ["*"],
            "resourceIds": ["template:da966b62-48e7-4f83-99cf-53f3197af99d"]
        }
    ]
}
```
