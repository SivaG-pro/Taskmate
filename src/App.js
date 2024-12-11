import { useState } from 'react';
import { Header } from './components/Header';
import { Task } from './components/Task.js';
import { Footer } from './components/Footer.js';
import { AddTask } from './components/AddTask.js';
import './App.css'


function App() {
  const [tasks,settasks]=useState([]);
  
  return (
    <>
    <Header/>
    <AddTask tasks={tasks} settasks={settasks}/>
    <br />
    <Task title='Mate' tasks={tasks} settasks={settasks}/>
    <Footer/>
    </>
    
  );
}

export default App;
