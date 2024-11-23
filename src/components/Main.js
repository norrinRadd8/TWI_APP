import React, { useState, useEffect } from 'react';
import CtaMain from './CtaMain';

const Main = () => {
  const [imageSrc, setImageSrc] = useState('./images/alex.jpg'); 

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth >= 768) {
        setImageSrc('./images/alex1.jpg'); 
      } else {
        setImageSrc('./images/alex.jpg'); 
      }
    };

    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);

    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);

  return (
    <section id="main">
      <div className="main_container">
        <div className="main_image_container">
          <img src={imageSrc} alt="Main" className="main_image" />
          
          <div className="overlay_content">
            <img src="./images/header-logo.png" alt="Logo" className="header_logo" />
            <div className="main_intro_text">
              <h5>MOVE WITH POISE, BUILD RESILIENCE, IMPROVE PERFORMANCE!</h5>
              <p>CREATED BY ALEX ELVY</p>
            </div>
            <CtaMain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;


