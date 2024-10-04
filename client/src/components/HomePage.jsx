import React, { useState } from 'react';
import HotelCards from './HotelCards';
import Header from './Header';
import '../styles/homePage.css';
import { hotels } from '../App'; // Assuming hotels array is imported from App.js or similar
import Footer from './Footer';
function HomePage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Filter hotels based on the search query
  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.foodsServed.some(food => food.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div className='home-header'>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Pass state and setter */}
      </div>
      <div className="home-page">
        <h2 className="top-picks-heading">Top Picks</h2>
        <div className="hotel-grid">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <HotelCards key={index} hotel={hotel} index={index} />
            ))
          ) : (
            <p>No hotels match your search</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
