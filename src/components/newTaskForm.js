import React, { Component } from "react"

import "../index.css";


export default class NewTaskForm extends Component {

  render() {
    const searchText = 'What need to be done?'
  return (   
  <input className="new-todo"
  placeholder = {searchText}/>
  )
  }
  }
