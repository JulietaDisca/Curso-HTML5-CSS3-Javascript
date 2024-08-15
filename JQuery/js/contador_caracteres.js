$(document).ready(function(){
    $('textarea').attr('maxlength', '50');

    var longitud_maxima = $('textarea').attr('maxlength');
    
    $('salida').text(longitud_maxima + "Caracteres contados");

    $('textarea').keyup(function(){
        var longitud = $(this).val().length;
        var caracteres_contados = longitud_maxima - longitud;

        $('#salida').text(caracteres_contados + " Caracteres contados");
    })
})