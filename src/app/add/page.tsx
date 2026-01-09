import type { Metadata } from 'next';
import AddNewTask from "@/app/add/AddNewTask";

export const metadata: Metadata = {
    title: 'Добавить новую задачу',
    description: 'Страница добавления новой задачи в список активных',
}

export default function AddNewTaskPage(){

    return <AddNewTask />
}