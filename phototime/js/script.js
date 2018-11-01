$(document).ready(function(){
    
    var currentNum = $('.design .img-num');
    
    $('.design .next').click(function(){
        var currentImage = $('.phone-img.curry');
        var currentImageIndex = $('.phone-img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.phone-img').eq(nextImageIndex);
                
        currentImage.removeClass('curry');
        currentNum.text('0' + (nextImageIndex + 1));
        
        if(nextImageIndex == ($('.phone-img:last').index()+1)){
            $('.phone-img').eq(0).addClass('curry');
            currentNum.text('01');
        } else {
            nextImage.addClass('curry');
        }
    });
    
    $('.design .prev').click(function(){
        var currentImage = $('.phone-img.curry');
        var currentImageIndex = $('.phone-img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.phone-img').eq(prevImageIndex);
    
        currentImage.removeClass('curry');
        prevImage.addClass('curry');
        currentNum.text('0' + currentImageIndex);
        if (currentImageIndex == 0) {
            currentNum.text('05');
        }
    });
    
    var numSlideFirst = 1;
    var numSlideSecond = 2;
    var currentImageFirst = $('div.slide.curryFirst img');
    var currentImageSecond = $('div.slide.currySecond img');
    
    function moveNext() {
                
        numSlideFirst+=1;
        numSlideSecond+=1;
        
        if (numSlideFirst >= 5) numSlideFirst = 1;
        if (numSlideSecond >= 5) numSlideSecond = 1;
        
        currentImageFirst.attr('src', 'images/slides/'+numSlideFirst+'.jpg');
        currentImageSecond.attr('src', 'images/slides/'+numSlideSecond+'.jpg');
    };
    
    
    function movePrev() {
                
        numSlideFirst-=1;
        numSlideSecond-=1;
        
        if (numSlideFirst <= 0) numSlideFirst = 4;
        if (numSlideSecond <= 0) numSlideSecond = 4;
        
        currentImageFirst.attr('src', 'images/slides/'+numSlideFirst+'.jpg');
        currentImageSecond.attr('src', 'images/slides/'+numSlideSecond+'.jpg');
    };
    
    
    $('.community .next').click(function(){
        moveNext();
    });

    $('.community .prev').click(function(){
        movePrev();
    });
    
});