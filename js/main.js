/**
 * main.js - Punto de entrada principal
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Iniciando Sueños de Acero y Carne...");

    // Verificamos que existan el Motor y las Escenas antes de arrancar
    if (typeof Engine !== "undefined" && typeof SCENES !== "undefined") {
        Engine.init();
    } else {
        console.error("Error crítico: Faltan módulos del motor o guion.");
        const textElement = document.getElementById("dialogue-text");
        if (textElement) {
            textElement.textContent = "Error: Faltan archivos de script en la carpeta js/. Revisa que engine.js y scenes.js estén cargados.";
        }
    }
});