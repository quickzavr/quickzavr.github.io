$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["",""],
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1440:{
                items:5
            }
        }
    });
    
});