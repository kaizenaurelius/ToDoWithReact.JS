import React from 'react';
import './ToDoList.css'

const ToDoList = ( { children } ) => {
    return (

        <ul  className= 'TodoList'>
            { children }
        </ul>
    );
};

export default ToDoList;