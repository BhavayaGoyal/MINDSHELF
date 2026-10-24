
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Show or hide the password
togglePassword.addEventListener("click", function () {
  const passwordIsHidden = passwordInput.type === "password";

  passwordInput.type = passwordIsHidden ? "text" : "password";
  togglePassword.textContent = passwordIsHidden ? "Hide" : "Show";
});

// Demonstration only: this does not authenticate a user.
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  message.style.color = "#244f40";
  message.textContent =
    "Login form validated! Connect a backend to sign in securely.";
});

// Forgot password placeholder
document.getElementById("forgotLink").addEventListener("click", function (event) {
  event.preventDefault();

  message.style.color = "#244f40";
  message.textContent =
    "Password reset will be available after backend setup.";
});
