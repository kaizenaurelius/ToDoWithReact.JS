import React from 'react';
import './ToDoSearch.css'
import { useState } from 'react';



const ToDoSearch = () => {

    const [searchValue, setSearchValue] = useState( '' );


    console.log("Los usarios buscaron " + searchValue)
    return (

        
        <input 
            className='TodoSearch'
            value={ searchValue }
            onChange={(event) => {
                setSearchValue(event.target.value)
            }

            }
        />
            
    );
};

export default ToDoSearch;