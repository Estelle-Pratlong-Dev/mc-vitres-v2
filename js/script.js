document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('#navMain .nav-link');
    const sections = document.querySelectorAll('main section, header');
    const navToggle = document.getElementById('navToggle');
    const navMain = document.getElementById('navMain');
    const mainNav = document.getElementById('mainNav');

    // Année du copyright dans le footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Menu mobile : bascule en CSS pur (max-width: 991px)
    navToggle.addEventListener('click', function () {
        const ouvert = navMain.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', ouvert);
    });

    // Ferme le menu mobile au clic sur un lien
    // (le défilement fluide est géré en CSS : scroll-behavior + scroll-margin-top)
    navLinks.forEach(function (lien) {
        lien.addEventListener('click', function () {
            navMain.classList.remove('show');
            navToggle.setAttribute('aria-expanded', false);
        });
    });

    // Mise en surbrillance du lien actif selon la section visible
    function activateNav() {
        const scrollPos = window.scrollY + 100;
        let currentId = 'accueil';

        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos) {
                currentId = section.id;
            }
        });

        navLinks.forEach(function (lien) {
            lien.classList.toggle('active', lien.getAttribute('href') === '#' + currentId);
        });
    }

    // Fond plein sur la nav dès que la page défile
    function toggleNavBackground() {
        mainNav.classList.toggle('scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', function () {
        activateNav();
        toggleNavBackground();
    });

    activateNav();
    toggleNavBackground();

});
