
console.log("oi gente");

//let i = 1
//while(i<10) {
//    console.log(i);
//    i++
//}

let elem = document.getElementById("botao")
console.log(elem);

elem.addEventListener("click",jogoDoPIM)

function jogoDoPIM() {
    let elem = document.getElementById("caixa")
    let qtde = parseInt(elem.value)
    let texto = ""
    for (let i = 1; i < qtde; i++) {
        if (i % 4 == 0) {
            texto = texto + "PIM "
        } else {
            texto = texto + i + ","
        }
    }
    console.log(texto);
}
