document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const temperature = 5;   // °C
const windSpeed = 12;    // km/h

function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windchillOutput = document.getElementById('windchill-output');

if (temperature <= 10 && windSpeed > 4.8) {
  windchillOutput.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windchillOutput.textContent = "N/A";
}