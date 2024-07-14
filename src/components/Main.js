import React from 'react';
import CTA from './Cta';

const Main = () => {
  return (
    <div className='main_container'>
      <div className='image_container'>
        <img src='./images/main-image.jpg' alt='Main' className='main_image' />
        </div>   
    <div>
    <img src='./images/header-logo.png' alt='Logo' className='header_logo' />
    </div> 
    <div className='main_cta'>
    < CTA /> 
    </div>
    
      <div className="intro_text">
         <p >
            Move with poise, build resilience, improve performance!
          </p> 
      
      </div>
      {/* <div className='main_text'>
        <h1 className='main_header'>
          <span className='transparent-outline-green'></span>
        </h1>
        <p className='main_paragraph'>
          At TRAIN<span className='transparent-outline-green'>WITH</span>INTENT online, our mission is to empower individuals to achieve peak performance and optimal health through bespoke, 1-2-1 online coaching. We are dedicated to helping professional athletes and fitness enthusiasts alike to move freely, efficiently, and pain-free, while pushing the boundaries of their physical capabilities and achieving long-lasting health and vitality.
        </p>
      </div> */}
    </div>
  );
};

export default Main;


