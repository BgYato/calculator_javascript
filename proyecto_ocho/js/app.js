let audio = new Audio('./audio/JingleBells.mp3');


let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.addEventListener("click", () => {
    bailarPapaNoel();
})

botonPause.addEventListener("click", () => {
    pausarPapaNoel();
})

function bailarPapaNoel() {    
    botonPause.classList.add("disponible");
    botonPlay.classList.remove("disponible")
    let papaNoelDiv = document.querySelector(".papaNoel");
    papaNoelDiv.classList.add("on");
    audio.play()
}

function pausarPapaNoel() {
    botonPause.classList.remove("disponible")
    botonPlay.classList.add("disponible")
    let papaNoelDiv = document.querySelector(".papaNoel");
    papaNoelDiv.classList.remove("on");
    audio.pause()
}

function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }
}

function cuentaRegresiva(tiempoFaltante, mensaje) {    

    let d = document.getElementById("dias");
    let h = document.getElementById("horas");
    let m = document.getElementById("minutos");
    let s = document.getElementById("segundos");

    let texto = document.getElementById("mensaje");

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);        

        d.innerHTML = t.diasFaltantes;
        h.innerHTML = t.horasFaltantes;
        m.innerHTML = t.minutosFaltantes;
        s.innerHTML = t.segundosFaltantes;

        if (t.tiempoFaltante < 1) {
            clearInterval(tiempoActual);     
            texto.innerText = mensaje;
            bailarPapaNoel()
        }

    }, 1000)
}

/* console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500')) */
cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500', '¡Feliz navidad!'); 