window.scrollTo({
    top: document.querySelector(this.getAttribute('href')).offsetTop,
    behavior: 'smooth'
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
