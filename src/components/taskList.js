import React from "react"

import Task from './task'
import '../index.css';

const TaskList =( { todos } ) => {
 
  const elements = todos.map((item) => {
    
    const {...itemProps} = item;
   
    return (        
        <Task {... itemProps} />        
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