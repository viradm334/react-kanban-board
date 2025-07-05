import { useState, type FC } from "react";
import { useTasks } from "../context/TaskContext";
import { Sidebar } from "../components";
import { useNavigate } from "react-router-dom";

const AddTask: FC = () => {
  const { addTask, tasks } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!title.trim() || !description.trim() || !dueDate){
        alert('Please fill out all of the field!')
    };

    addTask({
      id: tasks.length + 1,
      title,
      status: "TODO",
      description,
      due_date: new Date(dueDate)
    });

    alert('New task added succesfully!');
    navigate('/tasks');

  };

  return (
    <div className="w-full h-screen flex bg-gray-100">
      <Sidebar/>
  
      <div className="w-3/4 flex items-start justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded shadow-md px-8 pt-6 pb-8"
        >
          <h1 className="block text-gray-700 text-lg font-bold mb-4">Add New Task</h1>
  
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Title
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-50 border-blue-400 focus:outline-none focus:shadow-outline"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </div>
  
          <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white cursor-pointer">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default AddTask;
