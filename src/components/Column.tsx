import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import type {Column as ColumnType} from '../types';
import type { Task } from '../types';

type ColumnProps = {
    column: ColumnType;
    tasks: Task[];
};

function Column({column, tasks}: ColumnProps){
    const {setNodeRef} = useDroppable({
        id: column.id
    })
    return(
        <div className='flex w-80 flex-col rounded-lg bg-neutral-800 p-4'>
            <h2 className='mb-4 semibold text-neutral-100'>{column.title}</h2>
            <div ref={setNodeRef} className='flex flex-1 flex-col gap-4'>
                {tasks.map(task => {
                    return <TaskCard key={task.id} task={task}></TaskCard>
                })}
            </div>
        </div>
    )
}

export default Column