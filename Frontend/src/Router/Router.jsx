import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import NewTasksContainer from "../components/NewTaskContainer/NewTaskContainer";

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<TasksContainer/>} />
            <Route path='/new-task' element={<NewTasksContainer/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router