import { useState } from 'react'
import '../App.css'
export  function AddTask() {
    const [addTask,setaddTask]=useState("");
  return (
    <div className='box'>
      <form action="">
        <label htmlFor="task">Taskname:</label>
        <input type="text" onChange={(e) => setaddTask(e.target.value)} name="task" id="task" autoComplete='off' value={addTask}/>
        <button type='Submit' className='addtask'>Add</button>
        <span onClick={() => setaddTask("")} className='clear'>Clear</span>
        <p>{addTask}</p>
      </form>
    </div>
  )
}
