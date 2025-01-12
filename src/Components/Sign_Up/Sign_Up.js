import React from 'react';
import './Sign_Up.css';  // Import the CSS file

const SignIn = () => {
    // Toggle Password Visibility Function
    const togglePassword = () => {
        const passwordField = document.getElementById("password");
        const toggleIcon = document.getElementById("toggle-icon");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleIcon.src = "suImages/ri_eye-line.png"; 
        } else {
            passwordField.type = "password";
            toggleIcon.src = "suImages/mage_eye-off.png"; 
        }
    };

    // Validate Phone Number Function
    const validatePhoneNumber = () => {
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
    };

    // Validate Password Function
    const validatePassword = () => {
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
    };

    // Reset Form Function
    const resetForm = () => {
        const form = document.getElementById("signup-form");
        form.reset(); // Reset all input fields

        // Clear custom error messages and styles
        document.getElementById("phone-error").style.display = "none";
        document.getElementById("password-error").style.display = "none";
        document.getElementById("phone").style.borderColor = "";
        document.getElementById("password").style.borderColor = "";
    };

    return (
        <form id="signup-form" className="form-container">
            <div className="form-title">Sign Up</div>
            <div className="login-info">
                <span>Already a member? </span>
                <a href="Login.html" className="login-link">Login</a>
            </div>

            {/* Role Field */}
            <label htmlFor="role" className="form-label">Role</label>
            <div className="input-container">
                <select id="role" name="role" className="input-field">
                    <option value="enter-role">Enter Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {/* Name Field */}
            <label htmlFor="name" className="form-label">Name</label>
            <div className="input-container">
                <input type="text" id="name" name="name" className="input-field" placeholder="Enter your name" />
            </div>

            <label htmlFor="phone" className="form-label">Phone</label>
            <div className="input-container">
                <input type="text" id="phone" name="phone" className="input-field" placeholder="Enter your phone number" />
                <span id="phone-error" className="error-message" style={{ color: 'red', display: 'none' }}>
                    Invalid phone number format. Use ###-###-####
                </span>
            </div>

            {/* Email Field */}
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-container">
                <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" />
            </div>

            {/* Password Field */}
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-container">
                <input type="password" id="password" name="password" className="input-field" placeholder="Enter your password" />
                <span className="toggle-password" onClick={togglePassword}>
                    <img id="toggle-icon" src="suImages/mage_eye-off.png" alt="Toggle Password Visibility" />
                </span>
                <span id="password-error" className="error-message" style={{ color: 'red', display: 'none' }}>
                    Password must be max 25 characters, contain at least one special character, and one number.
                </span>
            </div>

            {/* Submit Button */}
            <div className="submit-container">
                <button type="submit" className="submit-btn">Submit</button>
            </div>

            {/* Reset Button */}
            <div className="reset-container">
                <button type="reset" className="reset-btn" onClick={resetForm}>Reset</button>
            </div>
        </form>
    );
};

export default SignIn;
