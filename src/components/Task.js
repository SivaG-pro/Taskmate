import { useState } from 'react';
import { TaskCard } from './TaskCard';

export  function Task({title,tasks,settasks}) {
    
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
      console.log(tasks)
      function deletetask(input){
        console.log(input)
        settasks(tasks.filter(tasks => tasks.id !==input))
      }
      const style={
        color:"#03393a"
      }
  return (
    <>
      <div className="box">
      <ul>
        <h1 style={style}>Task {title}</h1>
        <button className='addButton' onClick={() => setShow(!show) } >{show ? "Hide":"Show"}</button>
        { show && tasks.map((task) => (
          <TaskCard key={task.id} task={task}  deletetask={deletetask} />
          ))
          }
      </ul>
      </div>
      <br />
      {/* <BoxCard result="warning">
        <p>Need to check planner feedbacks.</p>
        
      </BoxCard>
      <br />
      <BoxCard result="success">
      <p>Completed implementation and QA tested successfully.</p>
      
      </BoxCard>
      <br />
      <BoxCard result="success">
      <p>Supplier populated successfully.</p>
      
      </BoxCard> */}
    
      </>
  )
}
