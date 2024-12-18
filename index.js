document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
