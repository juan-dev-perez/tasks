import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";
import { useTasks } from "../../../context/TaskContext";

const Task = ({task}) => {

  const { delTask, checkTask } = useTasks();
  return (
    <tr className={ task.done ? "dashed" : ''} >
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>
          <Form.Check
            defaultChecked={task.done}
            onClick={ async () => await checkTask(task.id) }
          />
        </td>
        <td className="d-flex gap-3">
          <Link className="links" to={`/edit/${task.id}`}>
            {/* <Button variant="outline-primary">Update</Button> */}
            <Image className="iconsAction" src="/update.png"/>

          </Link>
          
          <Link className="links" to={''}>
            {/* <Button variant="outline-danger" onClick={ () => delTask(task.id) }>Delete</Button> */}
              <Image className="iconsAction" onClick={ () => delTask(task.id) } src="/delete.png"/>
          </Link>
          
          
          
          </td>
    </tr>
  )
}

export default Task