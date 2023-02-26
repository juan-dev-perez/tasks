import { useEffect } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { useTasks } from "../../context/TaskContext";
import Task from "./Task/Task";

const TasksContainer = () => {

    const { tasks, getTasks } = useTasks();
    
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <Container>
            <Row>
                <Col xxl={10} xl={10} lg={10} md={10} sm={11} className='mx-auto'>
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
                </Col>
            </Row>
        </Container>
    );
}

export default TasksContainer