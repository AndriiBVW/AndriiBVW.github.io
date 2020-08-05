window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const btn = document.querySelector('.alarm-btn');
  const box = document.querySelector('.alarm-box');
  const boxText = document.querySelector('.alarm-box__text');

  boxText.textContent = "This and other portfolio pages are demo";
  
  if (localStorage.hasOwnProperty('timeAction')) {
    const newTimeAction = new Date().getTime();
    const timeAction = JSON.parse(localStorage.getItem('timeAction'));
    const timer = newTimeAction - timeAction;
  
    if (timer > 172800000) {
      localStorage.clear();
      showAlarm();
    }
  } else {
    showAlarm();
  }

  function showAlarm() {
    box.style.display = 'block';
    btn.addEventListener('click', () => {
      
      box.classList.add('alarm-box_closed');
      localStorage.setItem('alarm', true);
      localStorage.setItem('timeAction', JSON.stringify(new Date().getTime()));
      
      setTimeout(() => {
        box.style.display = 'none';
      }, 600);
    });
  }
});