import React from 'react';
import '../styles/RestaurantGrid.css'; 

function RestaurantGrid() {
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

  return (
    <div className="restaurant-grid-sidebar">
      <h2 className="restaurant-grid-title">Quick Filters</h2>
      <div className="restaurant-grid-filter-section">
        <h3 className="restaurant-grid-subtitle">Cuisines</h3>
        <ul className="restaurant-grid-list">
          {cuisines.map((cuisine) => (
            <li key={cuisine} className="restaurant-grid-list-item">{cuisine}</li>
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
  );
}

export default RestaurantGrid;
