import React from 'react';
import { ToDoCounterMsg, } from './ToDoCounterMsg'
import ToDoList from './ToDoList';
import ToDoCreateButton from './ToDoCreateButton';
import ToDoItem from './ToDoItem';
import ToDoSearch from './ToDoSearch';
import './ToDoItem.css'
import './ToDoList.css'



const defaultToDos = [
    {   
        text: "Cortar cebolla",
        completed: true
    },
    {   
        text: "Hacer mercado",
        completed: true
    },
    {   
        text: "Estudiar programación ",
        completed: true
    },
    {   
        text: "Bañarme",
        completed: false
    }
]

function App() {
  return (
    <>

      <ToDoCounterMsg 
        completed={ 16 }
        total={ 20 }
      />

      <ToDoSearch />


      <ToDoList>
        { defaultToDos.map(toDo => (
            <ToDoItem
            key={ toDo.text }
            text={ toDo.text }
            completed={ toDo.completed }
             />
        )

        )}
      </ToDoList>

      <ToDoCreateButton />



    </>

  );
}



export default App;
