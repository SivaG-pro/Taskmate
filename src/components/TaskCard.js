export  function TaskCard(props) {
  return (
    <div>
      
          <li className={props.completed ? "complete":"incomplete"} >{props.task.id} - {props.task.name}
          <button className="sub" onClick={() => props.deletetask(props.id)}>Delete</button>
          </li>
    </div>
  )
}

