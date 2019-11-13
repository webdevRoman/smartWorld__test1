'use strict';

var sidebarBtn = document.querySelector('.blog-btn');
var sidebar = document.querySelector('.faq-sidebar');

sidebarBtn.addEventListener('click', function () {
  sidebar.classList.toggle('faq-sidebar_active');
  sidebarBtn.classList.toggle('blog-btn_active');
});

var sidebarButtons = document.querySelectorAll('.faq-sidebar__link');
var questions = document.querySelectorAll('.faq-question');

var _loop = function _loop(i) {
  sidebarButtons[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (var j = 0; j < sidebarButtons.length; j++) {
      if (j === i) {
        sidebarButtons[j].classList.add('faq-sidebar__link_active');
        questions[j].classList.add('faq-question_active');
      } else {
        sidebarButtons[j].classList.remove('faq-sidebar__link_active');
        questions[j].classList.remove('faq-question_active');
      }
    }
  });
};

for (var i = 0; i < sidebarButtons.length; i++) {
  _loop(i);
}