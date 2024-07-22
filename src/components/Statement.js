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
        textRef.current.innerText = '"MOVE WITH POISE"';
        textRef.current.className = 'statement-text scale-up-fade-out';
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animation to finish

        // Fade out
        textRef.current.classList.remove('scale-up-fade-out');
        textRef.current.classList.add('hidden');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Short delay before next text

        // Display "BUILD RESILIENCE"
        textRef.current.innerText = '"BUILD RESILIENCE"';
        textRef.current.className = 'statement-text scale-up-fade-out';
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animation to finish

        // Fade out
        textRef.current.classList.remove('scale-up-fade-out');
        textRef.current.classList.add('hidden');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Short delay before next text

        // Display "IMPROVE PERFORMANCE"
        textRef.current.innerText = '"IMPROVE PERFORMANCE!"';
        textRef.current.className = 'statement-text';
        textRef.current.style.fontSize = '6rem';
        shudderEffect();
        await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for shudder effect

        // Fade out
        textRef.current.classList.add('hidden');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for fade-out to finish

        // Prepare for next loop
        textRef.current.innerText = '';
        textRef.current.classList.remove('hidden');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Short delay to ensure smooth transition
      }
    };

    animateText();
  }, []);

  return (
    <div className="statement-container">
      <div ref={textRef} className="statement-text"></div>
    </div>
  );
};

export default Statement;
