//this code is for select the classes in the index
const pantalla = document.querySelector(".calculadora-pantalla");
const botones = document.querySelectorAll(".calculadora-boton");

//se recorre todos los botones y se añade un evento al dar click
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;        
        if (boton.id === "calculadora-boton-borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }            
            return;
        }

        if (boton.id === "calculadora-boton-igual") {        
            try {                
                var firstChart = pantalla.textContent.charAt(pantalla.textContent.length - (pantalla.textContent.length + 1));
                var lastChart = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if (lastChart === "/" || firstChart === "/") {
                    pantalla.textContent = "Syntax error";    
                } else {
                    pantalla.textContent = eval(pantalla.textContent);
                }                
            } catch (error) {
                pantalla.textContent = "Syntax error";
            }
            return;
        }

        if (boton.id === "calculadora-boton-limpiar") {
            pantalla.textContent = "0";
            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax error") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }        
        
    })
})