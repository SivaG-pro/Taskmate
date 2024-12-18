import { useState,useRef } from 'react'
import '../App.css'
export  function AddTask({tasks,settasks}) {
    //const [addTask,setaddTask]=useState("");
    const [progress,setProgress]=useState(false);
    const taskRef=useRef("");
    function clear(){
      //setaddTask("");
      taskRef.current.value="";
      setProgress(false);

    }
    function addTasks(e){
      e.preventDefault();
      //console.log(typeof(progress))
      const task={
        id: Math.floor(Math.random()*10000),
        name:taskRef.current.value,
        completed:Boolean(progress)
      }
      settasks([...tasks,task])
      console.log(task);
      clear();
    }
  return (
    <div className='box'>
      <form onSubmit={(e) => addTasks(e)}>
        <label htmlFor="task">Taskname:</label>
        <input type="text"  name="task" id="task" autoComplete='off' ref={taskRef}/>
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button type='Submit' className='addtask'>Add</button>
        <span onClick={() => clear() } className='clear'>Clear</span>

        <p></p>
      </form>
    </div>
  )
}
