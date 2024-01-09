---
title: Access Control Policies
---

# Access Control Policies

By default, non-admin users only have access to JobTemplates and JobConfigs they create. You can grant additional privileges and share Artifacts across users by using Access Control Policies.

## Managing Access Control Policies

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click **Policies**:

   ![Policies](/img/Policies.png)


| Resource Type | Assignable Actions |
| :------------ | :----------------- |
| jobconfigs    | view, edit, delete |
| jobtemplates  | view, edit, delete |

Open API specs for Access Control Policy APIs are located here: [https://im.dev.actiandatacloud.com/apidocs/#/Access%20Policies](https://im.dev.actiandatacloud.com/apidocs/#/Access%20Policies)

## Policy Examples:

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
