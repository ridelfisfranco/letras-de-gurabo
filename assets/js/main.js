/* ==========================================================
   LetrasDeGurabo v3.0 — js/main.js
   Práctica 1 · Jornada 2 · Autor(a): Enmanuel franco Ridelfis
   ========================================================== */


console.log("LetrasDeGurabo v3.0: ../js/main.js cargado correctamente");

/*  Saludo segun la hora */
const saludo = document.querySelector("#saludo");
const hora = new Date().getHours();

if (saludo) {
    if (hora >= 5 && hora < 12) {
        saludo.textContent = "¡Buenos dias! Bienvenido a Letras De Gurabo - Tu biblioteca.";
    }
    else if (hora >= 12 && hora < 19) {
        saludo.textContent = "¡Buenas tardes! Bienvenido a Letras De Gurabo - Tu biblioteca.";
    }
    else {
        saludo.textContent = "¡Buenas noches! Bienvenido a Letras De Gurabo - Tu biblioteca.";
    }
}