 document.addEventListener("DOMContentLoaded", () => {
            const hamburger = document.querySelector('.ih-hamburger-menu');
            const navMenu = document.getElementById('navMenu');

            if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }
        });