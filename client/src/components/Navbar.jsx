import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the arrow icon



function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FREENCY DiNE-iN
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
                style={{ cursor: 'pointer', marginLeft: '4px' }} // Adjust spacing
              />
            </div>
            {dropdown && (
              <ul className="navbar-dropdown">
                <li className="navbar-dropdown-item">
                  <Link to="/" className="navbar-dropdown-link">Home</Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link to="/rooms" className="navbar-dropdown-link">Rooms</Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link to="/dining" className="navbar-dropdown-link">Dining</Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link to="/login" className="navbar-dropdown-link">Login</Link>
                </li>
                <li className="navbar-dropdown-item">
                  <Link to="/register" className="navbar-dropdown-link">Sign Up</Link>
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
