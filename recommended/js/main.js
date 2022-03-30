$(document).ready(function(){
    $('.open-bar').on("click",function(){
        $('.mobile-nav').css('display', 'block');
    });

    $('.mobile-nav li i').on('click', function(){
        $('.mobile-nav').css('display', 'none');
    });
});