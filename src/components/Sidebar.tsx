import type { FC } from "react";
import { Link } from "react-router-dom";
import { SquaresPlusIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";

const Sidebar : FC = () => {
    return(<div className="w-1/5 bg-gray-800 p-4 flex flex-col items-start">
        <h2 className="text-lg font-bold text-white mb-4 text-center w-full">TO-DO-LIST</h2>
        <Link to="/" className="text-white font-bold flex items-center gap-2 mb-2">
        <SquaresPlusIcon className="size-5"/>
        Add Task
        </Link>
        <Link to="/tasks" className="text-white font-bold flex items-center gap-2">
        <DocumentDuplicateIcon className="size-5"/>
        Task Management
        </Link>
      </div>)
}

export default Sidebar;