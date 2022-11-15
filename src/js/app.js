import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-btn--active');
  menu.classList.toggle('menu--active');
  menuList.classList.toggle('menu__list--active');
});

const tableRows = document.querySelectorAll('.petition__table tbody tr');
tableRows.forEach((row) => {
  row.addEventListener('click', (e) => {
    if (row.children[3].innerHTML === 'Срок предоставления доступа истек') {
      const error = document.querySelector('.error');
      error.classList.add('error--visible');
      const close = document.querySelector('.error__close');
      close.addEventListener('click', () => {
        error.classList.remove('error--visible');
      });
    } else if (row.children[3].innerHTML === 'Зарегистрирован') {
      e.preventDefault();
    } else {
      window.location.href = './092-05-28-16-2022.html';
    }
  });
});

const formBtn = document.querySelector('.form__btn');
const form = document.querySelector('.form');
if (form != null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    const success = document.querySelector('.success');
    success.classList.add('success--visible');
    const close = document.querySelector('.success__close');
    close.addEventListener('click', () => {
      success.classList.remove('success--visible');
    });
  });
}
