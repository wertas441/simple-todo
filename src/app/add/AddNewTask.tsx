'use client'

import MainInput from "@/components/MainInput";
import {FormEvent, useEffect, useState} from "react";
import {InputErrorState, TasksDataStructure} from "@/utils/types";
import {useRouter} from "next/navigation";
import {validateTaskDescription, validateTaskName} from "@/utils/validation";
import LinkBtn from "@/components/LinkBtn";

export default function AddNewTask() {

    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [tasksData, setTasksData] = useState<TasksDataStructure[]>([]);
    const [inputError, setInputError] = useState<InputErrorState>({
        nameError: null,
        descriptionError: null,
    });

    const router = useRouter();

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");

        if (tasks){
            setTasksData(JSON.parse(tasks));
        }
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const taskNameError = validateTaskName(taskName);
        const taskDescriptionError = validateTaskDescription(taskDescription);

        if (taskNameError || taskDescriptionError) {
            setInputError({
                nameError: taskNameError,
                descriptionError: taskDescriptionError,
            })

            return
        }

        const payload: TasksDataStructure = {
            id: tasksData.length + 1,
            label: taskName,
            description: taskDescription,
            isComplete: false,
            completeDate: null,
        }

        const updatedTasks = [...tasksData, payload];

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        router.push('/')
    }

    return (
        <div className="panel">
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="title">Новая задача</h1>
                    <p className="muted">Добавьте задачу, чтобы она появилась в списке активных.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={`space-y-5 mt-5`}>
                <MainInput
                    id={"taskName"}
                    placeholder={`Введите название задачи...`}
                    value={taskName}
                    onChange={setTaskName}
                    error={inputError.nameError}
                />

                <MainInput
                    id={"taskDescription"}
                    placeholder={`Введите описание задачи...`}
                    value={taskDescription}
                    onChange={setTaskDescription}
                    error={inputError.descriptionError}
                />

                <button
                    type={`submit`}
                    className="btn btn-primary w-full cursor-pointer"
                >
                    Добавить задачу
                </button>
            </form>
        </div>
    )
}