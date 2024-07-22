import React, { useEffect, useRef } from 'react';

const Statement = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const shudderEffect = () => {
      textRef.current.classList.add('shudder');
      setTimeout(() => {
        textRef.current.classList.remove('shudder');
      }, 500);
    };

    const animateText = async () => {
      while (true) {
        // Display "MOVE WITH POISE"
        textRef.current.innerText = 'MOVE WITH POISE';
        textRef.current.className = 'statement-text scale-up-fade-out';
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animation to finish

        // Clear text and prepare for next text
        textRef.current.className = 'statement-text';
        await new Promise(resolve => setTimeout(resolve, 0)); // Short delay to ensure smooth transition

        // Display "BUILD RESILIENCE"
        textRef.current.innerText = 'BUILD RESILIENCE';
        textRef.current.className = 'statement-text scale-up-fade-out';
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animation to finish

        // Clear text and prepare for next text
        textRef.current.className = 'statement-text';
        await new Promise(resolve => setTimeout(resolve, 0)); // Short delay to ensure smooth transition

        // Display "IMPROVE PERFORMANCE"
        textRef.current.innerText = 'IMPROVE PERFORMANCE';
        textRef.current.className = 'statement-text';
        shudderEffect();
        await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for shudder effect

        // Clear text and prepare for loop
        textRef.current.className = 'statement-text fade-out';
        await new Promise(resolve => setTimeout(resolve, 0)); // Wait for fade-out to finish

        textRef.current.innerText = ''; // Ensure text is cleared before the next loop
      }
    };

    animateText();
  }, []);

  return (
    <div className="statement-container">
      <div ref={textRef} className="statement-text" style={{ fontSize: '4rem', fontWeight: 'bold' }}></div>
    </div>
  );
};

export default Statement;
