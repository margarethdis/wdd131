document.addEventListener('DOMContentLoaded', function () {
    // Desplazamiento suave para anclas
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para dejar espacio arriba
                behavior: 'smooth'
            });
        });
    });

    // Efecto fade-in para secciones al hacer scroll
    const sections = document.querySelectorAll('.history-of-hangul, .evolution-of-hangul, .cultural-significance, .conclusion');
    
    const fadeInOnScroll = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= windowHeight - 100) { // Aparece antes de llegar al final de la pantalla
                section.classList.add('fade-in');
            }
        });
    };

    // Inicializar el efecto de fade-in
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
});