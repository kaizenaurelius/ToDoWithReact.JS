import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const ToDoContext = React.createContext()

function ToDoProvider( { children })

{
    
    const  {item: toDos,
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);  // para  actualizqar los To Do´s

    const [searchValue, setSearchValue] = useState( '' );

    const [openModal, setOpenModal] = useState( true );


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
    (toDos) => toDos.text === text  //encontrará el arreglo que tenga el indice en el que el texto de ese arrglo sea igual al texto que entra por parametro
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
    }

    const deleteToDo = ( text ) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
    (toDos) => toDos.text === text  //encontrará el arreglo que tenga el indice en el que el texto de ese arrglo sea igual al texto que entra por parametro
    );
    newToDos.splice(toDoIndex, 1) // métdo para cortar arryas, desde el elemeto con el indice indicado. Numero indica cuántos cortará
    saveToDos(newToDos);
    }

    
    return (
        <ToDoContext.Provider value = { { 
            error,
            loading,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        } }>

            { children }

        </ToDoContext.Provider>


    )
}


export  { ToDoContext, ToDoProvider }