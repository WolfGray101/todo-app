import React from "react"
const NewTaskForm = () => {
  const searchText = 'What need to be done?'
  const searchStyle = {
    fontSize: '20px'
  }
  return (
  <div className="header">
    <input className="new-todo"
  style = {searchStyle}
  placeholder = {searchText}/>
  </div>)
}
export default NewTaskForm