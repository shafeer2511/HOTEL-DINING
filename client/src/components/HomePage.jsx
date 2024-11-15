import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/homePage.css';
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Arrow icons for next/prev
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]); // State for top-rated restaurants
  const [allRestaurants, setAllRestaurants] = useState([]); // State for all restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // State for filtered results
  const [currentIndex, setCurrentIndex] = useState(0); // State for current restaurant index
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch top-rated restaurants from the API
  useEffect(() => {
    const fetchTopRatedRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/top-rated-restaurants'); // Endpoint for top-rated
        if (!response.ok) throw new Error('Failed to fetch top-rated restaurants');
        const data = await response.json();
        setTopRatedRestaurants(data); // Store top-rated restaurants
      } catch (error) {
        console.error('Error fetching top-rated restaurants:', error);
      }
    };

    fetchTopRatedRestaurants();
  }, []);

  // Fetch all restaurants from the API for searching
  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/restaurants'); // Corrected endpoint for all restaurants
        if (!response.ok) throw new Error('Failed to fetch all restaurants');
        const data = await response.json();
        setAllRestaurants(data); // Store all restaurants for filtering
        setFilteredRestaurants(data); // Initialize filtered restaurants with the full data
      } catch (error) {
        console.error('Error fetching all restaurants:', error);
      }
    };

    fetchAllRestaurants();
  }, []);

  // Update filtered restaurants based on search query
  useEffect(() => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setCurrentIndex(0); // Reset to first restaurant when filtering
  }, [searchQuery, allRestaurants]);

  // Handle next button click (move right)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topRatedRestaurants.length);
  };

  // Handle previous button click (move left)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? topRatedRestaurants.length - 1 : prevIndex - 1
    );
  };

  // Handle click to view restaurant details
  const handleViewDetails = (id) => {
    navigate(`/restaurant/${id}`); // Navigate to restaurant details
  };

  return (
    <>
      <div className='home-header'>
        <Header 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
      </div>
      <div className="home-page">
        {searchQuery ? ( // Conditional rendering based on searchQuery
          <>
            <h2 className="search-results-heading">Search Results</h2>
            <div className="search-results">
              {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map((restaurant) => (
                  <div 
                    key={restaurant.id} 
                    className="hotel-card"
                    onClick={() => handleViewDetails(restaurant.id)} // Navigate to details on click
                  >
                    <img
                      src={`/assests/${restaurant.image}`} // Fixed path to assets
                      alt={restaurant.name}
                      className="hotel-img"
                    />
                    <h3>{restaurant.name}</h3>
                    <p>Location: {restaurant.location}</p>
                    <p>Rating: {restaurant.rating}</p>
                    <p>{restaurant.description}</p>
                  </div>
                ))
              ) : (
                <p>No restaurants found matching your search</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="top-rated-heading">Top 10 Restaurants</h2>
            <div className="top-rated-hotels">
              {topRatedRestaurants.length > 0 ? (
                <div className="hotel-slider">
                  <button onClick={handlePrev} aria-label="Previous">
                    <FaArrowLeft />
                  </button>

                  {/* Displaying the current top-rated restaurant */}
                  <div
                    className="hotel-card"
                    onClick={() => handleViewDetails(topRatedRestaurants[currentIndex]?.id)} // Added onClick
                  >
                    <img
                      src={`/assests/${topRatedRestaurants[currentIndex]?.image}`} // Fixed path to assets
                      alt={topRatedRestaurants[currentIndex]?.name}
                      className="hotel-img"
                    />
                    <h3>{topRatedRestaurants[currentIndex]?.name}</h3>
                    <p>Location: {topRatedRestaurants[currentIndex]?.location}</p>
                    <p>Rating: {topRatedRestaurants[currentIndex]?.rating}</p>
                    <p>⭐</p>
                    <p>{topRatedRestaurants[currentIndex]?.description}</p>
                  </div>

                  <button onClick={handleNext} aria-label="Next">
                    <FaArrowRight />
                  </button>
                </div>
              ) : (
                <p>No top-rated restaurants found</p>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
