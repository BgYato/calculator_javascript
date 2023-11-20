let esqueleto = "off";
let esqueletoStop = document.getElementById("estatico");
let sonidoBoton = new Audio ('./sound/boton_bailar.mp3');
let audio = new Audio ('./sound/audio.mp3');

function bailar() {
    if (esqueleto == "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=> {
            sonidoBoton.play()
        })
        esqueletoStop.addEventListener('click', ()=> {
            audio.play()
        })
    } else {
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=> {
            audio.pause()
        })
    }
}