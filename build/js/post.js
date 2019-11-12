"use strict";

var sidebarBtn = document.querySelector('.blog-btn');
var sidebar = document.querySelector('.blog-sidebar');
sidebarBtn.addEventListener('click', function () {
  sidebar.classList.toggle('blog-sidebar_active');
  sidebarBtn.classList.toggle('blog-btn_active');
});