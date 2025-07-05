export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
    id: number;
    status: TaskStatus;
    title: string;
    description: string;
    due_date: Date;
};

export type Column = {
    id: TaskStatus;
    title: string;
}