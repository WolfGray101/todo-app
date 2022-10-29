import React, { Component } from "react";

import '../index.css';


export default class TaskFilter extends Component {
  
  buttons  = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ] 

  render () { 
  const {filter, onFilterChange} = this.props
  const buttons = this.buttons.map(({name, label}) => {
    const isActive = filter === name;
    const clazz = isActive ? 'selected' : ''
    return (
      <li key = {name}>
      <button type="button"
      className={`${clazz}`}
      onClick={() => onFilterChange(name)}>  
       {label}  
       </button>
    </li>
    )
  })    
  return (
    <ul className="filters">
    {buttons}
    </ul> 
  )
  }
}

// const TaskFilter = ({onComplited, onActive}) => {
//   return (    
//     <ul className="filters">
//             <li>
//               <button className="selected">All</button>
//             </li>
//             <li>
//               <button
//               onClick={onActive}>
//                 Active</button>
//             </li>
//             <li>
//               <button
//               onClick = { onComplited }>
//                 Completed
//                 </button>
//             </li>
//     </ul> 
//   )
// }
// export default TaskFilter