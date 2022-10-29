import React from "react";

import '../index.css';


// нет других  функций кроме render/ можем отрефакторить назад в функцию а не в класс..
export default  class Task extends React.Component {

  // state = {
  //   done: false
  // }
// не нужно т. к. управляем локально состояние получаем из  index
  // onLabelClick = () => {
  //  this.setState( (state) => {
  //   return {
  //     done: !state.done
  //   }
  //  }) 
  // }

  render () {
   const {onDeleted, onToggleDone, label, done }  = this.props
  // удалили из stste - т.к. получаем состояние из index
   //  const {done } = this.state
   let newClassName = ""
   if (done) newClassName += 'completed'
    return (    
      <li className =  {newClassName}>
          <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>          
          <span className = 'description'
           onClick = { onToggleDone}>
           {/* onClick = { this.onLabelClick}>  */}
          {label}          
          </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" 
          onClick= {onDeleted}>            
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