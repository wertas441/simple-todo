'use client'

import MainInput from "@/components/MainInput";
import {colorClass} from "@/app/Dashboard";
import {FormEvent, useEffect, useState} from "react";
import {InputErrorState, TasksDataStructure} from "@/utils/types";
import {useRouter} from "next/navigation";
import {validateTaskDescription, validateTaskName} from "@/utils/validation";

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
        <div className={`${colorClass} bg-neutral-950 rounded-lg p-5`}>
            <h1 className={`flex text-3xl justify-center items-center text-white`}>
                Добавить новую задачу
            </h1>

            <form onSubmit={handleSubmit} className={`space-y-3 mt-5`}>
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
                    className={`text-white border w-full px-3 py-1 border-white rounded-lg`}
                >
                    Добавить задачу
                </button>
            </form>
        </div>
    )
}