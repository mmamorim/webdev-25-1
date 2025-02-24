import { fakeRG, fakeNome, fakeSobrenome } from "./fakers.js"

export function createUser() {
    let user = {
        nome: fakeNome(),
        sobrenome: fakeSobrenome(),
        rg: fakeRG(),
        email: "ana@ana.com"
    }
    return user    
}