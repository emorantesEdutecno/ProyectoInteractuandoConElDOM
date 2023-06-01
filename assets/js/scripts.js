$(document).ready( ()=>{

    $('#btn2').click(()=>{
        console.log(`HTML: ${$('#test').html()}`);
    });

    $('#btn1').click(()=>{
        console.log(`Text: ${$('#test').text()}`);
    });

    $('#btn3').click(()=>{
        console.log(`Value: Nombre: ${$('#valorNom').val()} - Apellido: ${$('#valorAp').val()}`);
    });



    $('#btn5').click(()=>{
        $('#test').html('<h1>Luego podemos hacerlo más grande </h1>');
    });

    $('#btn4').click(()=>{
        $('#test').text('Remplazamos el texto');
    });

    $('#btn6').click(()=>{
        $('#valorNom').val('Tanjiro');
        $('#valorAp').val('Kamado');
    });

    $('#btn7').click(()=>{
        $('#valorNom').attr('value', 'Seiya');
        $('#valorAp').attr('value', 'Pegaso');
        $('#test').attr('class','colorFondo');
    });

    $('#btnObtenerColores').click(()=>{
        console.log(`Color del parrafo 1: ${$('#parrafo1').css('background-color')}`);
        console.log(`Color del parrafo 2: ${$('#parrafo2').css('background-color')}`);
        console.log(`Color del parrafo 3: ${$('#parrafo3').css('background-color')}`);
    });

    $('#btnCambiarColores').click(()=>{
        $('#parrafo1').css(
            {
                            'background-color':'orchid',
                            'font-size':'25px',
                            'color':'firebrick'
            });
        $('#parrafo2').css('background-color', 'palevioletred');
        $('#parrafo3').css('background-color', 'papayawhip');
    });

    
    $('#btnCambiarTodosColores').click(()=>{
        $('p').css('background-color', 'olive');

    });

    // SI UTILIZA FUNCIONES FLECHA , NO PUEDE UTILIZAR THIS PARA HACER REFERENCIA A EL ELEMENTO HTML DEL SELECTOR
    $('h4').mouseenter(()=>{
        $('h4').css( {
            'background-color':'yellow',
            'color': 'blue'
        });
    });

    // SI UTILIZA FUNCIONES CLASICAS, PUEDE USAR THIS PARA HACER REFERENCIA AL ELEMENTO HTML DEL SELECTOR
    $("h4").mouseleave(function(){
        $(this).css({
            'background-color': 'white',
            'color': 'black'
        });
    });


});