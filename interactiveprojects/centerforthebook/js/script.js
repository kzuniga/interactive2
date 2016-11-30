$(window).scroll(function() {

    if ($(this).scrollLeft()>0)
     {
        $('.fade').fadeOut();
     }
    else
     {
      $('.fade').fadeIn();
     }
 });