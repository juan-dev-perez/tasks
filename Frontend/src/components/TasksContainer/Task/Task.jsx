import React from 'react'

const Task = ({task}) => {
  return (
    <tr>
        <td className='body_table'>{task.title}</td>
        <td>{task.description}</td>
    </tr>
  )
}

export default Task