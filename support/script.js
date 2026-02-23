document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navOverlay = document.getElementById('nav-overlay');

    if (burgerBtn && navOverlay) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            // Optional: Prevent scrolling when menu is open
            if(navOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});
