import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTasks } from "../../../context/TaskContext";

const Task = ({task}) => {

  const { delTask } = useTasks();
  return (
    <tr>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>check</td>
        <td className="d-flex gap-3">
          <Link className="links" to={`/edit/${task.id}`}>
            <Button variant="outline-primary">Update</Button>
          </Link>
          
          <Link className="links" to={''}>
            <Button variant="outline-danger" onClick={ () => delTask(task.id) }>Delete</Button>
          </Link>
          </td>
    </tr>
  )
}

export default Task