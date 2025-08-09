// ========== Array de templos ==========
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "6 April 1893",
        area: 253015,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/cd4d22a965af18a50f8589bb1b917859d5935209/full/!1600%2C1071/0/default"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "27 November 1919",
        area: 42500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/500%2C/0/default"
    },
    {
        templeName: "Kirtland Temple",
        location: "Kirtland, Ohio",
        dedicated: "27 March 1836",
        area: 11000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/cpgqik2ds9fs8ktmxxzoruxy5863bwhtycp1vtvt/pct:0,7.8,100,84.5/!1000%2C563/0/default"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "10 March 2019",
        area: 41010,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default"
    },
    // ---- Templos agregados por ti ----
    {
        templeName: "Tegucigalpa Honduras Temple",
        location: "Tegucigalpa, Honduras",
        dedicated: "17 March 2013",
        area: 28500,
        imageUrl: "https://churchofjesuschrist.org/imgs/5eafb4407decaf72553241072f38e2003df39658/full/500%2C/0/default"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "21 May 2017",
        area: 44000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/500%2C/0/default"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah",
        dedicated: "7 June 2015",
        area: 96630,
        imageUrl: "https://churchofjesuschrist.org/imgs/7b998062094c11eca393eeeeac1e50df07c8fd34/full/500%2C/0/default"
    }
];

// ========== Función para mostrar templos ==========
function displayTemples(filteredList) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = ""; // Limpia contenido previo

    filteredList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

// ========== Filtros ==========
document.getElementById("home").addEventListener("click", () => {
    document.getElementById("current-menu").textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    document.getElementById("current-menu").textContent = "Old Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    document.getElementById("current-menu").textContent = "New Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    document.getElementById("current-menu").textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    document.getElementById("current-menu").textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});

// ========== Footer dinámico ==========
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ========== Mostrar todos al inicio ==========
displayTemples(temples);
