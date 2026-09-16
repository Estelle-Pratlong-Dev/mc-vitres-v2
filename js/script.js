$(document).ready(function () {

    const $navLinks = $('#navMain .nav-link');
    const $sections = $('main section, header');

    // Année du copyright dans le footer
    $('#year').text(new Date().getFullYear());

    // Menu mobile : bascule en CSS pur (max-width: 991px), sans le composant
    // Collapse de Bootstrap — celui-ci anime la hauteur via un style inline,
    // bloqué par la Content-Security-Policy (style-src sans unsafe-inline).
    $('#navToggle').on('click', function () {
        const ouvert = $('#navMain').toggleClass('show').hasClass('show');
        $(this).attr('aria-expanded', ouvert);
    });

    // Défilement doux au clic sur un lien du menu
    $navLinks.on('click', function (e) {
        e.preventDefault();
        const $target = $($(this).attr('href'));

        $('html, body').animate({ scrollTop: $target.offset().top - 70 }, 600);

        $('#navMain').removeClass('show');
        $('#navToggle').attr('aria-expanded', false);
    });

    // Mise en surbrillance du lien actif selon la section visible
    function activateNav() {
        const scrollPos = $(window).scrollTop() + 100;
        let currentId = 'accueil';

        $sections.each(function () {
            if ($(this).offset().top <= scrollPos) {
                currentId = $(this).attr('id');
            }
        });

        $navLinks.removeClass('active');
        $navLinks.filter('[href="#' + currentId + '"]').addClass('active');
    }

    // Fond plein sur la nav dès que la page défile
    function toggleNavBackground() {
        if ($(window).scrollTop() > 20) {
            $('#mainNav').addClass('scrolled');
        } else {
            $('#mainNav').removeClass('scrolled');
        }
    }

    $(window).on('scroll', function () {
        activateNav();
        toggleNavBackground();
    });

    activateNav();
    toggleNavBackground();

})
