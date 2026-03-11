const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");

function saveTasks() {
  const tasks = [];
  const taskListItems = taskList.querySelectorAll("li");
  taskListItems.forEach((item) => {
    const taskText = item.querySelector("span").textContent;
    tasks.push(taskText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => createTasks(task));
}

function createTasks(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  taskList.appendChild(li);

  editBtn.addEventListener("click", () => {
    if (span.isContentEditable) {
      const newText = span.textContent.trim();

      if (newText === "") {
        span.textContent = taskText;
      }
      span.contentEditable = false;
      editBtn.textContent = "Edit";
      saveTasks();
    } else {
      span.contentEditable = true;
      span.focus();
      editBtn.textContent = "Save";
    }
  });
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  taskInput.value = "";

  createTasks(taskText);

  saveTasks();
}

addTaskButton.addEventListener("click", addTask);

loadTasks();
