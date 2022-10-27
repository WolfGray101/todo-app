import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import AppHeader from './components/app-header';
import TaskList from './components/taskList';
import Footer from './components/footer';
import NewTaskForm from './components/newTaskForm';

class App extends Component {
  state = {todoData : [
    {label : 'Completed Task', id:1},
    {label : 'Active Task', id:2},   
    {label : 'Active Task', id:3},   
  ]};

  deleteTask = (id) => {
    this.setState( ( { todoData } ) => {
      const ind = todoData.findIndex( (el) => el.id ===id )
      todoData.splice(ind, id);
      const newArray = [
        ...todoData.slice(0, ind),
        ...todoData.slice(ind + 1)
      ];
      return {todoData: newArray}
    })
  }

 render () {
  return (
  <div className='todoapp'>
  <AppHeader/>
  <NewTaskForm/>  
  <TaskList 
  todos = {this.state.todoData}
  onDeleted = {this.deleteTask} />
  <Footer />
</div>
)
}
}
// const App = () => { 
//   const todoData = [
//     {label : 'Completed Task', id:1},
//     {label : 'Active Task', id:2},   
//     {label : 'Active Task', id:3},   
//   ];

//  return (
//  <div className='todoapp'>
//   <AppHeader/>
//   <NewTaskForm/>  
//   <TaskList todos = {todoData} />
//   <Footer />
// </div>)
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


