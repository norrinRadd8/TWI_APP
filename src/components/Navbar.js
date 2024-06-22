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
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
          <a href="#section4">Section 4</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

