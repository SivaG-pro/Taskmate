import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
export  function Task(props) {
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
    <>
      <div className="box">
      <ul>
        <h1>Task {props.title}</h1>
        <button className='addButton' onClick={() => setShow(!show) } >Toggle</button>
        { show && tasks.map((task) => (
          <TaskCard key={task.id} task={task}  deletetask={deletetask} />
          ))
          }
      </ul>
      </div>
      <br />
      <BoxCard result="warning">
        
        <p>Need to check planner feedbacks.</p>
        <p>Need to test in production.</p>
        
      
      </BoxCard>
      </>
  )
}
