import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  // Update the login state to false
    navigate('/');  // Navigate to the homepage after logging out
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section: Logo */}
        <div className="logo">
          <Link to="/">FREENCY DINE-IN</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">{isMobileMenuOpen ? '✖' : '☰'}</span>
        </div>

        {/* Center section: Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/book-table" onClick={toggleMobileMenu}>Book a Table</Link>
          <Link to="/RestaurantGrid" onClick={toggleMobileMenu}>Menu</Link>
        </div>

        {/* Right section: Login/Logout */}
        <div className={`login-section ${isMobileMenuOpen ? 'active' : ''}`}>
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              LOGOUT <span className="login-icon">👤</span>
            </button>
          ) : (
            <Link to="/login" onClick={toggleMobileMenu}>
              LOGIN <span className="login-icon">👤</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
