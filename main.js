$(document).ready(function() {


    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('.bar.half').toggleClass('open');

    });



    $('.skill').on('mouseover', function() {
        $(this).addClass('animation');

    });
    $('.skill').on('touchstart', this, function() {
        $(this).addClass('animation');

    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        $('.bar.half').removeClass('open');

    });

    $('.up').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $('nav a[href*="#"]').on('click', function() {

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);

    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});