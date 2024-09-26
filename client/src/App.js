import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterPage from './components/Register';
import HomePage from './components/HomePage';
import BookTable from './components/RestaurantGrid';
import HotelDetails from './components/HotelDetails';
import React, { useState } from 'react';
import BookingPage from './components/BookingPage';
import HotelCards from './components/HotelCards';
import Header from './components/Header';
import hotel1 from './assests/hotel3.jpg';
import hotel2 from './assests/hotel4.jpg';
import hotel3 from './assests/hotel5.jpg';
import hotel4 from './assests/hotel6.jpg';
import hotel5 from './assests/hotel7.jpg';
import hotel6 from './assests/hotel8.jpg';


export const hotels = [
  {
    name: 'Outdoor Cafe',
    rating: 4.5,
    image: hotel1,
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'Hotel Patliputra Nirvana',
    rating: 4.5,
    image: hotel2,
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'J.Hind',
    rating: 4.5,
    image: hotel3,
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'Raddison Blu',
    rating: 4.5,
    image: hotel4,
    location: 'New York, NY',
    foodsServed: ['Continental', 'Italian', 'Indian'],
    timings: '24/7',
  },
  {
    name: 'The Raintree',
    rating: 4.0,
    image: hotel5,
    location: 'San Francisco, CA',
    foodsServed: ['Chinese', 'Mexican'],
    timings: '6:00 AM - 11:00 PM',
  },
  {
    name: 'Kipling Cafe',
    rating: 4.0,
    image: hotel6,
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
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hotel-cards" element={<HotelCards />} />
        <Route path="/book-table" element={<BookTable />} /> {/* Corrected the path here */}
        <Route path="/hotels/:id" element={<HotelDetails hotels={hotels} isLoggedIn={isLoggedIn} />} />
        <Route path="/book/:id" element={<BookingPage />} /> {/* Booking page route */}
      </Routes>
    </Router>
  );
}

export default App;
