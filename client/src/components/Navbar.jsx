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

const Navbar = ({ isLoggedIn, setIsLoggedIn, setSelectedCity }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle location selection change
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setSelectedCity(location); // Pass the selected city to App.js for filtering
  };

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update the login status
    localStorage.setItem('isLoggedIn', 'false'); // Update local storage
    navigate('/'); // Redirect to homepage on logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">FREENCY DINE-IN</Link>
        </div>

        <select className="location-selector" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select Location</option>
          {tamilNaduDistricts.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">{isMobileMenuOpen ? '✖' : '☰'}</span>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/book-table" onClick={toggleMobileMenu}>Book a Table</Link>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className="login-btn" onClick={toggleMobileMenu}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
