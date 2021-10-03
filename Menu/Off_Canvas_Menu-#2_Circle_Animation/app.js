const navTriggerEl = document.querySelector('.hamburger');
const navTriggerBarEl = document.querySelectorAll('.hamburger span')
const navLinksEl = document.querySelector('.nav__links');
const linksEl = document.querySelectorAll('.nav__links li');
console.log(navTriggerEl);
console.log(linksEl);

navTriggerEl.addEventListener('click', _ => {
  navTriggerBarEl.forEach( bar => {
    bar.classList.toggle('change')
  })
  navLinksEl.classList.toggle('open');
  linksEl.forEach(link => {
    link.classList.toggle('fade');
  })
})