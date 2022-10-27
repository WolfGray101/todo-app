import React, { Component } from "react";

import '../index.css';


export default class TaskFilter extends Component {
  render () {
    return (    
      <ul className="filters">
              <li>
                <button className="selected">All</button>
              </li>
              <li>
                <button>Active</button>
              </li>
              <li>
                <button>Completed</button>
              </li>
      </ul> 
    )
  }
}

// const TaskFilter = () => {
//   return (    
//     <ul class="filters">
//             <li>
//               <button class="selected">All</button>
//             </li>
//             <li>
//               <button>Active</button>
//             </li>
//             <li>
//               <button>Completed</button>
//             </li>
//     </ul> 
//   )
// }
// export default TaskFilter