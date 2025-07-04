import { Routes, Route } from "react-router-dom";
import type { FC } from "react";
import AddTask from "../pages/AddTask";
import NotFound from "../pages/NotFound";
import TaskList from "../pages/TaskList";

const AppRoutes: FC = () => {
    return(
        <Routes>
            <Route path="/" element={<AddTask/>}></Route>
            <Route path="/tasks" element={<TaskList/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}

export default AppRoutes