import { Icon } from "@iconify/react";

export default function TopBar() {

    return (
        <>
            <div className="flex items-center justify-start gap-2 m-2 p-2 bg-gray-800 text-white rounded md:w-120">
                <Icon icon="mdi:home" className="text-2xl" />
                <div className="text-xl font-bold">
                    Todo List
                </div>
            </div>
        </>
    )
}