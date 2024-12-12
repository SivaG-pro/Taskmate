export  function TaskCard({task,deletetask}) {
  return (
    <div>
      
          <li>
            <span className={`boxes ${task.completed ? "complete":"incomplete"}`}>{task.id} - {task.name}
            <button className="sub" onClick={() => deletetask(task.id)}>Delete</button>
            </span>
          <br />
          </li>
    </div>
  )
}

