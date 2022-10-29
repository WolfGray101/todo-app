import React, { Component } from "react";

import '../index.css';


export default class TaskFilter extends Component {
  
  render () { 
    // const {onComplited, onActive} = this.props  
   

    let activeButtonClassName = ""
    return (    
      <ul className="filters">
              <li>
                <button                  
                  className={activeButtonClassName}>
         
                    All
                </button>
              </li>
              <li>
                <button  
                  className={activeButtonClassName}>
            
                    Active
                </button>
              </li>
              <li>
                <button  
                  className={activeButtonClassName}>
           
                    Completed
                </button>
              </li>
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