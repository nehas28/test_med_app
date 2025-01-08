// Toggle Password Function
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggle-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "suImages/ri_eye-line.png"; 
    } else {
        passwordField.type = "password";
        toggleIcon.src = "suImages/mage_eye-off.png"; 
    }
}

// Validate Phone Number Function
function validatePhoneNumber() {
    const phoneField = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneRegex.test(phoneField.value)) {
        phoneError.style.display = "block";
        phoneField.style.borderColor = "red";
        return false;
    } else {
        phoneError.style.display = "none";
        phoneField.style.borderColor = "green";
        return true;
    }
}

document.getElementById("phone").addEventListener("blur", validatePhoneNumber);

// Validate Password Function
function validatePassword() {
    const passwordField = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{1,25}$/;

    if (!passwordRegex.test(passwordField.value)) {
        passwordError.style.display = "block";
        passwordField.style.borderColor = "red";
        return false;
    } else {
        passwordError.style.display = "none";
        passwordField.style.borderColor = "green";
        return true;
    }
}

document.getElementById("password").addEventListener("blur", validatePassword);

// Reset Form Function
function resetForm() {
    const form = document.getElementById("signup-form");
    form.reset(); // Reset all input fields

    // Clear custom error messages and styles
    document.getElementById("phone-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("phone").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";
}
