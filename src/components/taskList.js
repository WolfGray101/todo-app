import React from "react"

import Task from './task'
import '../index.css';

const TaskList =( { todos, onDeleted } ) => {
 
  const elements = todos.map((item) => {
    
    const {...itemProps} = item;
   
    return (        
        <Task 
        { ... itemProps}
        onDeleted = { () => onDeleted(itemProps.id) } 
        />        
    )
      });

    return (
      <div className = "main">
        <ul className = 'todo-list'>  
          { elements }  
        </ul>
      </div>
  )
}

 

export default TaskList