import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TasksContainer from "../TasksContainer/TasksContainer";

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<TasksContainer/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router