import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import NewTasksContainer from "../components/NewTaskContainer/NewTaskContainer";

const Router = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<TasksContainer/>} />
            <Route path='/new-task' element={<NewTasksContainer/>} />
            <Route path='/new-task/:idTask' element={<NewTasksContainer/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router