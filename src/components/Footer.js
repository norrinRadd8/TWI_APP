import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Privacy from "./Privacy"; 

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault(); 
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <section id="footer">
      <footer className="footer_container">
        <div className="footer_logo">
          <img src="./images/logo-stacked.png" alt="Company Logo" className="logo" />
        </div>
        <div className="footer_content">
          <div className="footer_section">
            <p>info@twicoaching.com</p>
          </div>
        </div>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/alexelvy_performancecoach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social_icon" />
          </a>
        </div>
        <div className="footer_bottom">
          <p>&copy; {new Date().getFullYear()} Train With Intent. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" onClick={handleOpenModal}>
              Privacy Notice
            </a>
          </p>
        </div>
      </footer>
      
      <Privacy showModal={showModal} handleCloseModal={handleCloseModal} />
    </section>
  );
};

export default Footer;


