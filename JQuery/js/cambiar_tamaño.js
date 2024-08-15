$(document).ready(function(){
    $(':button').click(function(){
        
        var tamaños = $(this).val();

        var valorActual = parseInt($('p').css('font-size'));

        if(tamaños == 'Pequeñia'){
            valorActual = valorActual - 5; 
        } else if(tamaños == 'Grande'){
            valorActual = valorActual + 5;
        }

        $('p').css('font-size', valorActual + 'px');
    });
});