import {TasksDataStructure} from "@/app/page";


export default function ActiveTaskRow({task}: {task: TasksDataStructure}){


    return (
        <div className={`p-2 rounded-lg my-3 bg-neutral-700`} id={`${task.id}`}>
            <h1 className={`text-white text-xl`}>{task.label}</h1>
            <p className={`text-gray-400`}>{task.description}</p>
        </div>
    )
}