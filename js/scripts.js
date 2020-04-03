(function($) {
"use strict";

// Navbar BG color
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
	});
});


// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').on("click", function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

// Heart button
$('.wishlist a').on("click", function() {
  $(this).find('i').toggleClass('fa-heart fas fa-heart');
});

// Cart page - Remove row
$('.remove-row').on('click', function() {
  $(this).parent().parent().fadeOut(1000, function(){
  $(this).closest('tr').remove()})
});


})(jQuery);