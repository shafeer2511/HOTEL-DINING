import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/homePage.css';
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Arrow icons for next/prev

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]); // State for top-rated restaurants
  const [currentIndex, setCurrentIndex] = useState(0); // State for current restaurant index

  // Fetch top-rated restaurants from the API
  useEffect(() => {
    const fetchTopRatedRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/top-rated-restaurants');
        if (!response.ok) throw new Error('Failed to fetch top-rated restaurants');
        const data = await response.json();
        setTopRatedRestaurants(data);
      } catch (error) {
        console.error('Error fetching top-rated restaurants:', error);
      }
    };

    fetchTopRatedRestaurants();
  }, []);

  // Handle next button click (move right)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= topRatedRestaurants.length ? 0 : prevIndex + 1
    );
  };

  // Handle previous button click (move left)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? topRatedRestaurants.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className='home-header'>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="home-page">
        <h2 className="top-rated-heading">Top 10 Restaurants</h2>
        <div className="top-rated-restaurants">
          {topRatedRestaurants.length > 0 ? (
            <div className="restaurant-slider">
              <button onClick={handlePrev} aria-label="Previous">
                <FaArrowLeft />
              </button>

              <div className="restaurant-cards">
                {topRatedRestaurants
                  .slice(currentIndex, currentIndex + 5)
                  .map((restaurant, index) => (
                    <div key={index} className="restaurant-card">
                      <img src={restaurant.image} alt={restaurant.name} />
                      <h3>{restaurant.name}</h3>
                      <p>Location: {restaurant.location}</p>
                      <p>Rating: {restaurant.rating}</p>
                      <p>{restaurant.description}</p>
                    </div>
                  ))}
              </div>

              <button onClick={handleNext} aria-label="Next">
                <FaArrowRight />
              </button>
            </div>
          ) : (
            <p>No top-rated restaurants found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
