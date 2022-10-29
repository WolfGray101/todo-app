import React from "react"

import Task from './task'
import '../index.css';

const TaskList =( { todos, onDeleted, onToggleDone } ) => {
 
  const elements = todos.map((item) => {
    
    const {id, ...itemProps } = item;
   
    return (        
        <Task   
        { ... itemProps}
        onDeleted = { () => onDeleted(id)}
        onToggleDone = { () => onToggleDone(id)} 
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