import { fakeRG, fakeNome } from "./fakers.js"

export function createUser() {
    let user = {
        nome: fakeNome(),
        sobrenome: "Silva",
        rg: fakeRG(),
        email: "ana@ana.com"
    }
    return user    
}