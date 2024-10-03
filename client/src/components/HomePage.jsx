import React from 'react';
import HotelCards from './HotelCards';
import '../styles/homePage.css';
import Header from './Header';
import Footer from './Footer';
import {hotels} from '../App';
function HomePage() {
  
    
    

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
      <Footer />
    </div>
      </>
  );
}

export default HomePage;
