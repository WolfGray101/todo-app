import React from "react";

import '../index.css';

const Task = (props) => {
  return (    
    <li key = {props.id} className =  'active'>
        <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>          
        <span className = "description"  > 
        {props.label}
        </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
        </div>
      </li>
 
  )
}
export default Task