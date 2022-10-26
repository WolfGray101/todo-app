import React from "react"

import Task from './task'
import '../index.css';

const TaskList =( { todos } ) => {
 
  const elements = todos.map((item) => {
    
    const { id, status, ... itemProps} = item;
   
    return (
      <li key = {id} className =  { status }>
        <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>          
        <Task { ... itemProps} />
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
        </div>
      </li>
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