// Select the elements
const submitBtn = document.getElementById('submit-btn');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Add event listener to the submit button
submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    let isValid = true;

    // Validate email
    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email address containing "@"';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password field cannot be empty';
        isValid = false;
    }

    // If both are valid, proceed without a popup
    if (isValid) {
        // Perform the next action, e.g., submit the form data
        console.log('Form is valid! Ready to proceed.');
        // Example: Submit the form programmatically or redirect
        // formElement.submit(); or window.location.href = "/success";
    }
});

// Clear error messages on reset
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function () {
    emailError.textContent = '';
    passwordError.textContent = '';
    emailField.value = '';
    passwordField.value = '';
});
