$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})