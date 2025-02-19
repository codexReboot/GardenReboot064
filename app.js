console.log("Hello World!");

// Select the hamburger button and the nav list
const hamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');

// Toggle the "show" class to display the nav items on mobile
hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburger.classList.toggle('open');
});