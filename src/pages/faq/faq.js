import './faq.sass';
import '../common/base.sass';

const sidebarBtn = document.querySelector('.blog-btn');
const sidebar = document.querySelector('.faq-sidebar');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('faq-sidebar_active');
  sidebarBtn.classList.toggle('blog-btn_active');
});

const sidebarButtons = document.querySelectorAll('.faq-sidebar__link');
const questions = document.querySelectorAll('.faq-question');

for (let i = 0; i < sidebarButtons.length; i++) {
  sidebarButtons[i].addEventListener('click', (e) => {
    e.preventDefault();
    for (let j = 0; j < sidebarButtons.length; j++) {
      if (j === i) {
        sidebarButtons[j].classList.add('faq-sidebar__link_active');
        questions[j].classList.add('faq-question_active');
      } else {
        sidebarButtons[j].classList.remove('faq-sidebar__link_active');
        questions[j].classList.remove('faq-question_active');
      }
    }
  });
}