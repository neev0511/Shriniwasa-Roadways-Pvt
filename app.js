const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const about = document.querySelector('#About');
const drop = document.querySelector('#Drop');
const contact = document.querySelector('#Contact');
const drop2 = document.querySelector('#Drop2');

navbar.addEventListener("click", () => {
  navlinks.classList.toggle("open");
})
about.addEventListener("click", () => {
  drop.classList.toggle("open");
})
contact.addEventListener("click", () => {
  drop2.classList.toggle("open");
})
