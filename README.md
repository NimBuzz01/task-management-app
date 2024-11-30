# Task Management Application

A **Task Management Application** built using **Next.js**, **TypeScript**, **Tailwind CSS**, and several modern libraries for an intuitive and interactive Kanban-style dashboard. Users can create, edit, organize, and manage tasks seamlessly.

Built by [Niamat Marjan](https://github.com/NimBuzz01) for Code94 Labs assessment.

## Features

- **Task Creation**

  - Add new tasks with details: Task Name, Priority, Status, Due Date, and Assignee.
  - Dynamic remaining time text based on the due date.

- **Task Management**

  - Drag and drop tasks between sections (Todo, In Progress, Completed).
  - Update task details (Task Name, Priority, Due Date, Assignee, and Description).
  - Auto-save task details upon editing.

- **Task Viewing and Deletion**

  - View all task details by clicking on a task.
  - Delete tasks with a confirmation popup.

- **UI Enhancements**
  - Responsive and user-friendly design.
  - Real-time task count per section.
  - Dynamic time-based messages.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Drag and Drop**: [DND Kit](https://dndkit.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Date Utilities**: [date-fns](https://date-fns.org/)

# Installation

## Clone the repository

git clone `https://github.com/NimBuzz01/task-management-app.git`

cd `task-management-app`

## Install dependencies

`npm install --legacy-peer-deps`

## Start the development server

`npm run dev`

## Open the app in your browser

`http://localhost:3000`

# How to Use

## Create a Task:

1. Click the **"+ Add Task"** button under the desired section.
2. Fill in the required details:
   - **Task Name**
   - **Priority**
   - **Status**
   - **Due Date**
   - **Assignee**
3. The task will automatically save if all fields are completed.

## Update Task Details:

1. Click on a task card to open the **task sheet**.
2. Update any field, and changes will **auto-save**.

## Move Tasks Between Sections:

- Drag and drop a task card between **"Todo," "In Progress," and "Completed"** sections.

## Delete a Task:

1. Open the **task modal** and click the **delete icon**.
2. Confirm the action in the **popup**.
