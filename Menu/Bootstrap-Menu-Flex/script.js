const  dropdownTrigger = document.querySelector('.dropdown__trigger');
const dropdownMenu = document.querySelector('.dropdown__menu');
const test = document.querySelector('.test');

dropdownTrigger.addEventListener('click', () => {
  if(!dropdownMenu.classList.contains('expand')) {
    dropdownMenu.classList.toggle('expand');
    setTimeout(() => dropdownMenu.classList.toggle('show'), 300);
  } else {
    setTimeout( () => dropdownMenu.classList.toggle('expand'), 300)
    dropdownMenu.classList.toggle('show');
  }
})