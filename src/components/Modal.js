import React from 'react';

const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal display-block') {
            handleClose();
        }
    };

    return (
        <div className={showHideClassName} onClick={handleClickOutside}>
            <section className="modal-main">
            <button className="close-button" onClick={handleClose}>
                    &#8617; {/* This is the HTML entity for a left arrow */}
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;
