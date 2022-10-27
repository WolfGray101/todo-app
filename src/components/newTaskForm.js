import React from "react"

const NewTaskForm = () => {
  const searchText = 'What need to be done?'
  
  return (  
    <input className="new-todo"
  placeholder = {searchText}/>)
  }
export default NewTaskForm