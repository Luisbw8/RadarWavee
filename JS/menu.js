const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menuLinks');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});
