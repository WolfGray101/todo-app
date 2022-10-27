import React from "react";

import '../index.css';

export default  class Task extends React.Component {

  state = {
    done: false
  }

  onLabelClick = () => {
   this.setState( (state) => {
    return {
      done: !state.done
    }
   }) 
  }

  render () {
   const props = this.props
   const {done } = this.state
   let newClassName = ""
   if (done) newClassName += 'completed'
    return (    
      <li key = {props.id} className =  {newClassName}>
          <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>          
          <span className = 'description' 
          onClick = { this.onLabelClick}> 
          {props.label}          
          </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" 
          onClick= {this.props.onDeleted}>            
          </button>
          </div>
        </li>
   
    )
  }
}

// const Task = (props) => {
//   return (    
//     <li key = {props.id} className =  'active'>
//         <div className="view">
//         <input className="toggle" type="checkbox"></input>
//         <label>          
//         <span className = "description"  > 
//         {props.label}
//         </span>
//         </label>
//         <button className="icon icon-edit"></button>
//         <button className="icon icon-destroy"></button>
//         </div>
//       </li>
 
//   )
// }
// export default Task