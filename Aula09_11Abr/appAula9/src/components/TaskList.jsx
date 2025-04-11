import { Icon } from "@iconify/react/dist/iconify.js"
import TaskListItem from "./TaskListItem"
import { useState, useEffect } from "react"
import AddTaskBox from "./AddTaskBox";
import sgdb from "../sgdb.js"

sgdb.init()

export default function TaskList() {
    const [tasks, setTasks] = useState({})

    useEffect(() => {
        console.log("passei aqui")
        setTasks(sgdb.getData().todos)
    }, []);

    function addTask(taskName) {
        console.log("addTask", taskName);
        let task = {
            id: sgdb.newID("task"),
            task: taskName
        }
        console.log("task",task);
        sgdb.data.todos[task.id] = task
        sgdb.write()
        setTasks(sgdb.getData().todos)
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
                    {Object.keys(tasks).map((id) => <TaskListItem onRemove={onClickRemove} key={id} taskName={tasks[id].task} idx={id}  />)}
                </div>
            </div>
        </>
    )
}