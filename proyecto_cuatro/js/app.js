const deg = 6;

const horas = document.getElementById("reloj_hora");
const minutos = document.getElementById("reloj_minuto");
const segundos = document.getElementById("reloj_segundo");
let tiempoHorario = "";

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`
    segundos.style.transform = `rotate(${seg}deg)`
})

function calcularTiempo() {
    let tiempo = new Date();

    let hora = tiempo.getHours();    
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    if (hora > 12) {
        hora = (hora - 2) - 10;
        tiempoHorario = "P.M"
    } else {
        tiempoHorario = "A.M"
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaReloj = hora + ":" + minuto + ":" + segundos + " " + tiempoHorario;
    let relojDigital = document.querySelector(".reloj_digital");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);