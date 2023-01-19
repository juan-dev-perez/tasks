import axios from "axios";
import { useEffect, useState } from 'react';
import Task from "./Task/Task";

const TasksContainer = () => {

    const getTasks = async () => {
        const data = await axios.get('http://localhost:8080/');
        setTasks(data.data);
    }
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks();
    }, [])
    
    console.log(tasks);
    
    return (
        <div>
        {tasks.map( (task, id) => (
            <Task key={id} task={task}/>
        ))
        }
        </div>
    );
}

export default TasksContainer