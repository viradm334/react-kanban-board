export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
    id: number;
    status: TaskStatus;
    title: string;
    description: string;
};

export type Column = {
    id: TaskStatus;
    title: string;
}