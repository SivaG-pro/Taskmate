export  function TaskCard({task,deletetask}) {
  return (
    <div>
      
          <li className={task.completed ? "complete":"incomplete"} >
            <span className="box">{task.id} - {task.name}
            <button className="sub" onClick={() => deletetask(task.id)}>Delete</button>
            </span>
          
          </li>
    </div>
  )
}

