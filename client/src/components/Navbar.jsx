import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setDropdown(prev => !prev);
  };

  // Handle clicks outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  // Close dropdown when clicking on any link
  const handleLinkClick = () => {
    setDropdown(false);
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HotelDining
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-profile">
            <div className="profile-container" onClick={handleDropdownToggle}>
              <PermIdentityIcon
                className="navbar-profile-icon"
                style={{ cursor: 'pointer' }}
              />
              <ExpandMoreIcon
                className="navbar-expand-icon"
                style={{ cursor: 'pointer', marginLeft: '18px' }}
              />
            </div>
            {dropdown && (
              <ul className="navbar-dropdown" ref={dropdownRef}>
                <li className="navbar-dropdown-item">
                  <Link
                    to="/"
                    className="navbar-dropdown-link"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link
                    to="/dining"
                    className="navbar-dropdown-link"
                    onClick={handleLinkClick}
                  >
                    Dining
                  </Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link
                    to="/login"
                    className="navbar-dropdown-link"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link
                    to="/register"
                    className="navbar-dropdown-link"
                    onClick={handleLinkClick}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
