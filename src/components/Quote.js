
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Quote = () => {
//   const quotes = [
//     "“I would highly recommend Alex to all footballers.”",
//     "“Alex's guidance has been a game changer for my career.”",
//     "“Working with Alex was the best decision I made this season.”",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <section id="quote">
//       <div className="quote-section">
//         <h3 className="quote-title">
//           <span className="transparent-outline">CLIENTS SAY..</span>
//         </h3>
//         <div className="quote-container">
//           <Slider {...settings}>
//             {quotes.map((quote, index) => (
//               <div key={index}>
//                 <p className="quote-text">{quote}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Quote;




import React from 'react';

const Quote = () => {
    return (
        <section id="quote">
        <div className="quote-section">
            <h3 className="quote-title"><span className='transparent-outline'>CLIENTS SAY..</span></h3>
            <div className="quote-container">
                <p className="quote-text">“I would highly recommend Alex to all footballers.”</p>
            </div>
        </div>
        </section>
    );
};

export default Quote;
