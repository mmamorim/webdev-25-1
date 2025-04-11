import { Icon } from "@iconify/react/dist/iconify.js"
import TaskListItem from "./TaskListItem"
import { useState } from "react"
import AddTaskBox from "./AddTaskBox";
import sgdb from "../sgdb.js"

sgdb.init()

export default function TaskList() {
    const [tasks, setTasks] = useState(["Estudar React", "Programar mais"])

    function addTask(taskName) {
        console.log("addTask", taskName);
        let task = {
            id: sgdb.newID("task"),
            task: taskName
        }
        console.log("task",task);
        sgdb.data.todos[task.id] = task
        sgdb.write()
        //setTasks([...tasks, taskName]),
    }

    function onClickRemove(idx) {
        console.log("onClickRemove", idx);
        tasks.splice(idx, 1)
        setTasks([...tasks])
    }

    return (
        <>
            <AddTaskBox onAddTaskName={addTask} />
            <div className="border border-black p-2 m-2 rounded md:w-120">
                <div>
                    <div>
                        Lista de tarefas:
                    </div>
                </div>
                <hr className="my-2" />
                {tasks.length == 0 &&
                    <div className="bg-gray-300 p-1 text-lg rounded">
                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:info" className="text-4xl text-red-600" />
                            Nenhuma tarefa foi adicionada!
                        </div>
                    </div>
                }
                <div>
                    {tasks.map((elem, idx) => <TaskListItem onRemove={onClickRemove} key={idx} taskName={elem} idx={idx} ultimo={idx==tasks.length-1} />)}
                </div>
            </div>
        </>
    )
}