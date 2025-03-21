import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function CaraCoroa() {
    //let estado = "cara"
    const [estado, setEstado] = useState("cara")

    function mudarEstado() {
        if (estado == 'cara') {
            //estado = 'coroa'
            setEstado("coroa")
        } else {
            //estado = 'cara'
            setEstado("cara")
        }
        console.log("estado: ", estado);
    }

    return (
        <>
            <div className="flex items-center justify-between px-1 border rounded bg-gray-300 w-22 m-2 cursor-pointer">
                <div onClick={mudarEstado} className="text-xl">
                    {estado}
                </div>
                { estado == 'cara' ? <Icon icon="tabler:coin" className='text-xl'/> : <Icon icon="tabler:coin-filled" className='text-xl'/> }
            </div>
        </>
    )
}