const navTriggerEl = document.querySelector('.arrow');
const navTriggerBarsEl = document.querySelectorAll('.arrow__bar');
const navListEl = document.querySelector('.nav__list');
const navListItemsEl = document.querySelectorAll('.nav__list-item');
console.log(navTriggerEl);
console.log(navTriggerBarsEl);
console.log(navListEl);

navTriggerEl.addEventListener('click', _ => {
  navTriggerBarsEl.forEach( el => {
    el.classList.toggle('change');
  })
  navListEl.classList.toggle('open');
  navListItemsEl.forEach( el => {
    el.classList.toggle('fade');
  })
})