document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("tasks");
  
    addTaskBtn.addEventListener("click", () => {
        const taskName = $("#task-input").val().trim();
  
        if (!taskName) {
            alert("Make Sure Task name cannot be empty!");
            taskInput.focus(); 
            return;
        }
  
        const taskItem = document.createElement("li");
  
        taskItem.innerHTML = `
            <span>${taskName}</span>
            <div>
                <button class="btn btn-success complete-btn">Mark Complete</button>
                <button class="btn btn-primary edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>
        `;
  
        $(taskList).append($(taskItem).hide().fadeIn("slow"));
  
        taskInput.value = "";
  
        // Mark Complete functionality
        taskItem.querySelector(".complete-btn").addEventListener("click", () => {
            taskItem.classList.toggle("completed");
  
            if (taskItem.classList.contains("completed")) {
                taskItem.querySelector("span").innerHTML += " &#10004;"; // Unicode for checkmark
                taskItem.querySelector(".complete-btn").disabled = true;
                taskItem.querySelector(".edit-btn").disabled = true;
                taskItem.querySelector(".delete-btn").disabled = true;
            } else {
                taskItem.querySelector("span").textContent = taskName; // Reset task name
                taskItem.querySelector(".complete-btn").disabled = false;
                taskItem.querySelector(".edit-btn").disabled = false;
                taskItem.querySelector(".delete-btn").disabled = false;
            }
        });
  
        // Delete functionality
        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            $(taskItem).fadeOut("slow", () => {
                taskItem.remove();
            });
        });
  
        // Edit functionality
        taskItem.querySelector(".edit-btn").addEventListener("click", () => {
            const currentTaskName = taskItem.querySelector("span").textContent;
            const newTaskName = prompt("Edit Task Name:", currentTaskName);
  
            if (newTaskName && newTaskName.trim() !== "") {
                taskItem.querySelector("span").textContent = newTaskName.trim();
            } else {
                alert("Task name cannot be empty!");
            }
        });
    });
  });
  