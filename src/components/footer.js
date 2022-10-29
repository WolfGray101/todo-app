import React from "react"

import TaskFilter from './taskFilter'
import '../index.css';

// const Footer =( {onComplited, onActive, onAll} ) => { 
  const Footer =( { onActive, doneCount, filter, onFilterChange} ) => { 
    return (
      <footer className = "footer">
       <span className = "todo-count"> 
        {doneCount}  items left 
       </span>
       <TaskFilter 
              // onComplited =  {onComplited}
              // onActive =  {onActive}
             filter = {filter}
             onFilterChange = {onFilterChange}
     /> 
       <button 
       className = "clear-completed"
       onClick={onActive}>
          Clear completed
        </button>
      </footer>
  )
}

export default Footer