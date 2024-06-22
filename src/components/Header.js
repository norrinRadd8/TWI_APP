import React from 'react';

const Header = () => {
  return (
    <div className='header_container'>
      <img src='./images/header-logo.png' alt='Logo' className='header_logo' />
      <div className="intro_text">
         <p >
            Move with poise, build resilience, improve performance!
          </p> 
      </div>
     
    </div>
  );
};

export default Header;