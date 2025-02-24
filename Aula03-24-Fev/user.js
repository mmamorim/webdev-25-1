import { fakeRG } from "./fakers.js"

export function createUser() {
    let user = {
        nome: "Ana",
        sobrenome: "Silva",
        rg: fakeRG(),
        email: "ana@ana.com"
    }
    return user    
}