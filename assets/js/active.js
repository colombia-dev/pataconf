/*****************************************
    Template Name: Anjum Coming Soon Template
    Description: This is a Coming Soon Template
    Author: WpOcean
    Version: 1.0
******************************************/
/******************************************
[  Table of contents  ]
*****************************************
    01. Mobile Menu
	02. Ajax Mailchamp
    03. Sticky Menu
	04. mooth scrolling
	05. Countdown
	06. Magnific Popup Video
    07. Wow js
    08. ScrollUp
	09. preloader
	10. Youtube Video BG



*****************************************
[ End table content ]
******************************************/

(function($) {
  "use strict";

  // 1. Mobile Menu
  $(".main-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu"
  });
  // 3. Sticky Menu
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

  $("#countdown").countdown("2019/10/12", function(event) {
    $(this).html(
      event.strftime(
        '<ul class="list-unstyled list-inline"><li>%D <span>days</span></li><li>%H <span>Houre</span></li><li>%M <span>min</span></li><li>%S <Span>sec</Span></li></ul>'
      )
    );
  });

  // 7. Wow js
  new WOW().init();

  // 8. ScrollUp
  $.scrollUp({
    scrollText: '<i class="fa fa-long-arrow-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade"
  });

  //9. preloader
  $(window).on("load", function() {
    $(".preloader-wave-effect").fadeOut();
    $("#preloader-wrapper")
      .delay(150)
      .fadeOut("slow");
  });
})(jQuery);
