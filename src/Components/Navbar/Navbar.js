import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import logo from './navImages/logo-light-version.png';

const Navbar = () => {
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

        {/* Link to Sign Up */}
        <Link to="/signup" className="nav-btn">Sign Up</Link>
        
        {/* Link to Login */}
        <Link to="/login" className="nav-btn">Login</Link>
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
