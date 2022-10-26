import React from "react";

import '../index.css';
// const TodoListItem = (props) => {
//   return <span> {props.label}</span>
// }
const Task = ({label, active = false}) => {
  const style = {
// color : important? 'tomato' : 'black'
  }
  return (
    
  <span className="description"  style = {style}> 
        {label}
  </span>
  )
}
export default Task