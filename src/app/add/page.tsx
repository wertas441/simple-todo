import type { Metadata } from 'next';
import AddNewTask from "@/app/add/AddNewTask";

export const metadata: Metadata = {
    title: 'Add New Task',
    description: 'Add new task',
}

export default function AddNewTaskPage(){

    return <AddNewTask />
}