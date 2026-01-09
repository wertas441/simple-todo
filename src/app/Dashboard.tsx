'use client'

import {useEffect, useMemo, useState} from "react";
import {TasksDataStructure} from "@/app/page";
import LinkBtn from "@/components/LinkBtn";
import MainInput from "@/components/MainInput";

export const colorClass = 'border border-white';

export default function Dashboard() {

    const [searchTask, setSearchTask] = useState<string>('');
    const [allTasks, setAllTasks] = useState<TasksDataStructure[]>([]);
    const [activeTasks, setActiveTasks] = useState<TasksDataStructure[]>([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");

        if (tasks){
            const jsonTask: TasksDataStructure[] = JSON.parse(tasks);
            setAllTasks(jsonTask);
            const activeTasks = jsonTask.filter((task) => !task.isComplete);
            console.log(activeTasks);
            setActiveTasks(activeTasks);
        }
    }, [])

    const searchList = useMemo(() => {
        const search = searchTask.toLowerCase().trim();
        return activeTasks.filter(item => {
            return search.length === 0 || item.label.toLowerCase().includes(search)
        })
    }, [searchTask, activeTasks])

    const makeTaskCompleted = (taskId: number) => {
        const nowDate = new Date().toLocaleDateString();
        const updatedList = allTasks.map((task) =>
            task.id === taskId
                ? { ...task, isComplete: true, completeDate: nowDate }
                : {...task}
        )

        localStorage.setItem("tasks", JSON.stringify(updatedList));
        setAllTasks(updatedList);
    }


    return (
        <div className={`${colorClass} bg-neutral-950 rounded-lg p-5`}>
            <h1 className={`flex text-3xl justify-center items-center text-white`}>
                Список активных задач
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
                    label={`Выполненные`}
                    href={`/complete`}
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
                            className={`flex items-center justify-between p-2 rounded-lg my-3 bg-neutral-700`}
                        >
                            <div className="">
                                <h1 className={`text-white text-xl`}>{task.label}</h1>
                                <p className={`text-gray-400`}>{task.description}</p>
                            </div>
                            <button
                                onClick={() => makeTaskCompleted(task.id)}
                                className={`text-white border text-center p-1 border-white rounded-lg mr-2`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                                    <path d="M20 6 9 17l-5-5"/>
                                </svg>
                            </button>
                        </div>
                    ))
                ) : (
                    <div className={`p-2 rounded-lg my-3 flex items-center justify-center bg-neutral-700`}>
                        <h1 className={`text-xl text-white`}>Такой задачи нету</h1>
                    </div>
                )}
            </div>
        </div>
    )
}