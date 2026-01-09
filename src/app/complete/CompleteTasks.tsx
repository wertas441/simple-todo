'use client'

import MainInput from "@/components/MainInput";
import LinkBtn from "@/components/LinkBtn";
import {colorClass} from "@/app/Dashboard";
import {useMemo, useState} from "react";
import {TasksDataStructure} from "@/app/page";
import CompleteTaskRow from "@/components/CompleteTaskRow";

export default function CompleteTasks({completedTasks}: {completedTasks: TasksDataStructure[]}) {

    const [searchTask, setSearchTask] = useState<string>('');

    const searchList = useMemo(() => {
        const search = searchTask.toLowerCase().trim();
        return completedTasks.filter(item => {
            return search.length === 0 || item.label.toLowerCase().includes(search)
        })
    }, [searchTask, completedTasks])

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
                        <CompleteTaskRow
                            key={task.id}
                            task={task}
                        />
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