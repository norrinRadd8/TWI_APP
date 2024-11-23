const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal show" : "modal";

    const handleClickOutside = (event) => {
        if (event.target.className.includes('modal')) {
            handleClose();
        }
    };

    return (
        <div className={showHideClassName} onClick={handleClickOutside}>
            <section className="modal-main">
                
                {children}
            </section>
            <button className="close-button" onClick={handleClose}>
                    &#10005;
                </button>
        </div>
    );
};



// import React from 'react';

// const Modal = ({ show, handleClose, children }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";

//     const handleClickOutside = (event) => {
//         if (event.target.className === 'modal display-block') {
//             handleClose();
//         }
//     };

//     return (
//         <div className={showHideClassName} onClick={handleClickOutside}>
//           <button className="close-button" onClick={handleClose}>
//             &#8617;
//           </button>
//           <section className="modal-main">
//             {children}
//           </section>
//         </div>
//       );
      


// };

export default Modal;


    // return (
    //     <div className={showHideClassName} onClick={handleClickOutside}>
    //         <section className="modal-main">
    //         <button className="close-button" onClick={handleClose}>
    //                 &#8617; {/* This is the HTML entity for a left arrow */}
    //             </button>
    //             {children}
    //         </section>
    //     </div>
    // );