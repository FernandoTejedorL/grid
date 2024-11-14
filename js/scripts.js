const rootStyles = document.documentElement.style;
const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');

const toogleMenu = () => {
  menuElement.classList.toggle('menu-show');
};

menuIconElement.addEventListener('click', toogleMenu);
