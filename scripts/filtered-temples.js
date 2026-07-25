// ===== Temple data =====
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // ----- Temples I added (minimum of 3 required) -----
  {
    templeName: "San Pedro Sula Honduras",
    location: "San Pedro Sula, Honduras",
    dedicated: "2024, October, 13",
    area: 35818,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52518-main.jpg"
  },
  {
    templeName: "Tegucigalpa Honduras",
    location: "Comayagüela, Honduras",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878-main.jpg"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg"
  }
];

// ===== DOM references =====
const templeGrid = document.querySelector('#temple-grid');
const navLinks = document.querySelectorAll('.main-nav a');

// ===== Build and display the temple cards =====
function displayTemples(templeArray) {
  templeGrid.innerHTML = '';

  templeArray.forEach((temple) => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString('en-US')} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    templeGrid.appendChild(figure);
  });
}

// ===== Filters =====
function getDedicationYear(temple) {
  return parseInt(temple.dedicated.split(',')[0], 10);
}

function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter((temple) => getDedicationYear(temple) < 1900);
    case 'new':
      return temples.filter((temple) => getDedicationYear(temple) > 2000);
    case 'large':
      return temples.filter((temple) => temple.area > 90000);
    case 'small':
      return temples.filter((temple) => temple.area < 10000);
    case 'home':
    default:
      return temples;
  }
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const filter = link.dataset.filter;
    displayTemples(filterTemples(filter));

    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    // On mobile, close the menu after choosing a filter
    if (mainNav.classList.contains('is-open')) {
      mainNav.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.querySelector('.hamburger-icon').innerHTML = '&#9776;';
    }
  });
});

// Show all temples when the page loads
displayTemples(temples);

// ===== Hamburger menu =====
const hamburgerBtn = document.querySelector('#hamburger-btn');
const mainNav = document.querySelector('#main-nav');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');

  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  hamburgerBtn.querySelector('.hamburger-icon').innerHTML = isOpen ? '&times;' : '&#9776;';
});

// ===== Footer: copyright year and last modified date =====
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;