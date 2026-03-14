// 1. Obtener el año actual para el primer párrafo del footer
const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

// 2. Obtener la fecha de última modificación para el segundo párrafo
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;