import { Icon } from "@iconify/react/dist/iconify.js"
import TaskListItem from "./TaskListItem"

export default function TaskList() {

    return (
        <>
            <div className="border border-black p-2 m-2 rounded md:w-120">
                <div>
                    Lista de tarefas:
                </div>
                <hr className="my-2" />
                <div>
                    <TaskListItem />
                    <TaskListItem />
                    <TaskListItem />
                    <TaskListItem />
                </div>
            </div>
        </>
    )
}