import { useEffect } from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { useTasks } from "../../context/TaskContext";
import Task from "./Task/Task";
import { Link } from "react-router-dom";

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
            <div className='d-flex justify-content-center mt-3'>
                <Link to='/new'>
                    <Button variant='primary'>
                        New Task
                    </Button>
                </Link>
            </div>
        </Container>
    );
}

export default TasksContainer