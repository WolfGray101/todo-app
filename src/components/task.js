import React from "react";

import '../index.css';


export default  class Task extends React.Component {

  render () {
   const {onDeleted, onToggleDone, label, done }  = this.props
   let newClassName = ""
   if (done) newClassName += 'completed'
    return (    
        <li className =  {newClassName}>
          <div className="view">
            <input className="toggle" type="checkbox"></input>
              <label>          
                <span className = 'description'
                    onClick = { onToggleDone}>
                    {label}          
                </span>
              </label>
            <button 
              className="icon icon-edit">            
            </button>
            <button 
              className="icon icon-destroy" 
              onClick= {onDeleted}>            
            </button>
          </div>
        </li>
   
    )
  }
}

