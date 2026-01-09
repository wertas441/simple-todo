import type { Metadata } from 'next';
import CompleteTasks from "@/app/complete/CompleteTasks";
import {TasksDataStructure} from "@/app/page";

export const metadata: Metadata = {
    title: '',
    description: '',
}

export default function CompleteTasksPage(){

    const completedTasks: TasksDataStructure[] = [
        {
            id: 1,
            label: 'Task 1',
            description: 'Task 1 description about the task',
            isComplete: true,
            completeData: '27.02.2026'
        },
        {
            id: 2,
            label: 'Task 2',
            description: 'Task 2 description about the task',
            isComplete: true,
            completeData: '28.02.2026'
        },
        {
            id: 3,
            label: 'Task 3',
            description: 'Task 3 description about the task',
            isComplete: true,
            completeData: '29.02.2026'
        },
    ];

    return <CompleteTasks completedTasks={completedTasks} />
}