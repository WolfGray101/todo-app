import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'



import AppHeader from './components/app-header';
import TaskList from './components/taskList';
import Footer from './components/footer';
import NewTaskForm from './components/newTaskForm';



const App = () => { 
  const todoData = [
    {label : 'Completed Task', status: "completed", id:1},
    {label : 'Active Task', status: "editing", id:2},   
    {label : 'Active Task', status: "active", id:3},   
  ];

 return (
 <div className='todoapp'>
  <AppHeader/>
  <NewTaskForm/>  
  <TaskList todos = {todoData} />
  <Footer />

</div>)
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


