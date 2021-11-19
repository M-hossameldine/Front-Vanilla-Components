const navbar = document.querySelector('.navbar');
const navbarLink = document.querySelector('.navbar__link');

window.onscroll = () => resizeNavbar();

function resizeNavbar() {
  if(document.documentElement.scrollTop > 80) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
}


