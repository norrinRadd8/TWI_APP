import React, { useState } from 'react';

const NavBar = ({ isHeaderVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="navbar">
      <nav className={`navbar ${isHeaderVisible ? 'hidden' : 'visible'}`}>
        <img src='./images/header-logo-small.png' alt='Logo' className='nav-logo' />

        <div className="menu-links">
          <a href="#results">RESULTS</a>
          <a href="#about">ABOUT</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#philosophy">PHILOSOPHY</a>
          <a href="#faqs">FAQs</a>
        </div>

        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isOpen && (
          <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <a href="#results" onClick={toggleMenu}>RESULTS</a>
            <a href="#about" onClick={toggleMenu}>ABOUT</a>
            <a href="#testimonials" onClick={toggleMenu}>TESTIMONIALS</a>
            <a href="#philosophy" onClick={toggleMenu}>PHILOSOPHY</a>
            <a href="#faqs" onClick={toggleMenu}>FAQs</a>
          </div>
        )}
      </nav>
    </section>
  );
};

export default NavBar;


