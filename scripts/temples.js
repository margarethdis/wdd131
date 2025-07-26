// getdates.js

// Obtener el año actual y actualizar el contenido del span con id 'currentyear'
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtener la última fecha de modificación del documento y actualizar el contenido del p con id 'lastModified'
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified on: " + lastModified;

// Obtener el elemento del icono de hamburguesa
const hamburger = document.getElementById("hamburger");
// Obtener el menú (ul)
const menu = document.querySelector("nav ul");

// Añadir el evento de clic al icono de hamburguesa
hamburger.addEventListener("click", () => {
    // Cambiar la clase 'menu-active' al menú para mostrarlo/ocultarlo
    menu.classList.toggle("menu-active");
});