
export default function AddTaskBox() {

    return (
        <>
            <div className="border border-black p-2 rounded w-120 m-2">
                <div>
                    Digite o nome da tarefa
                </div>
                <hr className="my-1" />
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Tarefa:
                    </div>
                    <input type="text" className="border border-black p-1" />
                    <button className="border border-black px-1 rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}