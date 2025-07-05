import type { FC } from "react";
import type { Task, Column as ColumnType } from "../types";
import {Column} from '../components'
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";

const COLUMNS: ColumnType[] = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

const TaskList: FC = () => {
  const {tasks, updateTask} = useTasks();

  function hadleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as number;
    const newStatus = over.id as Task["status"];

    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.status === newStatus) return;

    updateTask({ ...task, status: newStatus });
  }

  return (
    <>
      <div className="p-4">
        <div className="flex gap-8">
          <DndContext onDragEnd={hadleDragEnd}>
            {COLUMNS.map((column) => {
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks.filter((task) => task.status === column.id)}
                ></Column>
              );
            })}
          </DndContext>
        </div>
      </div>
    </>
  );
};

export default TaskList;
