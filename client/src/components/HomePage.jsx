import React from 'react';
import HotelCards from './HotelCards';
import '../styles/homePage.css';
import Header from './Header';

function HomePage() {
  const hotels = [
    {
        name: 'Outdoor Cafe',
        rating: 4.5,
        image:  '../assests/hotel3.jpg',
        location: 'New York, NY',
        foodsServed: ['Continental', 'Italian', 'Indian'],
        timings: '24/7',
    },

    {
      name: 'Hotel Patliputra Nirvana',
      rating: 4.5,
      image: '../assests/hotel4.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'J.Hind',
      rating: 4.5,
      image: '../assests/hotel5.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'Raddison Blu',
      rating: 4.5,
      image: '../assests/hotel6.jpg',
      location: 'New York, NY',
      foodsServed: ['Continental', 'Italian', 'Indian'],
      timings: '24/7',
    },

    {
      name: 'The Raintree ',
      rating: 4.0,
      image: '../assests/hotel7.jpg',
      location: 'San Francisco, CA',
      foodsServed: ['Chinese', 'Mexican'],
      timings: '6:00 AM - 11:00 PM',
    },

    {
      name: 'Kipling Cafe',
      rating: 4.0,
      image: '../assests/hotel8.jpg',
      location: 'San Francisco, CA',
      foodsServed: ['Chinese', 'Mexican'],
      timings: '6:00 AM - 11:00 PM',
    },

    
    
  ];

  return (
    <>
    
    <div className='home-header'>
    <Header/>
    </div>
    <div className="home-page">
      {/* <div className="hotel-grid"> */}
      {hotels.map((hotel, index) => (
        <HotelCards key={index} hotel={hotel} index={index}/>
      ))}
    </div>
      </>
  );
}

export default HomePage;
