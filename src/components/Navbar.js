import React, { useState } from 'react';

const NavBar = ({ isHeaderVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isHeaderVisible ? 'hidden' : 'visible'}`}>
      <img src='./images/header-logo-small.png' alt='Logo' className='nav-logo' />
      <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#results" onClick={toggleMenu}>RESULTS</a>
          <a href="#about" onClick={toggleMenu}>ABOUT</a>
          <a href="#testimonials" onClick={toggleMenu}>TESTIMONIALS</a>
          <a href="#philosophy" onClick={toggleMenu}>PHILOSOPHY</a>
          <a href="#faqs" onClick={toggleMenu}>FAQs</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
