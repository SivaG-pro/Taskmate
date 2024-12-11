import '../App.css'
export  function AddTask() {
  return (
    <div className='box'>
      <form action="">
        <label htmlFor="task">Taskname:</label>
        <input type="text"  name="task" id="task" autoComplete='off'/>
        <button type='Submit' className='hide'>Add</button>
      </form>
    </div>
  )
}
