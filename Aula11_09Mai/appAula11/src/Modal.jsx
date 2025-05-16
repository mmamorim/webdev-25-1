import { useEffect, useState } from "react"

export default function Modal({ children, show }) {
    const [visible, setVisible] = useState(show)

    function close() {
        setVisible(false)
    }

    function open() {
        setVisible(true)
    }

    return (
        <>
            <button onClick={open}>
                abre modal
            </button>
            {
                visible ?
                    <div className="w-screen h-screen bg-black/40 absolute top-0 z-10">
                        <div className="relative w-80 h-60 bg-white rounded-xl mx-auto mt-20">
                            <div className="text-center">
                                {children}
                            </div>
                            <div className="absolute bottom-3 w-full">
                                <div className="flex items-center justify-center gap-2">
                                    <button onClick={close} className="border bg-gray-400 rounded px-1 text-white text-lg">
                                        Cancelar
                                    </button>
                                    <button onClick={close} className="border bg-gray-800 rounded px-1 text-white text-lg">
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </>
    )
}