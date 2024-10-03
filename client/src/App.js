import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Login'; // Make sure this matches your component name
import RegisterPage from './components/Register';
import HomePage from './components/HomePage';
import RestaurantGridAndList from './components/RestaurantGridAndList';
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
import spiceroute from './assests/Spice-Routes-Asian.png';
import rc from './assests/RC.avif';
import RestaurantDetails from './components/RestaurentDetails';
import Footer from './components/Footer';
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

export const restaurants = [
  {
    id: 1,
    name: "The Spice Route",
    image: spiceroute,
    cuisine: "North Indian",
    location: "Connaught Place, Delhi",
    rating: 4.7,
    description: "A delightful experience of North Indian cuisine with rich flavors and aromatic spices.",
    menu: ["Butter Chicken", "Paneer Tikka", "Biryani", "Naan"],
  },
  {
    id: 2,
    name: "Royal Chettinadu",
    image: rc,
    cuisine: "Chinese",
    location: "MG Road, Bengaluru",
    rating: 4.5,
    description: "Authentic Chinese dishes with a modern twist, offering a cozy dining experience.",
    menu: ["Kung Pao Chicken", "Spring Rolls", "Sweet and Sour Pork", "Fried Rice"],
  },
];

// ProtectedRoute component to guard the booking page
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;

}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This state determines if the user is logged in or not.

return (
  <Router>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path="/Header" element={<Header />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/hotel-cards" element={<HotelCards />} />
      <Route path="/book-table" element={<RestaurantGridAndList />} />
      
      {/* Restaurant Details Route */}
      <Route
        path="/restaurant/:id"
        element={<RestaurantDetails restaurants={restaurants} />}
      />

      <Route path="/hotels/:id" element={<HotelDetails hotels={hotels} isLoggedIn={isLoggedIn} />} />

      {/* Protect the BookingPage route */}
      <Route
        path="/book/:id"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <BookingPage />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Footer />
    
  </Router>
);
}

export default App;