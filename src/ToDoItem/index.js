import React from 'react';
import './ToDoItem.css'

const ToDoItem = ( props ) => {
    return (

        <>

        <li
            className = 'TodoItem'>

            <span
                className={`Icon Icon-check ${props.completed&&"Icon-check--active"}`}
                onClick={ props.onCompleted }
            > 
            V  
            { props.completed }  
            </span>
            <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{ props.text } </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDeleted}
            > 

            X 

            </span>
    
        </li>

        </>
    );
};

export default ToDoItem;