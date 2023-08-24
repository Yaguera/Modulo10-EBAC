$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    let numero = $('#telefone').val();
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Insira um nome válido.',
            telefone:'Este campo é obrigatório',
            email:'Este campo é obrigatório'
        },
    })
    
})