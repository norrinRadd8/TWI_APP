import React from 'react';
import Cta from './Cta';

const Mission = () => {
  return (
    <div className="mission_container">
      <div className="mission_content">
        {/* <h2 className="mission_title"><span className='transparent-outline'>MISSION</span></h2> */}
        
        {/* <div className="mission_images">
        <img src="./images/mission-image-1.jpg" alt="mission-img 1" className="image image1" />
      </div> */}
        <p className="mission_text">
        At TRAIN<span className='transparent-outline-green'>WITH</span>INTENT online, our mission is to empower individuals to achieve peak performance and optimal health through bespoke, 1-2-1 online coaching. We are dedicated to helping professional athletes and fitness enthusiasts alike to move freely, efficiently, and pain-free, while pushing the boundaries of their physical capabilities and achieving long-lasting health and vitality.
        </p>
        <Cta />
      </div>
      
    </div>
  );
};

export default Mission;
