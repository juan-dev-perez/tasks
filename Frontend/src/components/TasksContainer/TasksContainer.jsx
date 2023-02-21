import { useEffect, useState } from 'react';
import { getAll } from "../../api/tasks.api.js";
import { Table, Container } from 'react-bootstrap';
import Task from "./Task/Task";

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
        <Container>
            <div className='title-centered mt-5'>
                <h1>Tasks</h1>
            </div>
            <Table responsive className='mt-3'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {
                        tasks.map( (task, id) => (
                            <Task key={id} task={task}/>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default TasksContainer