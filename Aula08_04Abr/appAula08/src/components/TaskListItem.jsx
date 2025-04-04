import { Icon } from "@iconify/react/dist/iconify.js"

export default function TaskListItem({ taskName, idx, onRemove }) {

    function clickRemove() {
        console.log("clickRemove",idx);
        onRemove(idx)
    }

    return (
        <>
            <div className="bg-gray-200 p-2 rounded my-1 flex items-center justify-between">
                <div>
                    { taskName }
                </div>
                <div className="flex items-center gap-2">
                    <div onClick={clickRemove} className="border border-black rounded-2xl px-1.5 pt-1 bg-gray-800 text-white">
                        <Icon icon="mdi:delete" />
                    </div>
                    <div className="border border-black rounded-2xl px-1.5 pt-1 bg-green-800 text-white">
                        <Icon icon="mdi:check" />
                    </div>
                </div>
            </div>
        </>
    )
}