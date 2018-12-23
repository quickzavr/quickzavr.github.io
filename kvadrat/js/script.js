var searchBar = document.querySelector('.search-bar');
var searchOpen = document.querySelector('.search-open');
var searchClose = document.querySelector('.search-close');

var mainNav = document.querySelector('.main-nav');
var navToggler = document.querySelector('.nav-toggler')

var notifyToggler = document.querySelector('.notify a');
var notifyStatus = document.querySelector('.notify-status');

searchBar.classList.remove('search-bar--nojs');
mainNav.classList.remove('main-nav--nojs');

searchOpen.addEventListener('click', function() {
    if (searchBar.classList.contains('search-bar--closed')) {
        searchBar.classList.remove('search-bar--closed');
        searchBar.classList.add('search-bar--opened');
    } else {
        searchBar.classList.add('search-bar--closed');
        searchBar.classList.remove('search-bar--opened');
    }
});

searchClose.addEventListener('click', function() {
    searchBar.classList.add('search-bar--closed');
    searchBar.classList.remove('search-bar--opened');
});

navToggler.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
        navToggler.classList.add('nav-toggler--opened');
        searchOpen.classList.add('search-open--closed')
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        navToggler.classList.remove('nav-toggler--opened');
        searchOpen.classList.remove('search-open--closed');
    }
});

notifyToggler.addEventListener('click', function() {
    if (notifyStatus.innerHTML == 'Включить уведомления') {
        notifyStatus.innerHTML = 'Отключить уведомления';
    } else {
        notifyStatus.innerHTML = 'Включить уведомления';
    }
});

$("#vote").click(function(){
    if ($('body').width() < 768) {
        $(".election").css('display', 'block');
        $(".grid-item-vote").css('height', '505px');
    } else {
        $(".election").animate({right: '0'}, 500);
        $(".page-main").addClass('anim');
        $(".page-main").css('margin', '0 18px');
    }
});

$(".election").click(function() {
    if ($('body').width() < 768) {
        $(".election").css('display', 'none');
        $(".grid-item-vote").css('height', '300px');
    } else {
        $(".election").animate({right: '-100%'}, 500);
        $(".page-main").removeClass('anim');
        $(".page-main").css('margin', '0 auto');
    }
});