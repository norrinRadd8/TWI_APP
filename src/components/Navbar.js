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
    </section>
  );
};

export default NavBar;



// import React, { useState, useEffect } from 'react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const updateScreenSize = () => {
//     setIsLargeScreen(window.innerWidth >= 768);
//     if (window.innerWidth >= 768) {
//       setIsOpen(false); // Close the mobile menu when switching to a larger screen
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateScreenSize);
//     return () => window.removeEventListener('resize', updateScreenSize);
//   }, []);

//   return (
//     <nav className="navbar">
//       <img src='./images/header-logo-small.png' alt='Logo' className='nav-logo' />

//       {!isLargeScreen && (
//         <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       )}

//       {(isLargeScreen || isOpen) && (
//         <div className="dropdown-menu">
//           <a href="#results" onClick={() => setIsOpen(false)}>RESULTS</a>
//           <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
//           <a href="#testimonials" onClick={() => setIsOpen(false)}>TESTIMONIALS</a>
//           <a href="#philosophy" onClick={() => setIsOpen(false)}>PHILOSOPHY</a>
//           <a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState, useEffect } from 'react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const updateScreenSize = () => {
//     setIsLargeScreen(window.innerWidth >= 768);
//     if (window.innerWidth >= 768) {
//       setIsOpen(false); // Close the mobile menu when switching to a larger screen
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateScreenSize);
//     return () => window.removeEventListener('resize', updateScreenSize);
//   }, []);

//   return (
//     <nav className="navbar">
//       <img
//         src='./images/header-logo-small.svg'
//         alt='Logo'
//         className='nav-logo'
//       />

//       {!isLargeScreen && (
//         <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       )}

//       {(isLargeScreen || isOpen) && (
//         <div className="dropdown-menu">
//           <a href="#results" onClick={() => setIsOpen(false)}>RESULTS</a>
//           <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
//           <a href="#testimonials" onClick={() => setIsOpen(false)}>TESTIMONIALS</a>
//           <a href="#philosophy" onClick={() => setIsOpen(false)}>PHILOSOPHY</a>
//           <a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
