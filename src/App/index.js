import React from 'react';
import { useState } from 'react';
import { AppUI } from './AppUi'
import { ToDoProvider } from '../ToDoContext';
//import './ToDoItem/ToDoItem.css'
//import './ToDoList.css'



const defaultToDos = [
    {   
        text: "Cortar cebolla",
        completed: false
    },
    {   
        text: "Hacer mercado",
        completed: false
    },
    {   
        text: "Estudiar programación ",
        completed: false
    },
    {   
        text: "Bañarme",
        completed: false
    },
    {   
      text: "Ver a José Juan",
      completed: false
  }
]

localStorage.setItem('TODOS_V1', JSON.stringify( defaultToDos ))





function App( ) {



  return (

    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  )


}



export default App;
