import { useState } from 'react'
import '../App.css'
export  function AddTask() {
    const [addTask,setaddTask]=useState("");
    const [progress,setProgress]=useState(false);
    function clear(){
      setaddTask("");
      setProgress(false);

    }
    function addTasks(e){
      e.preventDefault();
      //console.log(typeof(progress))
      const tasks={
        id: Math.floor(Math.random()*100000),
        name:addTask,
        completed:Boolean(progress)
      }
      console.log(tasks);
      clear();
    }
  return (
    <div className='box'>
      <form onSubmit={(e) => addTasks(e)}>
        <label htmlFor="task">Taskname:</label>
        <input type="text" onChange={(e) => setaddTask(e.target.value)} name="task" id="task" autoComplete='off' value={addTask}/>
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button type='Submit' className='addtask'>Add</button>
        <span onClick={() => clear() } className='clear'>Clear</span>

        <p>{addTask}</p>
      </form>
    </div>
  )
}
