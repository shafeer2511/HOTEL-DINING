import React from 'react';
import HotelCards from './HotelCards';
import '../styles/homePage.css';

function HomePage() {
  const hotels = [
    {
        name: 'Luxury Stay',
        rating: 4.5,
        image:  '../assests/hotel3.jpg',
        location: 'New York, NY',
        foodsServed: ['Continental', 'Italian', 'Indian'],
        timings: '24/7',
    },

    {
      name: 'Luxury Stay',
      rating: 4.5,
      image: '../assests/hotel3.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'Luxury Stay',
      rating: 4.5,
      image: '../assests/hotel3.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'Luxury Stay',
      rating: 4.5,
      image: '../assests/hotel3.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'Cozy Inn',
      rating: 4.0,
      image: '../assests/hotel3.jpg',
      location: 'San Francisco, CA',
      foodsServed: ['Chinese', 'Mexican'],
      timings: '6:00 AM - 11:00 PM',
    },

    {
      name: 'Cozy Inn',
      rating: 4.0,
      image: '../assests/hotel3.jpg',
      location: 'San Francisco, CA',
      foodsServed: ['Chinese', 'Mexican'],
      timings: '6:00 AM - 11:00 PM',
    },

    
    
  ];

  return (
    <div className="home-page">
      {/* <div className="hotel-grid"> */}
      {hotels.map((hotel, index) => (
        <HotelCards key={index} hotel={hotel} />
      ))}
    </div>
      // </div>
  );
}

export default HomePage;
