import React from 'react';

const ToDoItem = ( props ) => {
    return (

        <>

        <li
            className = 'TodoItem'>

            <span
            className={`Icon Icon-check ${props.completed&&"Icon-check--active"}`}> V  { props.completed }  </span>
            <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{ props.text } </p>
            <span className="Icon Icon-delete"> X </span>
    
        </li>

        </>
    );
};

export default ToDoItem;