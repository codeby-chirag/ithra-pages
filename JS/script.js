const hamburger = document.querySelector('.ih-hamburger');
        const navMenu = document.querySelector('.ih-nav-menu');

        // When the hamburger is clicked, toggle the 'active' class on the menu
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });