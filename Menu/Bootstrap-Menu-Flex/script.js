const  dropdownTrigger = document.querySelector('.dropdown__trigger');
const dropdownMenu = document.querySelector('.dropdown__menu');
const test = document.querySelector('.test');

dropdownTrigger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('expand');
})