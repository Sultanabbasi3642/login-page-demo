"use strict";
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(enteredUsername, enteredPassword) {
        if (enteredUsername === this.username && enteredPassword === this.password) {
            console.log("Login successful. Redirect to the dashboard.");
        }
        else {
            console.log("Please sign up first to login.");
        }
    }
}
const newUser = new User("Waheed-ur-rehman", "billikadhumka");
const enteredUsername = "Waheed-ur-rehman"; // Replace with user input
const enteredPassword = "billikadhumka"; // Replace with user input
newUser.login(enteredUsername, enteredPassword);
