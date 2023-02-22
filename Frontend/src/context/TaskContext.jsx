import { createContext, useContext, useState } from "react";
import { getAll, deleteTask } from "../api/tasks.api";

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
            console.log(response);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <TaskContext.Provider value={{
                tasks,
                getTasks,
                delTask
            }}>
            {children}
        </TaskContext.Provider>
    )
}