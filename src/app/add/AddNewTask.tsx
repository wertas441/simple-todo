'use client'

import MainInput from "@/components/MainInput";
import {colorClass} from "@/app/Dashboard";
import {useState} from "react";

export default function AddNewTask() {

    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                />

                <MainInput
                    id={"taskDescription"}
                    placeholder={`Введите описание задачи...`}
                    value={taskDescription}
                    onChange={setTaskDescription}
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