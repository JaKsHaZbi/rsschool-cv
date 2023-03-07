let disableScroll = false
let scrollPos = 0

$(window).on('load',function() { 
  $("#loading").fadeOut('slow');
 });

$('.back-to-top').fadeOut();

//highlight.js
document.querySelectorAll('div.code').forEach(el => {
    hljs.highlightElement(el);
})

//back-to-top
window.onscroll = function(ev) {
  if ((window.scrollY) > 2) {
    if ($(window).width() >= 780) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  }
	if ((window.scrollY) < 2) {
		if ($(window).width() >= 780) {
		  $('.back-to-top').fadeOut();
    } else {
			$('.back-to-top').fadeOut();
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
  $('.back-to-top').click(function(){
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


// Initialize Swiper
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
    // pauseOnMouseEnter: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

