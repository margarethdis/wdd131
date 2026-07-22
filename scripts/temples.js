// ===== Menú hamburguesa =====
const hamburgerBtn = document.querySelector('#hamburger-btn');
const mainNav = document.querySelector('#main-nav');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');

  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  hamburgerBtn.querySelector('.hamburger-icon').innerHTML = isOpen ? '&times;' : '&#9776;';
});

// ===== Footer: año y última modificación =====
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;