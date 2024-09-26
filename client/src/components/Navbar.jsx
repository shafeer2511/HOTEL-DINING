import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section: Logo */}
        <div className="logo">
          <Link to="/">FREENCY DINE-IN</Link>
        </div>

        {/* Center section: Navigation Links */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/book-table">Book a Table</Link>
          <Link to="/RestaurantGrid">Menu</Link>
        </div>

        {/* Right section: Login */}
        <div className="login-section">
          <Link to="/login">
            LOGIN <span className="login-icon">👤</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
