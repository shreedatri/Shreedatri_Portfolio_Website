//navbar hamburger
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
    const menu = document.getElementById('navbar-cta');

    menuButton.addEventListener('click', function () {
       
        menu.classList.toggle('hidden');
       
        const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !expanded);
    });
});
