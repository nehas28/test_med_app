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
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Pattern for ###-###-####

    if (!phoneRegex.test(phoneField.value)) {
        phoneError.style.display = "block"; // Show error message
        phoneField.style.borderColor = "red"; // Highlight border in red
        return false;
    } else {
        phoneError.style.display = "none"; // Hide error message
        phoneField.style.borderColor = "green"; // Highlight border in green
        return true;
    }
}

// Attach event listener to validate phone number on blur
document.getElementById("phone").addEventListener("blur", validatePhoneNumber);

// Validate Password Function
function validatePassword() {
    const passwordField = document.getElementById("password");
    const passwordError = document.getElementById("password-error");

    // Regular expression for validation
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{1,25}$/;

    if (!passwordRegex.test(passwordField.value)) {
        passwordError.style.display = "block"; // Show error message
        passwordField.style.borderColor = "red"; // Highlight border in red
        return false;
    } else {
        passwordError.style.display = "none"; // Hide error message
        passwordField.style.borderColor = "green"; // Highlight border in green
        return true;
    }
}

// Attach event listener to validate password on blur
document.getElementById("password").addEventListener("blur", validatePassword);