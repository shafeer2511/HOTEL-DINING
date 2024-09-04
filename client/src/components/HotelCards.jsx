import React from 'react';
import '../styles/hotelCards.css';

function HotelCards({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-card-image" />
      <div className="hotel-card-content">
        <h3 className="hotel-card-name">{hotel.name}</h3>
        <p className="hotel-card-rating">Rating: {hotel.rating}/5</p>
        <p className="hotel-card-location">Location: {hotel.location}</p>
        <p className="hotel-card-food">Foods Served: {hotel.foodsServed.join(', ')}</p>
        <p className="hotel-card-timings">Timings: {hotel.timings}</p>
      </div>
    </div>
  );
}

export default HotelCards;
