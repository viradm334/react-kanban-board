import type { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar : FC = () => {
    return(<div className="w-1/5 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-lg font-bold text-white mb-4">TO-DO-LIST</h2>
        <Link to="/" className="ml-4 text-white font-bold block">Add Task</Link>
        <Link to="/tasks" className="ml-4 text-white font-bold block">Task Management</Link>
      </div>)
}

export default Sidebar;