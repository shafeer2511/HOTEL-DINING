import React, { useState } from 'react';
import '../styles/RestaurantGridAndList.css'; // Create a new CSS file for the combined component

const RestaurantGridAndList = () => {
  const [filter, setFilter] = useState(""); // For filtering restaurants

  const cuisines = [
    'North Indian',
    'Chinese',
    'Fast Food',
    'South Indian',
    // Add more cuisines as needed
  ];

  const tags = [
    'Flechazo',
    'Hi-Fi Roof Top Bar',
    'AB\'s Absolute Barbecues',
    // Add more tags as needed
  ];

  const restaurants = [
    {
      id: 1,
      name: "The Spice Route",
      image: "restaurant1.jpg",
      cuisine: "North Indian",
      location: "Connaught Place, Delhi",
      rating: 4.7,
    },
    {
      id: 2,
      name: "Golden Dragon",
      image: "restaurant2.jpg",
      cuisine: "Chinese",
      location: "MG Road, Bengaluru",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Pizza Palace",
      image: "restaurant3.jpg",
      cuisine: "Fast Food",
      location: "Main Street, Mumbai",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Coconut Lagoon",
      image: "restaurant4.jpg",
      cuisine: "South Indian",
      location: "Marine Drive, Kochi",
      rating: 4.3,
    },
    {
        id: 5,
        name: "Barbeque Nation",
        image: "restaurant5.jpg",
        cuisine: "North Indian",
        location: "High Street, Pune",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Dragon Wok",
        image: "restaurant6.jpg",
        cuisine: "Chinese",
        location: "Cyber Hub, Gurgaon",
        rating: 4.4,
      },
      {
        id: 7,
        name: "Burger Shack",
        image: "restaurant7.jpg",
        cuisine: "Fast Food",
        location: "Hill Road, Bandra, Mumbai",
        rating: 4.1,
      },
      {
        id: 8,
        name: "Dosa Plaza",
        image: "restaurant8.jpg",
        cuisine: "South Indian",
        location: "IT Park, Chennai",
        rating: 4.2,
      },
      {
        id: 9,
        name: "The Royal Grill",
        image: "restaurant9.jpg",
        cuisine: "North Indian",
        location: "Banjara Hills, Hyderabad",
        rating: 4.8,
      },
      {
        id: 10,
        name: "Szechuan Palace",
        image: "restaurant10.jpg",
        cuisine: "Chinese",
        location: "Park Street, Kolkata",
        rating: 4.5,
      },
      {
        id: 11,
        name: "Taco Fiesta",
        image: "restaurant11.jpg",
        cuisine: "Fast Food",
        location: "Sector 29, Noida",
        rating: 4.3,
      },
      {
        id: 12,
        name: "Idli Express",
        image: "restaurant12.jpg",
        cuisine: "South Indian",
        location: "Whitefield, Bengaluru",
        rating: 4.6,
      },
      {
        id: 13,
        name: "The Curry House",
        image: "restaurant13.jpg",
        cuisine: "North Indian",
        location: "MG Road, Ahmedabad",
        rating: 4.5,
      },
      {
        id: 14,
        name: "Mandarin Magic",
        image: "restaurant14.jpg",
        cuisine: "Chinese",
        location: "South Extension, Delhi",
        rating: 4.2,
      },
      {
        id: 15,
        name: "Burger King",
        image: "restaurant15.jpg",
        cuisine: "Fast Food",
        location: "Phoenix Mall, Chennai",
        rating: 4.1,
      },
      {
        id: 16,
        name: "Udupi Delight",
        image: "restaurant16.jpg",
        cuisine: "South Indian",
        location: "Salt Lake, Kolkata",
        rating: 4.7,
      },
  ];

  const handleFilterClick = (cuisine) => {
    setFilter(cuisine);
  };

  // Filtering restaurants based on selected cuisine
  const filteredRestaurants = filter
    ? restaurants.filter((restaurant) => restaurant.cuisine === filter)
    : restaurants;

  return (
    <div className="restaurant-grid-container">
      <div className="restaurant-grid-sidebar">
        <h2 className="restaurant-grid-title">Quick Filters</h2>
        <div className="restaurant-grid-filter-section">
          <h3 className="restaurant-grid-subtitle">Cuisines</h3>
          <ul className="restaurant-grid-list">
            {cuisines.map((cuisine) => (
              <li
                key={cuisine}
                className="restaurant-grid-list-item"
                onClick={() => handleFilterClick(cuisine)} // Filter on click
              >
                {cuisine}
              </li>
            ))}
            <li className="restaurant-grid-show-more">Show More (61)</li>
          </ul>
        </div>
        <div className="restaurant-grid-filter-section">
          <h3 className="restaurant-grid-subtitle">Tags</h3>
          <ul className="restaurant-grid-list">
            {tags.map((tag) => (
              <li key={tag} className="restaurant-grid-list-item">{tag}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
              <p><strong>Location:</strong> {restaurant.location}</p>
              <p><strong>Rating:</strong> ⭐ {restaurant.rating}/5</p>
              <button className="reserve-btn">Reserve Table</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGridAndList;
