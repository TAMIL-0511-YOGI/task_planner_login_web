// Protect the to-do page
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

// Add task with description and dates
function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;

  if (title !== "") {
    const li = document.createElement("li");
    li.classList.add("task-card");

    li.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="dates">
        <span>🟢 Start: ${start || "Not set"}</span>
        <span>🔴 End: ${end || "Not set"}</span>
      </div>
    `;

    document.getElementById("taskList").appendChild(li);

    // Clear inputs
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
  }
}

// Logout logic
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}