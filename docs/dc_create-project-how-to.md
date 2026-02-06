# How to Create a DataConnect Project in Actian DataConnect

## What You'll Learn

- What DataConnect projects are and how they organize your work
- Three different methods for creating a new project
- How to name and configure a project using default settings
- How to locate your project files in the workspace folder

## Introduction

Creating a DataConnect project is the first step in building data integrations with Actian DataConnect. A project organizes all your integration artifacts—maps, processes, scripts, and files—in one place within the Eclipse IDE. This guide shows you how to create and configure a new project in minutes.

## Prerequisites

- Actian DataConnect version 12.2 or higher installed

![Actian DataConnect 12.2](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/cc5a1744-9c75-44a2-a73e-d57f13b63886/images/Functionality_available_in_software__1__Actian_Dat_f1c2bf4f80.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=WMDXlCnwZqafRmlCmXStcYcwep4%3D&Expires=1770235716)

## Understanding DataConnect Projects

A DataConnect project serves as a container for organizing your integration work. Projects live within your workspace and can contain:

- DataConnect design artifacts (maps, processes, package inventories, EZscripts)
- General files and resources
- Multiple subfolders for organization

You can create multiple projects in a single workspace, each with its own folder structure. The Project Explorer displays all projects, folders, and artifacts in your current workspace.

![Workspace structure with multiple projects and subfolders](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/cc5a1744-9c75-44a2-a73e-d57f13b63886/images/Diagram_showing_a_workspace_containing_multiple_pr_1bdd680293.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=8vfX3KVKk5xXFH8nwNDoMfJjOag%3D&Expires=1770235716)

When you create a project, DataConnect automatically creates a corresponding folder on disk within your workspace directory. All artifacts you save to the project are stored in this folder.

## Steps

**Step 1:** Open the New DataConnect Project dialog using one of these methods:
- Select **File** > **New** > **DataConnect Project** from the menu
- Click the **New** icon on the toolbar and select **DataConnect Project**
- Right-click in the Project Explorer, select **New**, then **DataConnect Project**

![File menu with DataConnect Project option](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/cc5a1744-9c75-44a2-a73e-d57f13b63886/images/File_menu_open_with_DataConnect_Project_highlighte_4c91c739f5.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=J%2FconNzfWjfi3k%2BzEugNPiEyJ4w%3D&Expires=1770235716)

**Step 2:** Enter a name for your project in the **Project name** field (example: `DC_Sample`).

**Step 3:** Check the **Use default location** checkbox to save the project to the default workspace directory. This creates a folder at `C:\Actian\DataConnect\workspace\[ProjectName]`.

![New DataConnect Project dialog configured](https://docsie-app-prod-1.s3.amazonaws.com/lead-gen-outputs/cc5a1744-9c75-44a2-a73e-d57f13b63886/images/New_DataConnect_Project_dialog_with_Project_name_f_e67a60adda.jpg?AWSAccessKeyId=AKIAZPTSQGTOTMHLMIPJ&Signature=spXRey%2BJFkpsaZRmbRzRbq6uRDA%3D&Expires=1770235716)

**Step 4:** Click **Finish** to create the project.

## Result

Your new DataConnect project appears in the Project Explorer. A corresponding folder has been created in your workspace directory, ready to store maps, processes, and other integration artifacts.

## FAQ

**Can I create multiple projects in one workspace?**  
Yes. Define as many projects as needed within a single workspace, each with its own folder structure.

**Can I change the project location?**  
Yes. Uncheck "Use default location" in the New DataConnect Project dialog to specify a custom directory.

**Where are project files stored on disk?**  
By default, projects are stored in `C:\Actian\DataConnect\workspace\[ProjectName]`. All artifacts saved to the project are accessible in this folder.

**Can I organize files within a project?**  
Yes. Create multiple subfolders within each project to organize your artifacts logically.

**What's the difference between the Project Explorer and the workspace folder?**  
The Project Explorer is the IDE view showing your projects and artifacts. The workspace folder is the actual directory on disk where files are stored. They mirror each other—changes in one appear in the other.