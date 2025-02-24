import nomes from "./nomes.js"

export function fakeRG() {
    return Math.random().toString().slice(3, 12)
}

export function fakeNome() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}
//console.log("nomes: ",nomes)