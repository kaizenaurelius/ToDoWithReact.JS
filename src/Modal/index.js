import React from "react";
import  ReactDOM  from "react-dom";


function Modal( { children } ) { //children indica que muestre cualquier contenido que enviemos por dentro

    return ReactDOM.createPortal(

        <div className="Modal">
        
            { children }

        </div>,
        document.getElementById( 'modal')
    )

}

export { Modal };