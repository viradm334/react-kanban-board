import { useState, useContext, createContext, type ReactNode } from "react";
import type { Task } from "../types";

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (id:number) => void;
};

const INITIAL_TASKS: Task[] = [
    {
      id: 1,
      title: "Research Project",
      description: "Write unit test",
      status: "TODO",
    },
    {
      id: 2,
      title: "Research",
      description: "Write test",
      status: "TODO",
    },
    {
      id: 3,
      title: "Mandi",
      description: "Mandi Sore",
      status: "IN_PROGRESS",
    },
    {
      id: 4,
      title: "Minum Air",
      description: "Minum Air Mineral",
      status: "DONE",
    },
  ];

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({children}: {children : ReactNode}){
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

    const updateTask = (updated: Task) => setTasks((prev) => prev.map((task) => task.id === updated.id ? updated: task));

    const deleteTask = (id: number) => setTasks((prev) => prev.filter((task) => task.id !== id));

    return(
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )

}

export function useTasks(){
    const context = useContext(TaskContext);
    if(!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
}