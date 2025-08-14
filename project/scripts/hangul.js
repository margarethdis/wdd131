// Selecciona el botón y el menú
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Agrega un evento de clic para alternar la clase 'active'
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});