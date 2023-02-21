import { Link } from "react-router-dom";

const Task = ({task}) => {
  return (
    <tr>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>check</td>
        <td className="d-flex gap-3">
          <Link className="links" to={`/new-task/${task.id}`}>
            Update
          </Link>
          -
          <Link className="links" to={''}>
            Delete
          </Link>
          </td>
    </tr>
  )
}

export default Task