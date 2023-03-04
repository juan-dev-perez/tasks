import { createContext, useContext, useState } from "react";
import { getAll, deleteTask, checkTaskDone } from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    return context;
}

export const TaskContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try{
            const data = await getAll();
            setTasks(data.data);    
        }catch(error){
            console.error(error);
        }
    }

    const delTask = async id => {
        try{
            const response = await deleteTask(id);
            setTasks(tasks.filter( task => task.id !== id));
        }catch(error){
            console.error(error);
        }
    }

    const checkTask = async (id) => {
        try{
            const taskChek = tasks.find( task => task.id == id);
            await checkTaskDone(id, taskChek.done === false ? true : false );
            setTasks(
                tasks.map( task => 
                    task.id == id ? { ...task, done: !task.done } : task
                )
            );
        }catch(error){
            console.error(error);
        }
    }

    return (
        <TaskContext.Provider value={{
                tasks,
                getTasks,
                delTask,
                checkTask
            }}>
            {children}
        </TaskContext.Provider>
    )
}