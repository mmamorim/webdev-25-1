import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Card({ children }) {
    const [show, setShow] = useState(true)

    function fechar() {
        console.log("fechar");
        setShow(false)
    }

    return (
        <>
            {
                show ?
                <div className="relative border border-black p-2 rounded w-80">
                    <div onClick={fechar} className="absolute right-2 bg-gray-200 rounded-lg flex items-center p-1 hover:bg-gray-400">
                        <Icon icon="mdi:close" />
                    </div>
                    {children}
                </div>
                : ""
            }
        </>
    )
}