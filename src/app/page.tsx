import {Metadata} from "next";
import Dashboard from "@/app/Dashboard";

export const metadata: Metadata = {
    title: 'Список активных целей',
    description: 'Главная страница отслеживания списка задач'
}

export interface TasksDataStructure {
    id: number;
    label: string;
    description: string;
    isComplete: boolean;
    completeData?: string;
}

export default function Home() {

    const tasks: TasksDataStructure[] = [
        {
            id: 1,
            label: 'Task 1',
            description: 'Task 1 description about the task',
            isComplete: false,
        },
        {
            id: 2,
            label: 'Task 2',
            description: 'Task 2 description about the task',
            isComplete: false,
        },
        {
            id: 3,
            label: 'Task 3',
            description: 'Task 3 description about the task',
            isComplete: false,
        },
    ];

    return <Dashboard tasks={tasks} />
}
