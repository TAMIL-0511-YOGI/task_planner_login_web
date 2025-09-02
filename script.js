// Protect the to-do page// Protect the to-do page
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

// Load tasks on page load
window.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;

  if (title !== "") {
    const task = { title, desc, start, end };
    saveTask(task);
    renderTask(task);
    clearInputs();
  }
}

function renderTask(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");

  li.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.desc}</p>
    <div class="dates">
      <span>🟢 Start: ${task.start || "Not set"}</span>
      <span>🔴 End: ${task.end || "Not set"}</span>
    </div>
    <button onclick="deleteTask(this)">🗑️ Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(renderTask);
}

function deleteTask(button) {
  const li = button.parentElement;
  const title = li.querySelector("h3").textContent;

  // Remove from DOM
  li.remove();

  // Remove from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks = tasks.filter(task => task.title !== title);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearInputs() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("tasks"); // Optional: clear tasks on logout
  window.location.href = "login.html";
}
}
