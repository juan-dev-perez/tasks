import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import NewTasksContainer from "../components/NewTaskContainer/NewTaskContainer";
import { TaskContextProvider } from "../context/TaskContext";

const Router = () => {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<TasksContainer/>} />
            <Route path='/*' element={<TasksContainer/>} />
            <Route path='/new' element={<NewTasksContainer/>} />
            <Route path='/edit/:idTask' element={<NewTasksContainer/>} />
        </Routes>
      </TaskContextProvider>
    </BrowserRouter>
  )
}

export default Router