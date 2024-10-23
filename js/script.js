(function($){
  $(document).ready(function(){

    // Show/hide menu in header

    // show/hide menu on click
    $('.js-menu-btn').on('click', function() {
      $('.js-menu-btn').removeClass('opened');
      $('.js-menu').slideUp();

      if($(this).hasClass('opened')) {
        $(this).removeClass('opened').find('.js-menu').slideUp();
      } else {
        $(this).addClass('opened').find('.js-menu').slideDown();
      }
    });

    // hide menu on click outside
    $(document).click(function(e){ 
      if ($(e.target).closest('.js-menu-btn').length === 0) {
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
      }
    });

    //hide menu on scroll
    var lastScrollTop = 0;
    $(window).scroll(function(){
      let st = $(this).scrollTop();
      if (st !== lastScrollTop) {
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
      }
      lastScrollTop = st;
    });


    // Show/hide menu on mobile
    $('.js-mobile-nav-btn').on('click', function() {
      if($(this).hasClass('opened')) {
        $(this).removeClass('opened').closest('.header').find('.js-nav').slideUp();
      } else {
        $(this).addClass('opened').closest('.header').find('.js-nav').slideDown();
      }
    });

    // Accordion
    $('.js-accordion').on('click', '.js-accordion-btn', function(){
      const parent = $(this).parent(),
            mainParent = $(this).closest('.js-accordion'),
            windowWidth = $(window).width();

      if (mainParent.hasClass('js-accordion--mobile')) {
        if (windowWidth > 767) {
          return false
        }
      }

      if (parent.hasClass('opened')) {
        parent.removeClass('opened').find('.js-accordion-content').slideUp();
      } else {
        parent.addClass('opened').find('.js-accordion-content').slideDown();
      }
    });
  })
})(jQuery)