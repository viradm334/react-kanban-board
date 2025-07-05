import { useState, type FC } from "react";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

const AddTask: FC = () => {
  const { addTask, tasks } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

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

    console.log("New Task Added");

    setTitle('');
    setDescription('');
    setDueDate('');

  };

  return (
    <>
      <div className="w-full max-w-xs bg-gray-300">
        <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h1 className="block text-gray-700 text-lg font-bold mb-2">Add New Task</h1>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Due Date
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="due-date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-blue-500 p-2 text-white"
          >
            Add Task
          </button>
          <Link to="/tasks" className="ml-4 text-blue-500">Go to tasks</Link>
        </form>
      </div>
    </>
  );
};

export default AddTask;
