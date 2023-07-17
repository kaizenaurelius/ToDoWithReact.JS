import React from "react";
import  ReactDOM  from "react-dom";
import './Modal.css';

function Modal( { children } ) { //children indica que muestre cualquier contenido que enviemos por dentro

    return ReactDOM.createPortal(

        <div className="ModalBackground">
        
            { children }

        </div>,
        document.getElementById( 'modal')
    )

}

export { Modal };