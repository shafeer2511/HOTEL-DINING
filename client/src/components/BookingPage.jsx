import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css'; // Create this file for styling

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  
  // Example cost calculation, adjust as needed
  const costPerAdult = 20; // Cost per adult
  const costPerChild = 10; // Cost per child

  const totalCost = (adults * costPerAdult) + (children * costPerChild);

  const handleBooking = () => {
    // Handle booking logic here
    console.log(`Booking for ${adults} adults and ${children} children at hotel ID ${id}.`);
    // For now, just navigate back to home or any other page
    navigate('/');
  };

  return (
    <div className="booking-page">
      <h2>Book a Table</h2>
      <div className="booking-form">
        <label>
          Number of Adults:
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
            min="0"
          />
        </label>
        <label>
          Number of Children:
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
            min="0"
          />
        </label>
        <p>Total Cost: ${totalCost}</p>
        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    </div>
  );
}

export default BookingPage;
