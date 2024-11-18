import { useState } from 'react';
import './App.css';

function App() {
  const [tasks,settasks]=useState([{id:1,name :"Planner",completed:false},
    {id:2,name :"Date Populate",completed:true},
    {id:3,name :"Supplier Populate",completed:true}]);
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
    
    <div className="App">
      <div className="box">
      <ul>
        { tasks.map((task) => (
          <li key={task.id}>{task.id} - {task.name}
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
