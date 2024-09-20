import React from 'react';
import '../styles/navbar.css'; // Make sure the CSS file is updated

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section: Logo */}
        <div className="logo">
          <a href="#">FREENCY DINE-IN</a>
        </div>

        {/* Center section: Navigation Links */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Book a Table</a>
          <a href="#">Menu</a>
        </div>

        {/* Right section: Login */}
        <div className="login-section">
          <a href="#">
            LOGIN <span className="login-icon">👤</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
