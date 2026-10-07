const navbarToggle = document.queryselector('.navbar-toggle');
const navbarMenu = document.queryselector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
})
