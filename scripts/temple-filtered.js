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
    // Cambiar la clase menu-active al menú para mostrarlo/ocultarlo
    menu.classList.toggle("menu-active");
});

// Array de datos de templos
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: "11,500 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: "74,792 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: "96,630 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: "6,861 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: "156,558 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: "9,600 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: "116,642 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];

// Obtener el contenedor del templo
const templeContainer = document.getElementById("temple-container");

// Iterar sobre el array de templos y crear tarjetas para cada uno
temples.forEach(temple => {
    // Crear un div para la tarjeta
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    // Crear una imagen
    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading = "lazy"; // Carga diferida de la imagen

    // Crear un título
    const templeTitle = document.createElement("h3");
    templeTitle.textContent = temple.templeName;

    // Crear un párrafo para la ubicación
    const templeLocation = document.createElement("p");
    templeLocation.textContent = "Location: " + temple.location;

    // Crear un párrafo para la fecha de dedicación
    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = "Dedicated: " + temple.dedicated;

    // Crear un párrafo para el área
    const templeArea = document.createElement("p");
    templeArea.textContent = "Area: " + temple.area;

    // Agregar los elementos al div de la tarjeta
    templeCard.appendChild(templeImage);
    templeCard.appendChild(templeTitle);
    templeCard.appendChild(templeLocation);
    templeCard.appendChild(templeDedicated);
    templeCard.appendChild(templeArea);

    // Agregar la tarjeta al contenedor principal
    templeContainer.appendChild(templeCard);
});
