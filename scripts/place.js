document.addEventListener('DOMContentLoaded', () => {
  // 1. Footer dates
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  // 2. Static values
  const temperature = 5; // °C
  const windSpeed = 12;  // km/h

  // 3. One-line function to calculate Wind Chill (°C / km/h)
  function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
  }

  // 4. Check conditions and display
  const windChillElement = document.getElementById('windchill-output');

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});