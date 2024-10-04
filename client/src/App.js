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


import pp from './assests/pizzapalace.jpeg';
import cl from './assests/coconut lagoon.jpeg';
import bq from './assests/barbeque.jpeg';
import dw from './assests/dragonwok.avif';
import burger from './assests/burger.jpeg';
import dosaplaza from './assests/dosaplaza.jpeg';
import rgr from './assests/rgr.jpeg';
import sz from './assests/szechuan.jpeg';
import taco from './assests/taco.jpeg';
import idly from './assests/idly_express.jpeg';

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
    {
      id: 3,
      name: "Pizza Palace",
      image: pp,
      cuisine: "Fast Food",
      location: "Main Street, Mumbai",
      rating: 4.0,
      description: "A haven for pizza lovers, offering a wide range of toppings and flavors.",
      menu: ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza", "Veggie Delight"],
    },
    {
      id: 4,
      name: "Coconut Lagoon",
      image: cl,
      cuisine: "South Indian",
      location: "Marine Drive, Kochi",
      rating: 4.3,
      description: "Experience the flavors of Kerala with a range of traditional dishes.",
      menu: ["Fish Curry", "Dosa", "Sambar", "Appam"],
    },
    {
      id: 5,
      name: "Barbeque Nation",
      image: bq,
      cuisine: "North Indian",
      location: "High Street, Pune",
      rating: 4.6,
      description: "A popular chain known for its live grilling experience and diverse buffet.",
      menu: ["Tandoori Chicken", "Paneer Tikka", "Grilled Fish", "Variety of Salads"],
    },
    {
      id: 6,
      name: "Dragon Wok",
      image: dw,
      cuisine: "Chinese",
      location: "Cyber Hub, Gurgaon",
      rating: 4.4,
      description: "Savor authentic Chinese flavors with a contemporary dining experience.",
      menu: ["Chow Mein", "Kung Pao Shrimp", "Fried Rice", "Spring Rolls"],
    },
    {
      id: 7,
      name: "Burger Shack",
      image: burger,
      cuisine: "Fast Food",
      location: "Hill Road, Bandra, Mumbai",
      rating: 4.1,
      description: "Indulge in juicy burgers with a variety of sides and shakes.",
      menu: ["Classic Cheeseburger", "Veggie Burger", "Sweet Potato Fries", "Milkshake"],
    },
    {
      id: 8,
      name: "Dosa Plaza",
      image: dosaplaza,
      cuisine: "South Indian",
      location: "IT Park, Chennai",
      rating: 4.2,
      description: "A casual dining spot specializing in various types of dosas.",
      menu: ["Masala Dosa", "Onion Dosa", "Paneer Dosa", "Mysore Dosa"],
    },
    {
      id: 9,
      name: "The Royal Grill",
      image: rgr,
      cuisine: "North Indian",
      location: "Banjara Hills, Hyderabad",
      rating: 4.8,
      description: "Fine dining experience with a blend of traditional and modern Indian cuisines.",
      menu: ["Biryani", "Kebabs", "Butter Chicken", "Dal Makhani"],
    },
    {
      id: 10,
      name: "Szechuan Palace",
      image: sz,
      cuisine: "Chinese",
      location: "Park Street, Kolkata",
      rating: 4.5,
      description: "Experience the heat of Szechuan cuisine with authentic dishes.",
      menu: ["Szechuan Noodles", "Hot and Sour Soup", "Chili Chicken", "Mapo Tofu"],
    },
    {
      id: 11,
      name: "Taco Fiesta",
      image: taco,
      cuisine: "Fast Food",
      location: "Sector 29, Noida",
      rating: 4.3,
      description: "A lively spot for taco lovers offering a variety of fillings.",
      menu: ["Chicken Tacos", "Veggie Tacos", "Nachos", "Quesadilla"],
    },
    {
      id: 12,
      name: "Idli Express",
      image: idly,
      cuisine: "South Indian",
      location: "Whitefield, Bengaluru",
      rating: 4.6,
      description: "Quick service with a focus on traditional South Indian breakfast items.",
      menu: ["Idli", "Vada", "Sambar", "Chutney"],
    },
    {
      id: 13,
      name: "Cafe Mocha",
      image: 'path/to/cafemocha.jpg',
      cuisine: "Cafe",
      location: "Juhu, Mumbai",
      rating: 4.2,
      description: "A cozy cafe known for its coffee, desserts, and a relaxed atmosphere.",
      menu: ["Espresso", "Chocolate Lava Cake", "Pasta", "Sandwiches"],
    },
    {
      id: 14,
      name: "Italian Bistro",
      image: 'path/to/italianbistro.jpg',
      cuisine: "Italian",
      location: "Connaught Place, Delhi",
      rating: 4.5,
      description: "Authentic Italian dining experience with a wide range of pizzas and pastas.",
      menu: ["Pasta Alfredo", "Margherita Pizza", "Tiramisu", "Bruschetta"],
    },
    {
      id: 15,
      name: "The Green Bowl",
      image: 'path/to/greenbowl.jpg',
      cuisine: "Health Food",
      location: "Koregaon Park, Pune",
      rating: 4.7,
      description: "Healthy eating with a variety of salads and smoothies.",
      menu: ["Quinoa Salad", "Green Smoothie", "Avocado Toast", "Fruit Bowl"],
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
      <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} />}
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
    
    
  </Router>
);
}

export default App;