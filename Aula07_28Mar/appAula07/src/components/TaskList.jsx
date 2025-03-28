import { Icon } from "@iconify/react/dist/iconify.js"
import TaskListItem from "./TaskListItem"
import { useState } from "react"

export default function TaskList() {
    const [ tasks, setTasks ] = useState([ "Uma tarefa legal", "Ir na feira", "Estudar React", "Programar mais" ])

    function addTask() {
        console.log("addTask");
        setTasks([...tasks, "Alguma coisa"])
    }

    return (
        <>
            <div className="border border-black p-2 m-2 rounded md:w-120">
                <div>
                    Lista de tarefas: 
                    <button onClick={addTask} className="border border-black px-2">
                        Add
                    </button>
                </div>
                <hr className="my-2" />
                <div>
                    { tasks.map((elem,idx) => <TaskListItem key={idx} taskName={elem} />) }
                </div>
            </div>
        </>
    )
}