// 1. Selección de elementos (Solo una vez para evitar errores)
const mainnav = document.querySelector('#navbar'); // Usamos el ID para mayor seguridad
const hambutton = document.querySelector('#menu');

// 2. Lógica del Menú Hamburguesa
// Verificamos que los elementos existan antes de agregar el evento
if (hambutton && mainnav) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show'); // Activa el menú en CSS
        hambutton.classList.toggle('open'); // Cambia el icono ☰ a X
    });
}

// 3. Fechas dinámicas para el Footer
const yearElement = document.querySelector("#currentyear");
const lastModElement = document.querySelector("#lastModified");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (lastModElement) {
    lastModElement.textContent = `Last Modification: ${document.lastModified}`;
}