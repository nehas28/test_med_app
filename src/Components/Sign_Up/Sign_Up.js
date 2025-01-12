import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation: Ensure password and confirm password match
        if (password !== confirmPassword) {
            setShowerr('Passwords do not match!');
            return;
        }

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Set form submission to true to hide the form
            setIsSubmitted(true);

            // Redirect user to home page
            navigate("/");

            // Refresh the page (optional, can be removed if not needed)
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // Function to handle restarting the form
    const restartForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setShowerr('');
        setIsSubmitted(false);
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                {/* If the form is submitted, hide the form */}
                {!isSubmitted ? (
                    <div className="signup-form">
                        <form method="POST" onSubmit={register}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="form-control" 
                                    placeholder="Enter your name" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="form-control" 
                                    placeholder="Enter your email" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    className="form-control" 
                                    placeholder="Enter your phone number" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    className="form-control" 
                                    placeholder="Enter your password" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    className="form-control" 
                                    placeholder="Confirm your password" 
                                    required 
                                />
                            </div>

                            {/* Show error message if any */}
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                ) : (
                    // If submitted, show the "Restart Form" button
                    <div className="restart-btn-container">
                        <button onClick={restartForm} className="restart-btn">Restart Form</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sign_Up;
