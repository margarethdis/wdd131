// Obtener la fecha actual y la fecha de la última modificación del documento
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;

// Cálculo de Wind Chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3.0) {
    return (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  } else {
    return 'N/A';
  }
}

// Simulación de datos de temperatura y velocidad del viento
const temperature = 45; // °F
const windSpeed = 10; // mph

// Mostrar Wind Chill en la tarjeta de clima
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = windChill;
