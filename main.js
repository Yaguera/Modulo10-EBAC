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
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Insira um nome válido.',
            telefone:'Este campo é obrigatório',
            email:'Este campo é obrigatório'
        },
        submitHandler: function(form){
            submit(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $(".lista-veiculos button").click(function(){
        const destino = $('#contatos');
        const nome_veiculo = $(this).parent().find('h3').text();
        const descricao = $(this).parent().find('p').text();

        $('#veiculo-interesse').val(nome_veiculo)
        $('#mensagem').val(descricao)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 800)
    })
    

})