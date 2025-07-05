import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../types";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTasks } from "../context/TaskContext";

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
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}

        className="text-red-500 hover:text-red-600"
      >
        <TrashIcon className="size-6" />
      </button>
    </div>
  );
}

export default TaskCard;
