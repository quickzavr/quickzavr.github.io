var mainNav = document.querySelector('.main-nav');
var navToggler = document.querySelector('.nav-collapse');

navToggler.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
        navToggler.classList.add('opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        navToggler.classList.remove('opened');
    }
});