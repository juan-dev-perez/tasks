import './TasksContainer.css';
import { useEffect, useState } from 'react';
import Task from "./Task/Task";
import { getAll } from "../../api/tasks.api.js";

const TasksContainer = () => {
    
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const data = await getAll();
        setTasks(data.data);
    }
    
    useEffect(() => {
        getTasks();
    }, [])
    
    return (
        <div className="tasks_container">
            <h1>Tasks</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="title_table">Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map( (task, id) => (
                            <Task key={id} task={task}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TasksContainer