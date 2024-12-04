export  function TaskCard({task,deletetask}) {
  return (
    <div>
      
          <li className={task.completed ? "complete":"incomplete"} >{task.id} - {task.name}
          <button className="sub" onClick={() => deletetask(task.id)}>Delete</button>
          </li>
    </div>
  )
}

