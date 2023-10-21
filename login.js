"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const message = document.getElementById("message");
    loginButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;
        // Here, you can add your authentication logic.
        // For simplicity, we'll check for a hardcoded username and password.
        if (username === "your_username" && password === "your_password") {
            // Redirect to the dashboard page or perform other actions here.
            window.location.href = "dashboard.html";
        }
        else {
            message.textContent = "Please sign up first to login.";
        }
    });
});
