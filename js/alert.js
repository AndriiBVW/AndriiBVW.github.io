window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const btn = document.querySelector('.alarm-btn');
  const box = document.querySelector('.alarm-box');
  const boxText = document.querySelector('.alarm-box__text');

  boxText.textContent = "This and other portfolio pages are demo";

  if (!localStorage.hasOwnProperty('alarm')) {
    box.style.display = 'block';
    btn.addEventListener('click', () => {
      box.classList.add('alarm-box_closed');
      localStorage.setItem('alarm', true);
      setTimeout(() => {
        box.style.display = 'none';
      }, 600);
    });
  }
});