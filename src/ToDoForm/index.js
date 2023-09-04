import React, { useState } from "react";
import './ToDoForm.css'
import { ToDoContext } from "../ToDoContext";

function ToDoForm( ) {

    const [newToDoValue, setNewToDoValue] = useState('') // estado local. no GLOBAL



    const {
        addToDo, // aplicacion en contexto global para agregar el To Do a el arreglo
        setOpenModal,
    } = React.useContext(ToDoContext);


    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Previene un salto de línea en el textarea
            onSubmit(event);
            console.log('tecla press')
        }
    };

    const onKeyDown = ( event ) => {
        if(event.key === "Escape") {
            onCancel( event )
            console.log('tecla press')
        }
    }

    const  onSubmit= ( event ) => {
        event.preventDefault();
        addToDo( newToDoValue );
        setOpenModal(false);
    };
    
    const  onCancel= (  ) => {
        setOpenModal(false);
    };
    
    const onChange = ( event ) => {
        setNewToDoValue( event.target.value )
    }


    return (
        <form onSubmit={ onSubmit }>
            <label> Escribe tu nuevo To Do </label>
            <textarea 
                placeholder='Cortar cebollas para el almuerzo'
                value={ newToDoValue }
                onChange={ onChange }
                onKeyPress={onKeyPress}
                onKeyDown={ onKeyDown }

            /> 
        <div className= 'ToDoForm-buttonContainer'>
        <button 
                type='button'
                className='ToDoForm-button
                ToDoForm-button--cancel'
                onClick={ onCancel }
            > Cancelar </button>
            <button 
                type='submit'
                className='ToDoForm-button
                ToDoForm-button--add'
            > Añadir</button>
        </div>
        </form>
    )
    }



export { ToDoForm }