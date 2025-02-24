import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"
import emails from "./emails.js"

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

export function fakeEmail(nome) {
    let idx = parseInt(Math.random()*emails.length)
    let dominio = emails[idx]
    return nome+"@"+dominio
}

export function fakeImage() {
    let num = parseInt(Math.random()*100)
    return "https://randomuser.me/api/portraits/med/men/"+num+".jpg"
}
//console.log("nomes: ",nomes)