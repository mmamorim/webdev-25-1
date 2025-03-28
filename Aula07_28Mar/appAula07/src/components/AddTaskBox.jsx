
export default function AddTaskBox() {

    return (
        <>
            <div className="border border-black p-2 rounded m-2 md:w-120">
                <div>
                    Digite o nome da tarefa
                </div>
                <hr className="my-1" />
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Tarefa:
                    </div>
                    <input type="text" className="border border-black p-1 w-45" />
                    <button className="border border-black px-1 rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}