import React from 'react';

const ToDoItem = ( { text, completed }) => {
    return (

        <>

        <ul>

            <span> { completed  }</span>
            <p>{ text } </p>
            <span> X </span>
    
        </ul>

        </>
    );
};

export default ToDoItem;