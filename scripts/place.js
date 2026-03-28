// 1. Footer: Año actual y última modificación
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// 2. Datos estáticos para el clima (SPS suele estar a 28-30°C)
const temperature = 28; // Celsius
const windSpeed = 12;   // km/h

// 3. Función para calcular Wind Chill (Métrica)
// Retorna el valor calculado con un decimal
const calculateWindChill = (t, v) => {
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);
};

// 4. Lógica para mostrar el resultado o N/A
const displayWindChill = () => {
    const windChillElement = document.getElementById("windchill");
    
    // Requisito: Temp <= 10 °C AND Wind > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.innerHTML = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillElement.innerHTML = "N/A";
    }
};

// Llamar a la función al cargar la página
displayWindChill();