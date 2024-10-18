// Results.js
import React from 'react';
import Cta1 from '../components/Cta1';

const Results = () => {
  const images = [
    './images/Sam.png',
    './images/Dale.png',
    './images/George.png',
    './images/Maisey.png',
    './images/Paul.png',
    './images/Skye.png',
    './images/Arun.png',
  ];

  return (
    <section id="results">
    <div className="results_container">
        <h1 className="results_title"><span className='transparent-outline'>RESULTS</span></h1>
      <p className="results_text">
        Experience the transformation with our cutting-edge solutions. Our approach ensures that you achieve the results you desire.
      </p>
      <div className="image_grid">
        {images.map((src, index) => (
          <div key={index} className="results_image_container">
            <img src={src} alt={`Transformative result ${index + 1}`} className="result_image" />
          </div>
        ))}
      </div>
      <Cta1 />
    </div>
    </section>
  );
};

export default Results;
