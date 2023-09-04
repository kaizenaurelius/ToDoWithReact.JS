import React from 'react';
import './ToDoItem.css'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'


const ToDoItem = ( props ) => {
    return (

        <>

        <li
            className = 'TodoItem'>

            <span
                className={`Icon Icon-check ${props.completed&&'Icon-check--active'}`}
                onClick={ props.onCompleted }
            > 
            <CheckIcon></CheckIcon>  
            { props.completed }  
            </span>
            <p className={`${props.completed?'TodoItem-p TodoItem-p--complete' :'TodoItem-p' }`}>{ props.text } </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDeleted}
            > 

            <XMarkIcon></XMarkIcon>

            </span>
    
        </li>

        </>
    );
};

export default ToDoItem;