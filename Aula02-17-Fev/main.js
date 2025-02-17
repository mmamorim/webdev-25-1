
console.log("oi gente");

function converteSegundosFormatoRelogio(segundos) {
    let horas = parseInt(segundos / 3600)
    let minutos = parseInt((segundos % 3600) / 60)
    segundos = segundos % 60
    
    if(horas<10) {
        horas = "0"+horas
    }
    console.log(horas+":"+minutos+":"+segundos);    
}

//let s = parseInt(prompt("digite segundos"))
converteSegundosFormatoRelogio(3600)
console.log("oi gente");
converteSegundosFormatoRelogio(3456)

//console.log("horas",horas);
//console.log("minutos",minutos);
//console.log("segundos",segundos);
