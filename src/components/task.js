import React from "react";
import '../index.css';

export default  class Task extends React.Component {
 
  state ={
    label: '',
    vis: false
  }
  onLabelChange = (e) => {
     this.setState ( { 
     label: e.target.value,
     vis: true
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
     if (this.state.label) {
    this.props.onEditTaskLabel(this.state.label)
    this.setState({
      label: '',
      vis: false
    })
  } else alert('String is empty')
  }

  editTask = (e) => {
      e.preventDefault()
    this.setState({
      vis: !this.state.vis
    })
  }

  render () {
    const {onDeleted, onToggleDone, label, done}  = this.props
   
      let newClassName = ""
      let isEditing = this.state.vis;
      if (done) newClassName += 'completed';
      const clazz = isEditing ? '' : 'hidden';        
   return (    
        <li className =  {newClassName}>
          <form  className ={clazz}
              onSubmit={this.onSubmit}>
              <input type ='Text'
              className="new-todo"
              placeholder="Type to Edit Task"
              onChange = {this.onLabelChange}
              value = {this.state.label}></input>  
            </form> 
          <div className="view">
            <input className="toggle" type="checkbox"></input>
              <label>          
                <span className = 'description'
                    onClick = { onToggleDone}>
                    {label}          
                </span>
              </label>
            <button 
              className="icon icon-edit" 
              onClick={this.editTask}>         
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

