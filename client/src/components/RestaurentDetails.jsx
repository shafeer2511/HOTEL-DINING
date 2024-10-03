import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/RestaurantDetails.css'; // Create this CSS file for styling

// Import other images as needed

const RestaurantDetails = ({ restaurants }) => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const navigate = useNavigate(); // For navigation

  // Find the selected restaurant based on the ID
  const restaurant = restaurants.find((res) => res.id === parseInt(id));

  if (!restaurant) {
    return <div className="not-found">Restaurant not found!</div>;
  }

  return (
    <div className="restaurant-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-details-img" />
      <h1 className="restaurant-name">{restaurant.name}</h1>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <p><strong>Rating:</strong> ⭐ {restaurant.rating}/5</p>
      <p className="restaurant-description">{restaurant.description}</p>

      <h3>Popular Menu Items:</h3>
      <ul className="menu-list">
        {restaurant.menu.map((item, index) => (
          <li key={index} className="menu-item">{item}</li>
        ))}
      </ul>

      <button className="reserve-btn" onClick={() => navigate(`/book/${restaurant.id}`)}>
        Make a Reservation
      </button>
    </div>
  );
};

export default RestaurantDetails;
