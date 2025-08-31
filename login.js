document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Dummy credentials
  if (username === "planner" && password === "12345") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "🚫 Invalid credentials!";
  }

});


