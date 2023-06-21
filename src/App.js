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


function useLocalStorage ( itemNane, initialValue ) {


  const localStorageItem = localStorage.getItem(itemNane )
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemNane, JSON.stringify( initialValue ))
    parsedItem = [];
  } else {
    parsedItem = JSON.parse( localStorageItem )
  };

  //Estado interno
  const [item, setItem] = useState( parsedItem);

  const saveItem = ( newItem ) => {
    localStorage.setItem(itemNane, JSON.stringify( newItem )) // Actualizando LocalStorage
    setItem( newItem ) // actualizando estado
  }

  return [ item, saveItem ]
}


function App() {


  const [ toDos, saveToDos ] = useLocalStorage('TODOS_V1', defaultToDos);  // para  actualizqar los To Do´s
 
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


  const completeToDo = ( text ) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDos) => toDos.text == text  //encontrará el arreglo que tenga el indice en el que el texto de ese arrglo sea igual al texto que entra por parametro
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = ( text ) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDos) => toDos.text == text  //encontrará el arreglo que tenga el indice en el que el texto de ese arrglo sea igual al texto que entra por parametro
    );
    newToDos.splice(toDoIndex, 1) // métdo para cortar arryas, desde el elemeto con el indice indicado. Numero indica cuántos cortará
    saveToDos(newToDos);
  }



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
            onCompleted={ () => completeToDo(toDo.text) }
            onDeleted={ () => deleteToDo(toDo.text) }
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
