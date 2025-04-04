import { Icon } from "@iconify/react/dist/iconify.js"
import TaskListItem from "./TaskListItem"
import { useState } from "react"
import AddTaskBox from "./AddTaskBox";

export default function TaskList() {
    const [tasks, setTasks] = useState(["Uma tarefa legal", "Ir na feira", "Estudar React", "Programar mais"])

    function addTask(taskName) {
        console.log("addTask",taskName);
        setTasks([...tasks, taskName])
    }

    function onClickRemove(idx) {
        console.log("onClickRemove",idx);
        tasks.splice(idx,1)
        setTasks([...tasks])
    }

    return (
        <>
            <AddTaskBox onAddTaskName={addTask}/>
            <div className="border border-black p-2 m-2 rounded md:w-120">
                <div>
                    <div>
                        Lista de tarefas:
                    </div>
                </div>
                <hr className="my-2" />
                <div>
                    {tasks.map((elem, idx) => <TaskListItem onRemove={onClickRemove} key={idx} taskName={elem} idx={idx} />)}
                </div>
            </div>
        </>
    )
}