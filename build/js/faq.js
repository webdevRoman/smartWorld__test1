"use strict";

var sidebarBtn = document.querySelector('.blog-btn');
var sidebar = document.querySelector('.faq-sidebar');
sidebarBtn.addEventListener('click', function () {
  sidebar.classList.toggle('faq-sidebar_active');
  sidebarBtn.classList.toggle('blog-btn_active');
});