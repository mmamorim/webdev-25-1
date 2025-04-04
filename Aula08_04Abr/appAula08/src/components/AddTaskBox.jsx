import { useState } from "react"

export default function AddTaskBox({ onAddTaskName }) {
    const [taskName, setTaskName ]  = useState("Alguma tarefa")

    function addTask() {
        console.log("TaskName: ",taskName);      
        onAddTaskName(taskName)  
    }

    return (
        <>
            <div className="border border-black p-2 rounded m-2 md:w-120">
                <div>
                    Digite o nome da tarefa
                </div>
                <hr className="my-1" />
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Tarefa:
                    </div>
                    <input type="text" value={taskName} onChange={(e) => { setTaskName(e.target.value) }} className="border border-black p-1 w-45" />
                    <button onClick={addTask} className="border border-black px-1 rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}