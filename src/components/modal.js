import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
    return ReactDOM.createPortal(
        <div>
            <div>
                Modal demo text
            </div>
        </div>, 
        document.querySelector("#modal")
    );
};

export default Modal;