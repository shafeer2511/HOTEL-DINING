import React from 'react';
 // Ensure this is defined if you want to use it
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your own ambience</h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            "Good food is the foundation of genuine happiness. Indulge in every bite, savor every flavor, and let your taste buds explore a world of culinary delights."
          </p>

          {/* Add the Search Box here */}
          <div className='search-box'>
            <input 
              type='text' 
              placeholder='Search...' 
              className='search-input' 
            />
            <button className='search-button'>Search</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
