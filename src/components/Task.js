import { useState } from 'react';

export  function Task() {
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
  return (
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
    
 
  )
}