// Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Install react-icons if not already installed

const Footer = () => {
    return (
        <footer className="footer_container">
            <div className="footer_logo">
                <img src="./images/logo-stacked.png" alt="Company Logo" className="logo" />
            </div>
            <div className="footer_content">
                {/* <div className="footer_section">
                    <h4>About Us</h4>
                    <p>
                        We are dedicated to delivering high-quality services and resources for our clients. Our mission is to provide excellence in everything we do, supporting athletes and fitness enthusiasts across the UK.
                    </p>
                </div> */}
                <div className="footer_section">
                    <h4>Contact Us</h4>
                    <p>info@trainwintent.com</p>
                </div>
            </div>
            <div className="footer_social">
                <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social_icon" />
                </a>
                <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social_icon" />
                </a>
                <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social_icon" />
                </a>
            </div>
            <div className="footer_bottom">
                <p>&copy; {new Date().getFullYear()} Train With Intent. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy">Privacy Notice</a> | 
                    <a href="/cookie-policy"> Cookie Policy</a> | 
                    <a href="/terms-conditions"> Terms & Conditions</a>
                </p>
                {/* <p>Website designed and developed by HW Developer.</p> */}
            </div>
        </footer>
    );
};

export default Footer;
