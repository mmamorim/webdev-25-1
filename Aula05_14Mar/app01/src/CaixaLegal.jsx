import Emoji from "./Emoji";

function CaixaLegal({ label, cor }) {

    let nome = "Bia"
    console.log();
    
    return(
        <>
            <span className={"badge text-bg-"+cor+" mx-1"}>
                {label} <Emoji /> {nome}
            </span>
        </>
    )
}

export default CaixaLegal