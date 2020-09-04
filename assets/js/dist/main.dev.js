"use strict";

$(document).ready(function () {
  $('.id-menu-icon').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-opened');
  });
  $('.home-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    responsive: {}
  });
});