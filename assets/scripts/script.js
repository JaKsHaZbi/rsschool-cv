let disableScroll = false
let scrollPos = 0

$(window).on('load',function() { 
  $("#loading").fadeOut('slow');
 });

$('#back-to-top').fadeOut();

//highlight.js
document.querySelectorAll('div.code').forEach(el => {
    hljs.highlightElement(el);
})

//back-to-top
window.onscroll = function(ev) {
  if ((window.scrollY) > 2) {
    if ($(window).width() >= 780) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  }
	if ((window.scrollY) < 2) {
		if ($(window).width() >= 780) {
		  $('#back-to-top').fadeOut();
    } else {
			$('#back-to-top').fadeOut();
		}
	}	
};

$(function(){
  $(window).bind('scroll', function(){
    if (disableScroll) $(window).scrollTop(scrollPos);
  });
  $(window).bind('touchmove', function(){
    $(window).trigger('scroll');
  });
});

$(function() {
  //Click event scroll to top button jquery
  $('#back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},600);
      return false;
  });
});

$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('is-active');
    $('.overlay').toggleClass('change');
    $('.nav').toggleClass('change');
    $('.wrapper').toggleClass('fixed-position');
  });
});

$('.nav a' ).on("click", function(){
  $('.hamburger').removeClass('is-active')
  $('.nav').removeClass('change')
  $('.overlay').removeClass('change')
  $('.wrapper').removeClass('fixed-position')
});

$('.overlay').click(function() {
  //Hide the menus if visible
  $('.hamburger').removeClass('is-active')
  $('.nav').removeClass('change')
  $('.overlay').removeClass('change')
  $('.wrapper').removeClass('fixed-position')
});

//Using stopPropagation is something that should be avoided as it breaks normal event flow in the DOM.
$('.hamburger').click(function(event){
  event.stopPropagation();
});
$('.nav').click(function(event){
  event.stopPropagation();
});