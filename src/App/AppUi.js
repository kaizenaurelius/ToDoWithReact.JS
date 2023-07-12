import { ToDoCounterMsg, } from '../ToDoCounterMsg'
import ToDoList from '../ToDoList';
import ToDoCreateButton from '../ToDoCreateButton';
import ToDoItem from '../ToDoItem';
import ToDoSearch from '../ToDoSeach';
import { ToDosLoading } from '../ToDosLoading'
import { ToDosError } from '../ToDosError'
import { EmptyToDos } from '../EmptyToDos'
import { ToDoContext } from '../ToDoContext';
import React from 'react';
import { Modal } from '../Modal';



function AppUI(  ) {

    const  {
      error,
      loading,
      searchedToDos,
      completeToDo,
      deleteToDo,
      openModal
        } = React.useContext( ToDoContext );

    return (
        <>
    
          <ToDoCounterMsg />   
          <ToDoSearch />
    
          <ToDoList>

                    { loading && (  <> <ToDosLoading/>  <ToDosLoading/>  <ToDosLoading/> </>)  }
                    { error && <ToDosError /> }
                    { ( !loading && searchedToDos.lenght === 0)
                        && <EmptyToDos/> }


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



           { openModal && (
           
            <Modal>
                      Agregar Todos 
          </Modal>

           )}           
        </>
    
      );
}

export { AppUI }