export  function TaskCard(props) {
  return (
    <div>
      
          <li className={props.task.completed ? "complete":"incomplete"} >{props.task.id} - {props.task.name}
          <button className="sub" onClick={() => props.deletetask(props.task.id)}>Delete</button>
          </li>
    </div>
  )
}

