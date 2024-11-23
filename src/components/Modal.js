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

export default Modal;
