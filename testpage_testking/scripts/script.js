var userNav = document.querySelector('.user-nav');
var mainNav = document.querySelector('.main-nav');
var userNavToggler = document.querySelector('.user-nav__toggle');
var mainNavToggler = document.querySelector('.main-nav__toggle');

var aboutText = document.querySelector('.about__text');

userNav.classList.remove('user-nav--nojs');
mainNav.classList.remove('main-nav--nojs');


userNavToggler.addEventListener('click', function() {
    if (userNav.classList.contains('user-nav--closed')) {
        userNav.classList.remove('user-nav--closed');
        userNav.classList.add('user-nav--opened');
    } else {
        userNav.classList.add('user-nav--closed');
        userNav.classList.remove('user-nav--opened');
    }
});

mainNavToggler.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
});

var cont = document.querySelector('.spoiler_body');

function showMore() {
    aboutText.style.maxHeight = "500px";
    aboutText.classList.add('no-after');
}