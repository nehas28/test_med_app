import React, { useState } from 'react';
import './Sign_Up.css';
import mageEyeOn from './suImages/ri_eye-line.png';
import mageEyeOff from './suImages/mage_eye-off.png';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev); // Toggle the state
    };

    const resetForm = () => {
        document.getElementById('signup-form').reset();
        setShowPassword(false); // Reset the password visibility state
    };

    return (
        <div>
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
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-field"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Phone Field */}
                <label htmlFor="phone" className="form-label">Phone</label>
                <div className="input-container">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="input-field"
                        placeholder="Enter your phone number"
                    />
                    <span
                        id="phone-error"
                        className="error-message"
                        style={{ color: 'red', display: 'none' }}
                    >
                        Invalid phone number format. Use ###-###-####.
                    </span>
                </div>

                {/* Email Field */}
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-container">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-field"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Field */}
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className="input-field"
                        placeholder="Enter your password"
                    />
                    <span className="toggle-password" onClick={togglePassword}>
                        <img
                            id="toggle-icon"
                            src={showPassword ? mageEyeOn : mageEyeOff}
                            alt="Toggle Password Visibility"
                        />
                    </span>
                    <span
                        id="password-error"
                        className="error-message"
                        style={{ color: 'red', display: 'none' }}
                    >
                        Password must be max 25 characters, contain at least one special character, and one number.
                    </span>
                </div>

                {/* Submit Button */}
                <div className="submit-container">
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </div>

                {/* Reset Button */}
                <div className="reset-container">
                    <button
                        type="reset"
                        className="reset-btn"
                        onClick={resetForm}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
