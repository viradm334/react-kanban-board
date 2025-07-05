import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../types";
import {
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

type TaskCardProps = {
  task: Task;
};

function TaskCard({ task }: TaskCardProps) {
  const { deleteTask } = useTasks();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  const handleDelete = () => {
    deleteTask(task.id);
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <div {...listeners} className="cursor-grab">
        <h3 className="font-medium text-neutral-50">{task.title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
      </div>
      <div className="mt-auto flex justify-end gap-2 pt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          className="text-red-500 hover:text-red-600"
        >
          <TrashIcon className="size-5" />
        </button>

        <Link
          to={`/edit/${task.id}`}
          className="text-blue-500 hover:text-blue-600"
        >
          <PencilSquareIcon className="size-5" />
        </Link>

        <Link
          to={`/detail/${task.id}`}
          className="text-green-500 hover:text-green-600"
        >
          <EyeIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
