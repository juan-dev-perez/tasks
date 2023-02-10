import React from 'react'

const Task = ({task}) => {
  return (
    <tr>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>check</td>
        <td>editar - eliminar</td>
    </tr>
  )
}

export default Task