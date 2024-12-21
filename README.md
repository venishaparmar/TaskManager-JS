# TaskManager-JS

A Task Manager web application designed to allow users to create, edit, mark tasks as completed, delete tasks, and filter tasks based on their status. 
![task](https://github.com/user-attachments/assets/6110960d-345c-4155-804f-d61b046c55df)

## Features
- **Task Creation**: Easily add new tasks.
- **Completion Toggle**: Mark tasks as completed with a simple click.
- **Task Editing**: Edit existing tasks directly.
- **Delete Tasks**: Remove tasks from the list when no longer needed.
- **Task Filtering**: Filter tasks by status (All, Completed, Pending).
- **Smooth Transitions**: Fade-in and fade-out effects for a seamless experience.

## Technologies Utilized
- **HTML5**: To structure the web content.
- **CSS3 & Bootstrap**: For styling and ensuring the app is responsive.
- **JavaScript**: To handle user actions like task creation, deletion, and completion.
- **jQuery**: For DOM manipulation and animation effects.
- **Responsive Design**: Ensures a smooth experience across devices.

## Installation Instructions

### 1. Clone the repository:

```bash
https://github.com/venishaparmar/TaskManager-JS.git
```

### 2. Open the project folder:
Navigate into the folder where the repository was cloned:

```bash
cd TaskManager-JS
```

### 3. Open the index.html file:
To run the application, simply open the index.html file in your preferred web browser.

### 4. View in browser:
Your Task Manager application should now be visible in your web browser. Enjoy managing your tasks!

## Project Structure

```bash
TaskManager-JS/
│
├── index.html        # Main HTML file that structures the page
├── css/
│   └── style.css     # Styles and responsive CSS rules for the app
├── js/
│   ├── vanilla.js     # JavaScript logic and jquery logic for task management
│   └── app.js  
├── README.md         # Project documentation file
```

## How It Works

## Adding a Task
- Input your task name in the designated field and click Add Task.
- The task will appear in the task list with three buttons: Complete, Edit, and Delete.

## Marking a Task as Complete
- When the Complete button is clicked, the task is marked as completed with a check symbol. This toggles the task’s status between completed and pending.

## Editing a Task
- Clicking the Edit button opens a prompt allowing you to change the task’s name. The updated name will be reflected in the list.
  
## Deleting a Task
- The Delete button removes the task from the list with a fade-out animation for a smooth experience.

## Filtering Tasks
- Use the dropdown filter at the top to sort tasks by their status:
    - All: Shows all tasks.
    - Completed: Displays only tasks that are marked complete.
    - Pending: Displays tasks that are yet to be completed.

## 6. Smooth Animations
- When tasks are added, the page applies a fade-in animation.
- When tasks are deleted, they fade out smoothly before being removed from the list.

---

## Code Details

The Task Manager web application utilizes **Vanilla JavaScript** and **jQuery** for handling task operations and DOM manipulation. Below is an overview of how each key functionality is implemented:

### 1. Task Addition
- **Triggering Task Addition**: When the **"Add Task"** button is clicked:
  - A new task is added to the task list.
  - The task appears with a fade-in animation, ensuring smooth transitions and a polished user experience.

### 2. Mark Complete
- **Task Completion**: Each task can be marked as complete:
  - Clicking the **Complete** button toggles the task's completion state.
  - The task’s appearance is updated (e.g., a check symbol is displayed), indicating that the task is finished.

### 3. Editing Task Name
- **Editing Tasks**: Users can modify the name of an existing task:
  - By clicking the **Edit** button, a prompt appears, allowing the user to enter a new task name.

### 4. Deleting Tasks
- **Removing Tasks**: Users can delete tasks:
  - Clicking the **Delete** button triggers a fade-out animation before the task is removed from the list entirely.

### 5. Filtering Tasks
- **Task Filtering**: Users can filter tasks based on their completion status:
  - A dropdown menu allows users to choose between displaying **All**, **Completed**, or **Pending** tasks.
  - Tasks that meet the filter criteria fade in or out accordingly.

---
