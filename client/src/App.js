import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import HomePage from './components/HomePage';
import BookTable from './components/RestaurantGrid';
import HotelDetails from './components/HotelDetails';
import React, { useState } from 'react';
import BookingPage from './components/BookingPage';
import HotelCards from './components/HotelCards';
import Header from './components/Header';

// Define the hotels array here or import if it's in a separate file
const hotels = [
  {
    name: 'Outdoor Cafe',
    rating: 4.5,
    image: '../assets/hotel3.jpg',
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'Hotel Patliputra Nirvana',
    rating: 4.5,
    image: '../assets/hotel4.jpg',
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'J.Hind',
    rating: 4.5,
    image: '../assets/hotel5.jpg',
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'Raddison Blu',
    rating: 4.5,
    image: '../assets/hotel6.jpg',
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'The Raintree',
    rating: 4.0,
    image: '../assets/hotel7.jpg',
    location: 'San Francisco, CA',
    foodsServed: ['Chinese', 'Mexican'],
    timings: '6:00 AM - 11:00 PM',
  },
  {
    name: 'Kipling Cafe',
    rating: 4.0,
    image: '../assets/hotel8.jpg',
    location: 'San Francisco, CA',
    foodsServed: ['Chinese', 'Mexican'],
    timings: '6:00 AM - 11:00 PM',
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Header" element={<Header />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hotel-cards" element={<HotelCards/>}/>
        <Route path="/Book Table" element={<BookTable />} />
        <Route path="/hotels/:id" element={<HotelDetails hotels={hotels} isLoggedIn={isLoggedIn} />} />
        <Route path="/book/:id" element={<BookingPage />} /> {/* Booking page route */}

      </Routes>
    </Router>
  );
}

export default App;
