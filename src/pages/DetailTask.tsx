import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";

const DetailTask: FC = () => {
    const {id} = useParams();
    const {tasks} = useTasks();

    const taskId = parseInt(id || "", 10);
    const task = tasks.find((t) => t.id === taskId);

    if(!task){
        return <h1 className="text-4xl text-gray-800">Task Not Found</h1>
    }

    return(<>
    <div className="w-full h-screen flex bg-gray-100 m-0">
      <Sidebar/>
  
      <div className="w-3/4 flex items-start justify-center p-10">
        <form
          className="w-full max-w-md bg-white rounded shadow-md px-8 pt-6 pb-8"
        >
          <h1 className="block text-gray-700 text-lg font-bold mb-4">Task Detail</h1>
  
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Title
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-100 border-blue-400 focus:outline-none focus:shadow-outline"
              name="title"
              value={task.title}
              disabled={true}
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Description
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 border-blue-400 focus:outline-none focus:shadow-outline bg-gray-100"
                name="description"
                rows={4}
                value={task.description}
                disabled={true}
            />
        </div>

  
          <div className="mb-4">
            <label htmlFor="due-date" className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Due Date
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 border-blue-400 focus:outline-none focus:shadow-outline bg-gray-100"
              name="due-date"
              value={task.due_date.toISOString().split('T')[0]}
              disabled={true}
            />
          </div>
  
          <Link
          to={`/tasks`}
          className="text-blue-600"
        >Go Back to Task List
        </Link>
        </form>
      </div>
    </div>
    </>)
}

export default DetailTask;