import type { Metadata } from 'next';
import CompleteTasks from "@/app/complete/CompleteTasks";

export const metadata: Metadata = {
    title: 'Выполненные задачи',
    description: 'Список уже выполненных пользователем задач',
}

export default function CompleteTasksPage(){

    return <CompleteTasks />
}