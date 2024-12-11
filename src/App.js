import { Header } from './components/Header';
import { Task } from './components/Task.js';
import { Footer } from './components/Footer.js';
import { AddTask } from './components/AddTask.js';
import './App.css'


function App() {
  
  // }
  return (
    <>
    <Header/>
    <AddTask/>
    <br />
    <Task title='Mate'/>
    <Footer/>
    </>
    
  );
}

export default App;
