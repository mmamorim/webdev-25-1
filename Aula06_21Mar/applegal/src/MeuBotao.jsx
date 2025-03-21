
function MeuBotao({label}) {

    return (
        <>
            <span className="border border-cyan-800 rounded px-1 bg-blue-200 hover:bg-blue-600 hover:border-3 cursor-pointer mx-2">
                {label}
            </span>
        </>
    )
}

export default MeuBotao