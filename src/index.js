import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import AppHeader from './components/app-header';
import TaskList from './components/taskList';
import Footer from './components/footer';
import NewTaskForm from './components/newTaskForm';
import ItemAdd from './components/itemadd';

class App extends Component {

  maxID = 100;
  state = {todoData : [
  //  this.createTodoItem('Active Task1'), 
  //  this.createTodoItem('Active Task2'),  
  //  this.createTodoItem('Active Task3'), 
  //  this.createTodoItem('Active Task4'), 

  ]};

  deleteTask = (id) => {
    this.setState( ( { todoData } ) => {
      const ind = todoData.findIndex( (el) => el.id === id )
      const newArray = [
        ...todoData.slice(0, ind),
        ...todoData.slice(ind+1)
      ];
      return {todoData: newArray}
    })
  }

  createTodoItem (label) {  
    return {    
    label: label,
    done: false,
    id: this.maxID++
   }
  }

 addTask = (text) => {
   const newItem = this.createTodoItem (text)
   this.setState( ({ todoData} ) => {
    const newArray = [
      ...todoData, newItem      
    ]

  console.log( newArray);

    return {
      todoData: newArray
      }
   })
 }

 onToggleDone = (id) => {
  this.setState( ( { todoData} ) => {

  const ind = todoData.findIndex( (el) => el.id === id );

    // 1. update Object
 const oldItem = todoData[ind];
 const newItem = {...oldItem, 
  done: !oldItem.done}
    // 2. construct new array
    const newArray = [
      ...todoData.slice(0, ind),
      newItem,
      ...todoData.slice(ind+1)
    ];
    return {todoData: newArray}
  })  
 }

 render () {
  return (
  <div className='todoapp'>
  <AppHeader/>
  {/* <NewTaskForm /> */}
  <ItemAdd onItemAdd = {this.addTask }
/>
  <TaskList 
    todos = {this.state.todoData}
    onDeleted = {this.deleteTask}
    onToggleDone = {this.onToggleDone}
  />
  <Footer />
   
</div>
)
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


