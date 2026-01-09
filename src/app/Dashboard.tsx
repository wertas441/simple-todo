'use client'

import {useEffect, useMemo, useState} from "react";
import LinkBtn from "@/components/LinkBtn";
import MainInput from "@/components/MainInput";
import {TasksDataStructure} from "@/utils/types";

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

        setActiveTasks(updatedList.filter((task) => !task.isComplete));
    }

    const emptyText = activeTasks.length === 0 ? 'Пока нет активных задач' : 'Ничего не найдено';

    return (
        <div className="panel">
            <div className="space-y-1">
                <h1 className="title">Активные задачи</h1>
                <p className="muted">
                    {activeTasks.length} {activeTasks.length === 1 ? 'задача' : activeTasks.length < 5 ? 'задачи' : 'задач'} в работе
                </p>
            </div>

            <div className={`mt-5`}>
                <MainInput
                    id={"TaskSearch"}
                    placeholder={`Введите название задачи...`}
                    value={searchTask}
                    onChange={setSearchTask}
                />
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <LinkBtn
                    label={`Выполненные`}
                    href={`/complete`}
                />

                <LinkBtn
                    label={`Добавить задачу`}
                    href={`/add`}
                />
            </div>

            <div className="divider" />

            <div className="scroll-area space-y-3">
                {searchList.length > 0 ? (
                    searchList.map((task) => (
                        <div
                            key={task.id}
                            className="task-item flex items-center justify-between gap-4"
                        >
                            <div className="min-w-0">
                                <h2 className="text-base sm:text-lg font-semibold text-white wrap-break-word">
                                    {task.label}
                                </h2>
                                <p className="mt-1 text-sm text-white/60 wrap-break-word">
                                    {task.description}
                                </p>
                            </div>
                            <button
                                onClick={() => makeTaskCompleted(task.id)}
                                className="icon-btn shrink-0 cursor-pointer"
                                aria-label="Отметить задачу как выполненную"
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
                    <div className="task-item flex items-center justify-center">
                        <p className="text-white/80">{emptyText}</p>
                    </div>
                )}
            </div>
        </div>
    )
}