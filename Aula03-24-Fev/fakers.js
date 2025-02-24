import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"

export function fakeRG() {
    return Math.random().toString().slice(3, 12)
}

export function fakeNome() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

export function fakeSobrenome() {
    let idx = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[idx]
}

//console.log("nomes: ",nomes)