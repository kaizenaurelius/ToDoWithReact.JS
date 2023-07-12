import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';


function ToDoCounterMsg(  ) {
    const {
      completedToDos,
      totalToDos
    } =React.useContext( ToDoContext )
    return (
      <h1 className='ToDoCounter'>
        Has completado <span> { completedToDos }</span>  de  <span> { totalToDos }  </span>To Dos
      </h1>
    );
  }

export { ToDoCounterMsg } 