import React from "react"
const NewTaskForm = () => {
  const searchText = 'What need to be done?'
  const searchStyle = {
    fontSize: '20px'
  }
  return (
  
    <input className="new-todo"
  style = {searchStyle}
  placeholder = {searchText}/>)

}
export default NewTaskForm