// getdates.js

// Obtener el año actual y actualizar el contenido del span con id 'currentyear'
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtener la última fecha de modificación del documento y actualizar el contenido del p con id 'lastModified'
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified on: " + lastModified;
