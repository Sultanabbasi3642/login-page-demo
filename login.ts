document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const loginButton = document.getElementById("login-button") as HTMLButtonElement;
    const message = document.getElementById("message") as HTMLParagraphElement;

    loginButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Here, you can add your authentication logic.
        // For simplicity, we'll check for a hardcoded username and password.
        if (username === "your_username" && password === "your_password") {
            // Redirect to the dashboard page or perform other actions here.
            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Please sign up first to login.";
        }
    });
});
