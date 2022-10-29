import React, { Component } from "react";
import "../index.css";

export default class ItemAdd extends Component { 

  state ={
    label: ''
  }
  onLabelChange = (e) => {
    this.setState ( { 
     label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label) {
    this.props.onItemAdd(this.state.label)
    this.setState({
      label: ''
    })
  } else alert('String is empty')
  }
          
    render () {      
      return (           
            <form onSubmit={this.onSubmit}>
              <input type ='Text'
              className="new-todo"
              placeholder="Type to create Task"
              onChange = {this.onLabelChange}
              value = {this.state.label}></input>  
            </form> 
      )
    }
  }