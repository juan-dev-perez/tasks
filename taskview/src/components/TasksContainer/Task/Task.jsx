import React from 'react'

const Task = ({task}) => {
  return (
    <div>
        <div>{task.title}</div>
        <div>{task.description}</div>
    </div>
  )
}

export default Task