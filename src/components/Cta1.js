import React from 'react'

const Cta = () => {
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    const top = event.clientY - rect.top - radius;
    const left = event.clientX - rect.left - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.classList.add('ripple');

    button.appendChild(circle);

    setTimeout(() => {
      button.removeChild(circle);
    }, 600);
  };

  return (
    <div className='cta_container'>
      <a href="https://kahunas.io/form/nxr319">
        <button className="cta_button" onClick={createRipple}>
      GET THE RIGHT RESULTS
    </button>
    </a>
    </div>
    
  );
};

export default Cta;
