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
            <h1>Tasks</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
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