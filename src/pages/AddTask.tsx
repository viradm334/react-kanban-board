import type { FC } from "react"
import { useTasks } from "../context/TaskContext";
import { Link } from 'react-router-dom';

const AddTask:FC = () => {
    const {addTask} = useTasks();

    const handleSubmit = () => {
        addTask({id: 5, title: 'New Task', status: 'TODO', description: 'This is a new task'});
        console.log('New Task Added');
    }
    return(
        <>
        <h1>Hello World</h1>

        <button onClick={handleSubmit} className="cursor-pointer rounded-lg bg-blue-500 p-2 text-white">Add Task</button>
        <Link to='/tasks'>Go to tasks</Link>
        </>
    )
}

export default AddTask