// import React from 'react';
// import Statement from './Statement';

// const Main = () => {
//   return (
//     <section id="main">
//     <div className='main_container'>
//       <div className='main_image_container'>
//         <img src='./images/main-image.jpg' alt='Main' className='main_image' />

        
//         <img src='./images/header-logo.png' alt='Logo' className='header_logo' />

      

      
      


//       <div className="main_intro_text">
//         <p>
//           MOVE WITH POISE, BUILD RESILIENCE, IMPROVE PERFORMANCE!
//         </p>
//         </div>
//       </div>

//     </div>
//     </section>
//   );
// };

// export default Main;

const Main = () => {
  return (
    <section id="main">
      <div className="main_container">
        <div className="main_image_container">
          <img src="./images/main-image.jpg" alt="Main" className="main_image" />
          
          {/* Add logo and intro text as overlay elements */}
          <div className="overlay_content">
            <img src="./images/header-logo.png" alt="Logo" className="header_logo" />
            <div className="main_intro_text">
              <p>MOVE WITH POISE, BUILD RESILIENCE, IMPROVE PERFORMANCE!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;



