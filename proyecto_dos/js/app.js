function calcularTiempo() {
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaReloj = hora + ":" + minuto + ":" + segundos;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);