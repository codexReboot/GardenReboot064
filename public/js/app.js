import { updateCopyrightYear } from './modules/getCopyrightYear.js';

// Select the hamburger button and the nav list
const hamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');

// Toggle the "show" class to display the nav items on mobile
hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburger.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero__slide");
    const indexItems = document.querySelectorAll(".hero__index");
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove("active");
        indexItems[currentSlide].classList.remove("active");
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add("active");
        indexItems[currentSlide].classList.add("active");
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);
});


// Call the function to set the copyright year
updateCopyrightYear();