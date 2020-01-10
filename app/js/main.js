$(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.menu').toggleClass('mobile');
    });

    new WOW().init();
});