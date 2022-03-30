$(document).ready(function(){
    $('.js--feature').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInDown');
    },{
        offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInLeft');
    },{
        offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInRight');
    },{
        offset:'50%'
    });
    
    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    



    $('.open-bar').on("click",function(){
        $('.mobile-nav').css('display', 'block');
    });

    $('.mobile-nav li i').on('click', function(){
        $('.mobile-nav').css('display', 'none');
    });
});