import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img className="logo" src="navImages/logo-light-version.png" alt="Logo" />
      </div>
      <div className="navbar">
        <span>Home</span>
        <span>Appointments</span>
        <span>Health Blog</span>
        <span>Reviews</span>
        <button className="nav-btn">Sign Up</button>
        <button className="nav-btn">Login</button>
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