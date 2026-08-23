/**
 * main.js - Arranque seguro
 */
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado. Arrancando motor...");
    
    try {
        if (typeof Engine !== "undefined") {
            Engine.init();
        } else {
            throw new Error("El objeto Engine no está definido.");
        }
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
        const textElement = document.getElementById("dialogue-text");
        if (textElement) {
            textElement.textContent = "Error al iniciar: " + error.message;
        }
    }
});