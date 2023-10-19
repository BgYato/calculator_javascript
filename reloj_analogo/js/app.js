const deg = 6;

const horas = document.getElementById("reloj_hora");
const minutos = document.getElementById("reloj_minuto");
const segundos = document.getElementById("reloj_segundo");

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`
    segundos.style.transform = `rotate(${seg}deg)`
})