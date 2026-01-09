'use client'

import MainInput from "@/components/MainInput";
import LinkBtn from "@/components/LinkBtn";
import {useEffect, useMemo, useState} from "react";
import {TasksDataStructure} from "@/utils/types";

export default function CompleteTasks() {

    const [searchTask, setSearchTask] = useState<string>('');
    const [tasksData, setTasksData] = useState<TasksDataStructure[]>([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");

        if (tasks){
            const jsonTask: TasksDataStructure[] = JSON.parse(tasks);
            const completedTasks = jsonTask.filter((task) => task.isComplete);

            setTasksData(completedTasks);
        }
    }, [])

    const searchList = useMemo(() => {
        const search = searchTask.toLowerCase().trim();
        return tasksData.filter(item => {
            return search.length === 0 || item.label.toLowerCase().includes(search)
        })
    }, [searchTask, tasksData])

    const emptyText = tasksData.length === 0 ? 'Пока нет выполненных задач' : 'Ничего не найдено';

    return (
        <div className="panel">
            <div className="space-y-1">
                <h1 className="title">Выполненные задачи</h1>
                <p className="muted">
                    {tasksData.length} {tasksData.length === 1 ? 'задача' : tasksData.length < 5 ? 'задачи' : 'задач'} закрыто
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
                    label={`Активные`}
                    href={`/`}
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
                            className="task-item"
                        >
                            <h2 className="text-base sm:text-lg font-semibold text-white wrap-break-word">
                                {task.label}
                            </h2>
                            <p className="mt-1 text-sm text-white/60 wrap-break-word">{task.description}</p>
                            <p className="mt-2 text-xs text-white/50">
                                Выполнено: <span className="text-white/70">{task.completeDate}</span>
                            </p>
                        </div>
                    ))
                ): (
                    <div className="task-item flex items-center justify-center">
                        <p className="text-white/80">{emptyText}</p>
                    </div>
                )}
            </div>
        </div>
    )
}