import { fakeRG, fakeNome, fakeSobrenome, fakeEmail, fakeImage } from "./fakers.js"

export function createUser() {
    let nome = fakeNome() 
    let user = {
        nome,
        sobrenome: fakeSobrenome(),
        rg: fakeRG(),
        email: fakeEmail(nome.toLowerCase()),
        image: fakeImage()
    }
    return user    
}