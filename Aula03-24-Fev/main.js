
import { createUser } from "./user.js";

let u = createUser()
let u2 = createUser()
console.log("user: ",u);
console.log("user: ",u2);

let elem = document.getElementById("nome")
elem.innerText = u.nome+" "+u.sobrenome

let elemFoto = document.getElementById("foto")
console.log("elemFoto",elemFoto);

elem.src = u.image