(function($){
  $(document).ready(function(){

    // Show/hide menu in header

    // show/hide menu on click
    $('.js-menu-btn').on('click', function() {
      if($(this).hasClass('opened')) {
        $(this).removeClass('opened').find('.js-menu').slideUp();
      } else {
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
        $(this).addClass('opened').find('.js-menu').slideDown();
      }
    });

    // Show/hide menu on mobile
    $('.js-mobile-nav-btn').on('click', function() {
      if($(this).hasClass('opened')) {
        $(this).removeClass('opened').closest('.header').find('.js-nav').slideUp();
        $('.js-menu-btn').removeClass('opened');
        $('.js-menu').slideUp();
      } else {
        $(this).addClass('opened').closest('.header').find('.js-nav').slideDown();
      }
    });

    

    // hide menu on click outside
    const menu = $('.js-nav'),
          menuBtn = $('.js-mobile-nav-btn');

    $(document).click(function(e){ 
      const windowWidth = $(window).width();
      if ((!menu.is(e.target) && !menuBtn.is(e.target))
        && (menu.has(e.target).length === 0 && menuBtn.has(e.target).length === 0)) {
          menu.find('.js-menu-btn').removeClass('opened');
          menu.find('.js-menu').slideUp();
          if(windowWidth < 1200) {
            menuBtn.removeClass('opened');
            menu.slideUp();
          }
        }
    });

    //hide menu on scroll
    var lastScrollTop = 0;
    $(window).scroll(function(){
      let st = $(this).scrollTop();
      if (st !== lastScrollTop) {
        $('.js-menu-btn').removeClass('opened').closest('.header').find('.js-menu').slideUp();
        $('.js-mobile-nav-btn').removeClass('opened').closest('.header').find('.js-nav').slideUp();
      }
      lastScrollTop = st;
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


    // Tabs
    $('.js-tabs').on('click', '.js-tabs-btn', function(e){
      e.preventDefault();

      const dataHref = $(this).attr('href'),
            parent = $(this).closest('.js-tabs');
      
      $('.js-tabs-content').hide(0);
      $(parent).find('.active').removeClass('active');
      $(dataHref).fadeIn(300);
      $(this).addClass('active');
    });

    // Input 'tel' validate
    function addDashes(f)
    {
      console.log(f.val());
      let f_val = f.val();
      return "("+f_val.substr(0,3)+")"+f_val.substr(3,3)+"-"+f_val.substr(3,4);
    }

    // $('#phone-number').on('keydown', function() {
    //   //$(this).val(addDashes($(this)));
    //   $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
    // });   
    
    $('#phone-number').on('keydown', function(e) {
      var output,
        $this = $(this),
        input = $this.val();
  
      if(e.keyCode != 8) {
        input = input.replace(/[^0-9]/g, '');
        var area = input.substr(0, 3);
        var pre = input.substr(3, 3);
        var tel = input.substr(6, 4);
        if (area.length < 3) {
          output = "(" + area;
        } else if (area.length == 3 && pre.length < 3) {
          output = "(" + area + ")" + " " + pre;
        } else if (area.length == 3 && pre.length == 3) {
          output = "(" + area + ")" + " " + pre + "-" + tel;
        }
        $this.val(output);
      }
    });

  })
})(jQuery)