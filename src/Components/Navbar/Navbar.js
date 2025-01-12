import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import logo from './navImages/logo-light-version.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in (check for auth-token in sessionStorage)
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="main-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="navbar">
        <span>Home</span>
        <span>Appointments</span>
        <span>Health Blog</span>
        <span>Reviews</span>

        {/* Conditionally render Sign Up, Login, or Logout based on isLoggedIn */}
        {!isLoggedIn ? (
          <>
            <Link to="/signup" className="nav-btn">Sign Up</Link>
            <Link to="/login" className="nav-btn">Login</Link>
          </>
        ) : (
          <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
      <div className="headline">
        <h1>You Ask,</h1>
        <h1 className="highlight">We Book</h1>
      </div>
      <div className="subtext">
        DoConsult empowers healthcare providers with innovative solutions to enhance patient care,
        streamline operations, and drive sustainable growth.
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default Navbar;
