import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import { getOne } from '../../api/tasks.api';
import NewTaskForm from './NewTaskForm/NewTaskForm';

const NewTaskContainer = () => {

  const { idTask } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const resetStates = () => {
    setTitle('');
    setDescription('');
  }

  const getTask = async () => {
      const task = await getOne(idTask);

      if(task.data){
        setTitle(task.data.title);
        setDescription(task.data.description);
      }else{
        idTask && navigate('/');
      }
  }

  useEffect( () => {
    resetStates();
    getTask();  
  }, []);

  return (
    <Container>
      <div className='title-centered mt-5'>
        {
          !idTask 
          ? <h1>Add a new task</h1> 
          : <h1>Update task</h1>
        }
      </div>

        <NewTaskForm 
          idTask={idTask} 
          title={title} 
          setTitle={setTitle}
          description={description} 
          setDescription={setDescription}
        />

    </Container>
    
  )
}

export default NewTaskContainer