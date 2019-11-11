import './faq.sass';
import '../common/base.sass';

const sidebarBtn = document.querySelector('.blog-btn');
const sidebar = document.querySelector('.faq-sidebar');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('faq-sidebar_active');
  sidebarBtn.classList.toggle('blog-btn_active');
});