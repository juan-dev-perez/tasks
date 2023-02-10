import NewTaskForm from './NewTaskForm/NewTaskForm';

const NewTaskContainer = () => {
  return (
    <div className="tasks_container">
        <h1>Add a new task</h1>
        <div className="new_task_form">
            <NewTaskForm/>
        </div>
    </div>
  )
}

export default NewTaskContainer