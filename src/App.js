import React from 'react';
import { ToDoCounterMsg, } from './ToDoCounterMsg'
import ToDoList from './ToDoList';
import ToDoCreateButton from './ToDoCreateButton';
import ToDoItem from './ToDoItem';
import ToDoSearch from './ToDoSearch';
import { useState } from 'react';
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
    },
    {   
      text: "Ver a José Juan",
      completed: true
  }
]

function App() {

  const [ toDos, setTodos ] = useState(defaultToDos);  // para  actualizqar los To Do´s
 
  const [searchValue, setSearchValue] = useState( '' );


  //Estados derivados 
  
  const completedToDos = toDos.filter(  // encontrandos cuales todos han sido completados del array 
    (toDo) =>  
    !!toDo.completed).length

  const totalToDos = toDos.length  // cantidad todal de todos de el array

  const searchedToDos = toDos.filter(
    (toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const SearchText = searchValue.toLowerCase();
      return toDoText.includes( SearchText)
    }

   
  )




  return (
    <>

      <ToDoCounterMsg 
        completed={ completedToDos }
        total={ totalToDos } 
      />

      <ToDoSearch 
        searchValue={ searchValue }
        setSearchValue={ setSearchValue }
      />


      <ToDoList>
        { searchedToDos.map(toDo => (
            <ToDoItem
            key={ toDo.text }
            text={ toDo.text }
            completed={ toDo.completed }
             />
        )

        )}
      </ToDoList>

      <ToDoCreateButton 
      />



    </>

  );
}



export default App;
