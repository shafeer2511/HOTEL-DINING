import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

// List of all districts in Tamil Nadu
const tamilNaduDistricts = [
  "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", 
  "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", 
  "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Perambalur", 
  "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", 
  "Thanjavur", "Theni", "Tiruchirappalli", "Tirunelveli", "Tirupathur", 
  "Tiruvallur", "Tiruvannamalai", "Vellore", "Virudhunagar", 
  "Thiruvarur", "Tenkasi", "Nilgiris"
];

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(''); // State to store selected location
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update the login state to false
    navigate('/'); // Navigate to the homepage after logging out
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    navigate(`/restaurants/location/${location}`); // Navigate to the restaurants page based on selected location
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section: Logo */}
        <div className="logo">
          <Link to="/">FREENCY DINE-IN</Link>
        </div>

        {/* Location Selector */}
        <select className="location-selector" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select Location</option>
          {tamilNaduDistricts.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>

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
