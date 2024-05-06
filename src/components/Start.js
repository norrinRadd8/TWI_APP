import React from 'react';

import '../index'; // Import the CSS file

const Start = () => {
  return (
    <div className="start-container">
      <h1 className="title">TWI</h1>
      <button className="start-button" onClick={() => console.log('Start button clicked')}>
        Start
      </button>
    </div>
  );
};

export default Start;
