
function Emoji() {

    let emojis = [ '🚗', '🐈', '🛺' ]
    let idx = parseInt(Math.random()*3)

    function fazAlgo() {
        console.log("Você clicou no emoji "+emojis[idx])
    }

    return(
        <>
            <span onClick={fazAlgo}>{emojis[idx]}</span>
        </>
    )
}

export default Emoji