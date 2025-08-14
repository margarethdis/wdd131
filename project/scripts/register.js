// JavaScript para manejar el dinamismo en el formulario

// Función para actualizar el contador de reseñas
let reviewCount = 0;

// Obtener el formulario y el contador
const reviewForm = document.getElementById('reviewForm');
const reviewCountElement = document.getElementById('reviewCount');

// Manejar el envío del formulario
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real para demostración

    // Validar que al menos se haya seleccionado una calificación
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert('Please provide a rating!');
        return;
    }

    // Incrementar el contador de reseñas
    reviewCount++;
    reviewCountElement.textContent = `Number of reviews submitted: ${reviewCount}`;

    // Limpiar el formulario después de enviar (opcional)
    reviewForm.reset();
});

// Mostrar el año y la última modificación
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;