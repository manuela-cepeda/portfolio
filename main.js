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

    //portfolio
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      




});