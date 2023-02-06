import axios from "axios";
import './TasksContainer.css';
import { useEffect, useState } from 'react';
import Task from "./Task/Task";

const TasksContainer = () => {

    const getTasks = async () => {
        const data = await axios.get('http://localhost:8080/tasks');
        setTasks(data.data);
    }
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks();
    }, [])
    
    console.log(tasks);
    
    return (
        <div className="tasks_container">
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