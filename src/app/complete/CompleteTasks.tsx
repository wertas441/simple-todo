'use client'

import MainInput from "@/components/MainInput";
import LinkBtn from "@/components/LinkBtn";
import {colorClass} from "@/app/Dashboard";
import {useEffect, useMemo, useState} from "react";
import {TasksDataStructure} from "@/app/page";

export default function CompleteTasks() {

    const [searchTask, setSearchTask] = useState<string>('');
    const [tasksData, setTasksData] = useState<TasksDataStructure[]>([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");

        if (tasks){
            const jsonTask: TasksDataStructure[] = JSON.parse(tasks);
            const completedTasks = jsonTask.filter((task) => task.isComplete);
            console.log(completedTasks);
            setTasksData(completedTasks);
        }
    }, [])

    const searchList = useMemo(() => {
        const search = searchTask.toLowerCase().trim();
        return tasksData.filter(item => {
            return search.length === 0 || item.label.toLowerCase().includes(search)
        })
    }, [searchTask, tasksData])

    return (
        <div className={`${colorClass} bg-neutral-950 rounded-lg p-5`}>
            <h1 className={`flex text-3xl justify-center items-center text-white`}>
                Список выполненных задач
            </h1>

            <div className={`mt-5`}>
                <MainInput
                    id={"TaskSearch"}
                    placeholder={`Введите название задачи...`}
                    value={searchTask}
                    onChange={setSearchTask}
                />
            </div>

            <div className={`mt-5 gap-3 flex items-center justify-between`}>
                <LinkBtn
                    label={`Активные`}
                    href={`/`}
                />

                <LinkBtn
                    label={`Добавить задачу`}
                    href={`/add`}
                />
            </div>

            <div className="mt-5">
                {searchList.length > 0 ? (
                    searchList.map((task) => (
                        <div
                            key={task.id}
                            className={`p-2 rounded-lg my-3 bg-neutral-700`}
                        >
                            <h1 className={`text-white text-xl`}>{task.label}</h1>
                            <p className={`text-gray-400`}>{task.description}</p>
                            <p className={`text-gray-400 text-sm`}>Задачи выполнена: {task.completeDate}</p>
                        </div>
                    ))
                ): (
                    <div className={`p-2 rounded-lg my-3 flex items-center justify-center bg-neutral-700`}>
                        <h1 className={`text-xl text-white`}>Такой задачи нету</h1>
                    </div>
                )}
            </div>
        </div>
    )
}