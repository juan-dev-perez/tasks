import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TasksContainer from "../components/TasksContainer/TasksContainer";

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