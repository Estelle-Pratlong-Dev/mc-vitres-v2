$(document).ready(function () {

    const $navLinks = $('#navMain .nav-link');
    const $sections = $('main section, header');

    // Défilement doux au clic sur un lien du menu
    $navLinks.on('click', function (e) {
        e.preventDefault();
        const $target = $($(this).attr('href'));

        $('html, body').animate({ scrollTop: $target.offset().top - 70 }, 600);

        if ($('#navMain').hasClass('show')) {
            $('#navMain').collapse('hide');
        }
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
