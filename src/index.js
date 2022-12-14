import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import AppHeader from './components/app-header';
import TaskList from './components/taskList';
import Footer from './components/footer';
import ItemAdd from './components/itemadd';

class App extends Component {

  maxID = 100;
  state = {
        todoData : [ ],
        term: '',
        filter: 'all', 
       };

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

  filter(items, filter) {
        switch(filter) {
          case 'all' :
            return items;
          case 'active':
            return items.filter( (item) => !item.done);
          case 'done': 
            return items.filter( (item) => item.done); 
          default :
            return items
        }
  }

  // complited = () => {    
  //     this.setState( ( { todoData} ) => {
  //       const arrComplited = todoData.filter((el) => el.done === true)
  //       return {todoData: arrComplited}
  //     })  
  //    }

  active = () => {     
        this.setState( ( { todoData} ) => {
          const arrActive = todoData.filter((el) => el.done === false)
          return {todoData: arrActive}
        })  
       }
  // all = () => {     
  //   this.setState( ( { todoData} ) => {
  //   const arr = todoData.filter((el) => el.done === false)
  //   return {todoData: arr}
  //   })  
  // }

  createTodoItem = (label) => {  
    return {    
    label: label,
    done: false,
    id: this.maxID++,
    date: new Date()
   }
  }

  addTask = (text) => {
    const newItem = this.createTodoItem (text)
    this.setState( ({ todoData} ) => {
    const newArray = [...todoData, newItem ]
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
 editTaskLabel = (id, text) => {
  this.setState( ( { todoData} ) => {
  const ind = todoData.findIndex( (el) => el.id === id );
  // 1. update Object
  const oldItem = todoData[ind];
  const newItem = {...oldItem, 
  label: text}
  // 2. construct new array
  const newArray = [
    ...todoData.slice(0, ind),
      newItem,
    ...todoData.slice(ind+1)
  ];
  return {todoData: newArray}
})  
}

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  
 render () {
  const {todoData, filter} = this.state

  const visibleItems = this.filter(todoData, filter)
  const doneCount = todoData.filter((el) => !el.done).length 
  return (
  <div className='todoapp'>
  <AppHeader />

  <ItemAdd 
    onItemAdd = {this.addTask }
  />
  <TaskList 
    todos = {visibleItems}
    onDeleted = {this.deleteTask}
    onToggleDone = {this.onToggleDone}
    onItemAdd = {this.addTask}
    onEditTaskLabel = {this.editTaskLabel}
  />
  <Footer 
    doneCount = {doneCount}
    filter = {filter} 
    onActive = {this.active} 
    onFilterChange = {this.onFilterChange}
  />
   
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


