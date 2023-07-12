import React, { useState } from "react";



function useLocalStorage ( itemNane, initialValue ) {


    const [item, setItem] = useState( initialValue );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( false );



    React.useEffect( () => {
      setTimeout( () => {
        try {
          const localStorageItem = localStorage.getItem(itemNane )
          let parsedItem;
    
    
          if (!localStorageItem) {
            localStorage.setItem(itemNane, JSON.stringify( initialValue ))
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse( localStorageItem )
            setItem( parsedItem );
          };
    
          setLoading( false );
        }catch( error )
        {
          setLoading( false );
          setError( true );      
        }
      }, 2000)

        });

  
    //Estado interno
    
  
    const saveItem = ( newItem ) => {
      localStorage.setItem(itemNane, JSON.stringify( newItem )) // Actualizando LocalStorage
      setItem( newItem ) // actualizando estado
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    }
  }

  export  { useLocalStorage };