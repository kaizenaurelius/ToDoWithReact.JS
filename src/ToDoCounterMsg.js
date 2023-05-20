import './ToDoCounter.css';

function ToDoCounterMsg( { total, completed } ) {
    return (
      <h1 className='ToDoCounter'>
        Has completado <span> { completed }</span>  de  <span> { total }  </span>To Dos
      </h1>
    );
  }

export { ToDoCounterMsg } 