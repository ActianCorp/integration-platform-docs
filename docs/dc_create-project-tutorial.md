# Learn to Create and Organize DataConnect Projects

## What You'll Learn

- How DataConnect projects organize your integration work within the Eclipse IDE
- Three different methods for creating a new DataConnect project
- How to name, configure, and locate your projects on disk
- Best practices for structuring projects and workspaces
- How projects relate to folders and design artifacts in your workspace

## Introduction

Actian DataConnect uses a project-based approach to organize your integration development work. Whether you're building data maps, transformation processes, or complex integration workflows, projects provide the foundation for keeping your work structured and accessible. In this tutorial, you'll learn how to create and organize DataConnect projects effectively, setting yourself up for efficient development as you build more complex integrations.

Understanding projects is essential because they control how your design artifacts—maps, processes, scripts, and package inventories—are stored and accessed. A well-organized project structure makes it easier to find files, collaborate with team members, and maintain your integrations over time.

## Prerequisites

Before starting this tutorial, ensure you have:

- **Actian DataConnect version 12.2 or higher** installed on your system
- **Basic familiarity with the Eclipse IDE** interface (menus, toolbars, navigation)
- **Access to DataConnect Studio** with the ability to create new projects
- **Understanding of file system concepts** like folders, directories, and workspaces

## Key Concepts

Before diving into project creation, let's clarify a few important concepts:

**DataConnect Project**: A container within the Eclipse IDE that organizes all related DataConnect files and design artifacts. Projects help you group related integration work together, separate different initiatives, and maintain clean boundaries between different areas of your data integration landscape.

**Workspace**: The top-level folder on your disk that contains one or more projects. Think of the workspace as your development environment's home base—all projects you create live within this workspace folder unless you explicitly specify a different location.

**Design Artifacts**: The various DataConnect components you create, including maps (data transformations), processes (orchestration logic), EZscripts (custom code), and package inventories (deployment configurations). All these artifacts are stored within projects.

**Project Explorer**: The navigation panel in DataConnect Studio that displays your workspace contents in a tree structure, showing all projects, folders, files, and design artifacts. This is your primary tool for navigating and managing your work.

## Understanding DataConnect Project Organization

Before creating your first project, let's explore how DataConnect organizes your work.

### The Project Structure

DataConnect uses a hierarchical organization model where:

- A **workspace** serves as the root container on your disk
- Multiple **projects** can exist within a single workspace
- Each **project** can contain multiple **subfolders** for organizing different types of work
- **Design artifacts and files** are stored within projects and subfolders

![Diagram showing a workspace containing multiple projects, each with subfolders](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/31e5a9f9-2460-4252-af0b-528348268ab3/images/Diagram_showing_a_workspace_containing_multiple_pr_8aae6ff260.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=RdZIsDBuLu90o8%2FHbJ8ohXnsv%2BQ%3D&Expires=1770235006)

This structure gives you flexibility to organize your work logically. For example, you might create separate projects for different clients, business units, or integration patterns. Within each project, you can create subfolders to separate maps from processes, or to organize by data source or functional area.

### How Projects Map to Your File System

When you create a project in DataConnect Studio, a corresponding folder is automatically created on your disk within the current workspace directory. This means your logical project structure in the IDE directly reflects the physical folder structure on your computer.

All design artifacts you save to a project are stored as files within this project folder, making them accessible both through DataConnect Studio and through your operating system's file browser. This is important for version control, backups, and collaboration.

### The Project Explorer View

The Project Explorer is your primary navigation tool in DataConnect Studio. It displays:

- All projects in your current workspace
- Folder hierarchies within each project
- Individual files and design artifacts
- Project configuration and properties

![Project Explorer in Actian DataConnect Studio showing multiple projects and folders](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/31e5a9f9-2460-4252-af0b-528348268ab3/images/Project_Explorer_in_Actian_DataConnect_Studio_show_7708dd18bb.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=dusKXU%2FlD6V7AZeWmw6Kugb66MI%3D&Expires=1770235006)

You'll interact with the Project Explorer constantly as you develop integrations, so becoming familiar with its layout and functionality will make your work more efficient.

## Creating Your First DataConnect Project

Now that you understand how projects work, let's create one. DataConnect provides three different methods for creating projects, giving you flexibility to use whichever approach fits your workflow.

### Method 1: Using the File Menu

This is the most straightforward approach, especially when you're getting started.

**Step 1:** Open the File menu by clicking **File** in the menu bar at the top of DataConnect Studio.

**Step 2:** Navigate to **File** > **New** > **DataConnect Project**.

![File menu open with DataConnect Project highlighted](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/31e5a9f9-2460-4252-af0b-528348268ab3/images/File_menu_open_with_DataConnect_Project_highlighte_5ab579335e.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=WY8daImydVJJ92oILYNWNVJewVk%3D&Expires=1770235006)

**Step 3:** The New DataConnect Project dialog will open, ready for you to configure your project.

### Method 2: Using the Toolbar

For experienced users, the toolbar provides quick access to project creation.

**Step 1:** Locate the **New** icon in the toolbar (typically near the top-left of the interface).

**Step 2:** Click the **New** icon and select **DataConnect Project** from the dropdown menu.

**Step 3:** The New DataConnect Project dialog will open.

### Method 3: Using the Project Explorer Context Menu

This method is convenient when you're already working in the Project Explorer.

**Step 1:** Right-click in an empty area of the Project Explorer panel.

**Step 2:** From the context menu, select **New**, then **DataConnect Project**.

**Step 3:** The New DataConnect Project dialog will open.

**Note:** All three methods open the same New DataConnect Project dialog—choose whichever method feels most natural to your workflow.

## Configuring Your Project

Once you've opened the New DataConnect Project dialog using any of the methods above, you'll configure your project's basic settings.

**Step 1:** Enter your project name in the **Project name** field.

For this tutorial, use `DC_Sample` as the project name. In your own work, choose names that clearly describe the project's purpose—for example, `CustomerDataIntegration` or `SalesReporting_Maps`.

**Note:** Project names cannot contain spaces or special characters that are invalid in file system paths. Use underscores or camelCase for multi-word names.

**Step 2:** Configure the project location.

By default, the **Use default location** checkbox is selected. This setting places your project in the default workspace directory. For our example project named `DC_Sample`, the full path would be:

`C:\Actian\DataConnect\workspace\DC_Sample`

![New DataConnect Project dialog with project name and location configured](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/31e5a9f9-2460-4252-af0b-528348268ab3/images/New_DataConnect_Project_dialog_with_Project_name_f_bad1b8fe53.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=o0EekTq0HOzyzSfVaGOB5u%2BAz8U%3D&Expires=1770235006)

If you need to store your project in a different location (for example, on a shared network drive or a specific folder structure), uncheck **Use default location** and browse to or enter your desired path.

**Note:** Keeping projects in the default workspace location simplifies management and makes it easier for DataConnect to track your work. Only use custom locations when you have a specific requirement.

**Step 3:** Click **Finish** to create the project immediately, or click **Next** if you need to configure additional project settings.

For most projects, clicking **Finish** is sufficient. The **Next** button provides access to additional configuration options that are typically only needed for specialized scenarios.

## Verifying Your Project Creation

After clicking **Finish**, DataConnect creates your project and you should see it appear in the Project Explorer.

**Step 1:** Locate your new project in the Project Explorer panel. It will appear as a folder icon with the name you specified (`DC_Sample` if you followed the tutorial).

**Step 2:** Expand the project by clicking the arrow or plus icon next to the project name to see its internal structure.

**Step 3:** Verify that the project folder exists on your disk by navigating to the workspace directory in your file system (for example, `C:\Actian\DataConnect\workspace\DC_Sample`).

At this point, you have successfully created and organized a new DataConnect project. You're now ready to add design artifacts like maps and processes to your project.

## Checkpoint

To verify you've completed this tutorial successfully, check the following:

- [ ] You can see your new project (`DC_Sample`) listed in the Project Explorer
- [ ] The project folder exists on your disk in the workspace directory
- [ ] You understand all three methods for creating projects and can use any of them
- [ ] You know how to configure the project name and location
- [ ] You can explain the relationship between workspaces, projects, and design artifacts

If any of these items aren't clear, review the relevant section above before proceeding.

## Summary

In this tutorial, you learned how to create and organize DataConnect projects within Actian DataConnect Studio. You now understand:

- **What DataConnect projects are** and how they organize design artifacts within the Eclipse IDE
- **The relationship between workspaces, projects, subfolders, and files** on your disk
- **Three different methods for creating a project**: using the File menu, the toolbar, or the Project Explorer context menu
- **How to configure project names and locations** to suit your organizational needs
- **The role of the Project Explorer** in navigating and managing your DataConnect work

Projects are the foundation of your DataConnect development environment. With a well-organized project structure, you'll find it easier to locate files, manage complex integrations, and collaborate with other developers.

## Next Steps

Now that you can create and organize projects, you're ready to start building integration solutions. Consider exploring these topics next:

- **Creating your first data map** to transform data between source and target systems
- **Building processes** to orchestrate multiple maps and define integration workflows
- **Organizing projects with subfolders** to maintain a clean structure as your project grows
- **Working with source control** to version your DataConnect projects and collaborate with team members
- **Configuring project properties** to customize compiler settings, runtime parameters, and deployment options

## FAQ

**Q: Can I have multiple projects in the same workspace?**

A: Yes, you can create as many projects as you need within a single workspace. This is useful for organizing different integration initiatives, clients, or functional areas while keeping all your work accessible from one DataConnect Studio instance.

**Q: What happens if I delete a project from the Project Explorer?**

A: Deleting a project from the Project Explorer removes it from your workspace view, but DataConnect will ask whether you also want to delete the project contents from disk. Be careful with this option—if you delete the contents from disk, all your design artifacts in that project will be permanently removed.

**Q: Can I rename a project after creating it?**

A: Yes, you can rename a project by right-clicking it in the Project Explorer and selecting **Rename**. The corresponding folder on disk will also be renamed to match.

**Q: What if I want to use a custom workspace location instead of the default?**

A: You can specify a custom workspace location when you first launch DataConnect Studio. When the workspace selection dialog appears at startup, enter or browse to your desired location. All projects you create will then be stored under this custom workspace directory.

**Q: Can I move a project from one workspace to another?**

A: Yes, you can export a project from one workspace and import it into another using Eclipse's export/import functionality. Right-click the project, select **Export**, then follow the wizard to create an archive. In the target workspace, use **Import** to bring the project in.