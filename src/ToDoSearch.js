import React from 'react';
import './ToDoSearch.css'



const ToDoSearch = ({ searchValue, setSearchValue }) => {


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