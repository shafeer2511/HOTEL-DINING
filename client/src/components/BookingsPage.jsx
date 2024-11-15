import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BookingsPage.css';

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  // Fetch the booking details from the server
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/reservation_details');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings(); // Fetch bookings when the page loads
  }, []);

  return (
    <div className="bookings-page">
      <h2>Booking Details</h2>
      <div className="booking-list">
        <table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>User Name</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Reservation Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.restaurant_name}</td>
                  <td>{booking.user_name}</td>
                  <td>{booking.adults}</td>
                  <td>{booking.children}</td>
                  <td>{new Date(booking.reservation_date).toLocaleString()}</td> {/* Format reservation date */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No bookings available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingsPage;
