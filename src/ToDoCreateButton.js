import React from 'react';
import './ToDoCreateButton.css'

const ToDoCreateButton = () => {
    return (
        <button 
            className="CreateTodoButton"
            onClick={(event) => {
                console.log( event)
                console.log ( event.target)
                }
                    }>
            +
        </button>
    );
};

export default ToDoCreateButton;