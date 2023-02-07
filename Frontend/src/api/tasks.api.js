import axios from 'axios';

export const getAll = async () => {
    return await axios.get('http://localhost:8080/tasks');
}

export const createTask = async data => 
    await axios.post('http://localhost:8080/tasks', data);