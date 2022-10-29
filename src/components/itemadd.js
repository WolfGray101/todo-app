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
    console.log(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdd(this.state.label)
    this.setState({
      label: ''
    })
  }
          
    render () {      
      return (           
            <form onSubmit={this.onSubmit}>
              <input type ='Text'
              className="new-todo"
              placeholder="Type to create Task"
              onChange = {this.onLabelChange}
              value = {this.state.label}></input>  
            {/* <button className="headerButton">   
             ADD TEXT         
            </button> */}
            </form> 
      )
    }
  }