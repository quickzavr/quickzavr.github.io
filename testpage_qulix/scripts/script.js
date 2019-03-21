var mainNav = document.querySelector('.main-nav');
var navToggler = document.querySelector('.main-nav__toggle');

var inpSearch = document.querySelector('.search-input');
var btnSearch = document.querySelector('.search-icon');

mainNav.classList.remove('main-nav--nojs');

navToggler.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
});

btnSearch.addEventListener('click', function() {
    if (inpSearch.classList.contains('search-input--closed')) {
        inpSearch.classList.remove('search-input--closed');
        inpSearch.classList.add('search-input--opened');
        btnSearch.classList.remove('search-icon--closed');
        btnSearch.classList.add('search-icon--opened');
    } else {
        inpSearch.classList.add('search-input--closed');
        inpSearch.classList.remove('search-input--opened');
        btnSearch.classList.add('search-icon--closed');
        btnSearch.classList.remove('search-icon--opened');
    }
});