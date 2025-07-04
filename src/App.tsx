import { useState } from "react";
import "./App.css";
import type { Task, Column as ColumnType } from "./types";
import Column from "./Column";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: "Research Project",
    description: "Write unit test",
    status: "TODO",
  },
  {
    id: '2',
    title: "Research",
    description: "Write test",
    status: "TODO",
  },
  {
    id: '3',
    title: "Mandi",
    description: "Mandi Sore",
    status: "IN_PROGRESS",
  },
  {
    id: '4',
    title: "Minum Air",
    description: "Minum Air Mineral",
    status: "DONE",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function hadleDragEnd(event: DragEndEvent){
    const {active, over} = event;

    if(!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];

    setTasks(() => 
    tasks.map((task) => task.id === taskId ? {...task, status: newStatus} : task))
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
}

export default App;
