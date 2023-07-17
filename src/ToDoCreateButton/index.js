import React from 'react';
import './ToDoCreateButton.css'

const ToDoCreateButton = ( { setOpenModal }) => {
    return (
        <button 
            className="CreateTodoButton"
            onClick={ () => {
                setOpenModal(state => !state)
            }
                    }>
            +
        </button>
    );
};

export default ToDoCreateButton;