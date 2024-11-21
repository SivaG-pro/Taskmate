import { useState } from 'react';
import { Header } from './components/Header';
import './App.css'


function App() {
  const [tasks,settasks]=useState([{id:1,name :"Planner",completed:false},
    {id:2,name :"Date Populate",completed:true},
    {id:3,name :"Supplier Populate",completed:true}]);
    const [show,setShow]=useState(true);
  // function addcount(){
  //   setCount(count => count+1);
  //   setCount(count => count+1);
  //   setCount(count => count+1);
  //   console.log(useState);
  // }
  // function subcount(){
  //   setCount(count-1);
  //   console.log(count);
  function deletetask(input){
    console.log(input)
    settasks(tasks.filter(tasks => tasks.id !==input))
  }
  // }
  return (
    <>
    <Header/>
    <div className="App">
      <div className="box">
      <ul>
        <button className='addButton' onClick={() => setShow(!show) } >Toggle</button>
        
        { show && tasks.map((task) => (
          
          <li key={task.id} className={task.completed ? "complete":"incomplete"} >{task.id} - {task.name}
          <button className="sub" onClick={() => deletetask(task.id)}>Delete</button>
          </li>))
          }
        
      </ul>
      </div>
    </div>
    
    </>
    
  );
}

export default App;
