import axios from 'axios';

export const getAll = async () => 
    await axios.get('http://localhost:8080/tasks');

export const getOne = async id => 
    await axios.get(`http://localhost:8080/tasks/${id}`);

export const createTask = async data => 
    await axios.post('http://localhost:8080/tasks', data);

export const updateTask = async (id, data) => 
    await axios.put(`http://localhost:8080/tasks/${id}`, data);

export const deleteTask = async id => 
    await axios.delete(`http://localhost:8080/tasks/${id}`);