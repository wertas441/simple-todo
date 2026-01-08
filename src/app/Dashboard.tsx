'use client'

import {useMemo, useState} from "react";
import {TasksDataStructure} from "@/app/page";
import TaskRow from "@/components/TaskRow";
import LinkBtn from "@/components/LinkBtn";
import MainInput from "@/components/MainInput";

export const colorClass = 'border border-white';

export default function Dashboard({tasks}: {tasks: TasksDataStructure[]}) {

    const [searchTask, setSearchTask] = useState<string>('');

    const searchList = useMemo(() => {
        const search = searchTask.toLowerCase().trim();
        return tasks.filter(item => {
            return search.length === 0 || item.label.toLowerCase().includes(search)
        })
    }, [searchTask, tasks])

    return (
        <div className={`${colorClass} bg-neutral-950 rounded-lg p-5`}>
            <h1 className={`flex text-3xl justify-center items-center text-white`}>
                Список задач
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
                        <TaskRow
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