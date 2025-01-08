import React, { useState } from "react";
import "./Login.css";

function Login() {
    // State variables for input fields and error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Submit button handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // Clear previous error messages
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        // Validate email
        if (!email.includes("@")) {
            setEmailError('Please enter a valid email address containing "@"');
            isValid = false;
        }

        // Validate password
        if (password === "") {
            setPasswordError("Password field cannot be empty");
            isValid = false;
        }

        // If valid, log the result or handle form submission
        if (isValid) {
            console.log("Form is valid! Email:", email, "Password:", password);
        }
    };

    // Reset button handler
    const handleReset = () => {
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
    };

    return (
        <div className="container">
            <div className="title">Login</div>
            <div className="new-member-text">
                <span>Are you a new member? </span>
                <a href="#" className="new-member-link" style={{ color: "#236B73" }}>
                    Create Account
                </a>
            </div>

            <div className="email-label">Email</div>
            <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div id="email-error" className="error-message">{emailError}</div>}

            <div className="password-label">Password</div>
            <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
                <div id="password-error" className="error-message">{passwordError}</div>
            )}

            <button id="submit-btn" className="submit-btn" onClick={handleSubmit}>
                <div className="submit-text">Submit</div>
            </button>

            <button id="reset-btn" className="reset-btn" onClick={handleReset}>
                <div className="reset-text">Reset</div>
            </button>

            <div className="forgot-password">
                <a href="#" style={{ color: "#236B73" }}>
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default Login;
