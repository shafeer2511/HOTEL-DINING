import React, { useState } from 'react';
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
    <div className="side-recommendation-bar">
      <h2>Quick Filters</h2>
      <div className="filter-section">
        <h3>Cuisines</h3>
        <ul>
          {cuisines.map((cuisine) => (
            <li key={cuisine}>{cuisine}</li>
          ))}
          <li>Show More (61)</li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Tags</h3>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantGrid;