const primaryHeader= document.querySelector(".primary-header")
const navToggle= document.querySelector(".mobile-nav-toggle");
const primaryNav=document.querySelector(".primary-navigation");




navToggle.addEventListener("click",()=>{
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded",false) 
    : navToggle.setAttribute("aria-expanded",true)
primaryNav.toggleAttribute("data-visible");
primaryHeader.toggleAttribute("data-overlay");
});

if (typeof(module) !== 'undefined') {
  module.exports = Swiper;
} 
else if (typeof define === 'function' && define.amd) {
  define([], function () {
      'use strict';
      return Swiper;
  });
}

const swiper = new Swiper (".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
     slidesPerView: 1,
     spaceBetween: 50
    },
    // when window width is >= 480px
    520: {
     slidesPerView: 2,
     spaceBetween: 60
    },
   
    // when window width is >= 640px
    720: {
     slidesPerView: 3,
     spaceBetween: 60
    }

   },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});