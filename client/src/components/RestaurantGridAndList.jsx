import React, { useState, useEffect } from 'react';
import '../styles/RestaurantGridAndList.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const RestaurantGridAndList = () => {
  const [restaurants, setRestaurants] = useState([]); // Store fetched restaurant data
  const [cuisineFilter, setCuisineFilter] = useState(""); // For filtering cuisines
  const [tagFilter, setTagFilter] = useState(""); // For filtering by veg/non-veg
  const navigate = useNavigate();
  
  const cuisines = [
    'North Indian',
    'Chinese',
    'Fast Food',
    'South Indian',
    // Add more cuisines as needed
  ];

  const tags = [
    'Veg',
    'Non-Veg',
  ];

  // Fetch restaurant data from the API
  useEffect(() => {
    fetch('http://localhost:3000/api/restaurants') // Ensure the URL matches your backend
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching restaurant data:', error));
  }, []);

  const handleCuisineFilterClick = (cuisine) => {
    // Toggle cuisine filter on click
    setCuisineFilter((prevFilter) => (prevFilter === cuisine ? "" : cuisine));
  };

  const handleTagFilterClick = (tag) => {
    // Toggle tag filter on click
    setTagFilter((prevFilter) => (prevFilter === tag ? "" : tag));
  };

  // Filtering restaurants based on selected cuisine and tag
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine = cuisineFilter ? restaurant.cuisine === cuisineFilter : true;
    const matchesTag = tagFilter 
      ? (tagFilter === 'Veg' ? restaurant.is_veg === true : restaurant.is_veg === false) 
      : true; 
    return matchesCuisine && matchesTag;
  });

  const handleViewDetails = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div>
      <div className="restaurant-grid-container">
        <div className="restaurant-grid-sidebar">
          <h2 className="restaurant-grid-title">Quick Filters</h2>
          <div className="restaurant-grid-filter-section">
            <h3 className="restaurant-grid-subtitle">Cuisines</h3>
            <ul className="restaurant-grid-list">
              {cuisines.map((cuisine) => (
                <li
                  key={cuisine}
                  className={`restaurant-grid-list-item ${cuisineFilter === cuisine ? 'active' : ''}`}
                  onClick={() => handleCuisineFilterClick(cuisine)} // Filter on click
                >
                  {cuisine}
                </li>
              ))}
            </ul>
          </div>
          <div className="restaurant-grid-filter-section">
            <h3 className="restaurant-grid-subtitle">Tags</h3>
            <ul className="restaurant-grid-list">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={`restaurant-grid-list-item ${tagFilter === tag ? 'active' : ''}`}
                  onClick={() => handleTagFilterClick(tag)} // Filter on click
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={`/assets/${restaurant.image}`} alt={restaurant.name} className="restaurant-img" />
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <p><strong>Location:</strong> {restaurant.location}</p>
                <p><strong>Rating:</strong> ⭐ {restaurant.rating}/5</p>
                <button className="view-details-btn" onClick={() => handleViewDetails(restaurant.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantGridAndList;
