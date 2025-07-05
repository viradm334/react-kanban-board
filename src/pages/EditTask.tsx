import { useState, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Sidebar } from "../components";
import type React from "react";

const EditTask: FC = () => {
    const {id} = useParams();
    const {tasks, updateTask} = useTasks();
    const navigate = useNavigate();

    const taskId = parseInt(id || "", 10);
    const task = tasks.find((t) => t.id === taskId);

    if(!task){
        return <h1 className="text-4xl text-gray-800">Task Not Found</h1>
    }

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.due_date.toISOString().split('T')[0]);

    const handleUpdate = ((e: React.FormEvent) => {
        e.preventDefault();

        updateTask({...task, title, description, due_date: new Date(dueDate)});

        alert('Task updated succesfully!');
        navigate('/tasks');
    })
    return(<div className="w-full h-screen flex bg-gray-100 m-0">
        <Sidebar/>
    
        <div className="w-3/4 flex items-start justify-center p-10">
          <form
            className="w-full max-w-md bg-white rounded shadow-md px-8 pt-6 pb-8" onSubmit={handleUpdate}
          >
            <h1 className="block text-gray-700 text-lg font-bold mb-4">Task Detail</h1>
    
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Title
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-50 border-blue-400 focus:outline-none focus:shadow-outline"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Description
              </label>
              <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 border-blue-400 focus:outline-none focus:shadow-outline"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />
          </div>
  
    
            <div className="mb-4">
              <label htmlFor="due-date" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Due Date
              </label>
              <input
                type="date"
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 border-blue-400 focus:outline-none focus:shadow-outline"
                name="due-date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
    
            <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white cursor-pointer">
              Update Task
            </button>
          </form>
        </div>
      </div>)
}

export default EditTask;