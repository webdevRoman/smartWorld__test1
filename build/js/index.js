"use strict";

var slider = document.querySelector('.reviews-items');
var sliderItem = document.querySelector('.reviews-item');
var navButtons = document.querySelectorAll('.reviews-pagination__item');
var slideWidth = sliderItem.offsetWidth + 30;

var _loop = function _loop(i) {
  navButtons[i].addEventListener('click', function (e) {
    slider.style.transform = "translateX(-".concat(slideWidth * i, "px)");

    for (var j = 0; j < navButtons.length; j++) {
      if (j === i) {
        navButtons[j].classList.add('reviews-pagination__item_active');
      } else {
        navButtons[j].classList.remove('reviews-pagination__item_active');
      }
    }
  });
};

for (var i = 0; i < navButtons.length; i++) {
  _loop(i);
}