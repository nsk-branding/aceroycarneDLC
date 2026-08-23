/**
 * main.js - Inicializador directo del juego
 */
window.addEventListener("DOMContentLoaded", () => {
    console.log("Iniciando Sueños de Acero y Carne de forma directa...");
    
    // Arranque directo del motor sin validaciones intermedias
    if (typeof Engine !== "undefined") {
        Engine.init();
    } else {
        console.error("El motor (Engine) no está disponible.");
        document.getElementById("dialogue-text").textContent = "Error crítico: El motor no se pudo inicializar.";
    }
});