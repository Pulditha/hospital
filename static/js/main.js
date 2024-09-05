// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Example: Smooth Scroll for links with # in href
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Toggle Mobile Menu
    const menuToggle = document.querySelector('.navbar__toggle');
    const navLinks = document.querySelector('.navbar__links');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('navbar__links--visible');
        });
    }

    // Example: Service Item Hover Effect
    const serviceItems = document.querySelectorAll('.service');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.classList.add('service--hover');
        });
        item.addEventListener('mouseleave', function () {
            this.classList.remove('service--hover');
        });
    });
});
