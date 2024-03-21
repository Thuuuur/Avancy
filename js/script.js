document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarContainer = document.querySelector('.navbar-container');

    mobileMenu.addEventListener('click', () => {
        navbarContainer.classList.toggle('active');
    });
});
