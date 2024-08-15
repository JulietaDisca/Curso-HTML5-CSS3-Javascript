$(document).ready(function(){
    

    $("#btnFadeOut").click(function(){
        $("#caja").fadeOut(3000, function(){ //Sirve para desaparecer la caja indicada, se le puede dar el valor 'slow' 'fast', milisegundos etc
            $('#btnFadeOut').text('Trabajo Terminado'); //El boton cambiara de nombre (hecho con funcion de callback)
        });
    });


    //Lo contrario a fadeOut
    $("#btnFadeIn").click(function(){
        $("#caja").fadeIn(2000);
    });

    //Realiza las 2 anteriores 
    $("#btnFadeToggle").click(function(){
        $("#caja").fadeToggle(3000);
    });


    //Muestra algo no visible bajando como un telón
    $("#btnSlideDown").click(function(){
        $("#caja").slideDown(3000);
    });

    //Mismo efecto pero inverso
    $("#btnSlideUp").click(function(){
        $("#caja").slideUp(3000);
    });

    $("#btnSlideToggle").click(function(){
        $("#caja").slideToggle(3000);
    });


    //  Detiene las animaciones anteriores, se puede cambiar la animación desde el lugar que se realizo el stop
    $("#btnStop").click(function(){
        $("#caja").stop();
    });

    //Mover
    $("#moverDerecha").click(function(){
        $("#caja2").animate({
            left: 500,
            heigth: "300px",
            width: "300px",
            opacity: "0.5",        
        });
    });

    $("#moverIzquierda").click(function(){
        $("#caja2").animate({
            left: 0,
            heigth: "100px",
            width: "100px",
            opacity: "1",        
        });
    });

    $("#moverAlrededor").click(function(){
        var caja2 = $("#caja2");
        caja2.animate({
            left: 300,
        });

        caja2.animate({
            top: 300,
        });

        caja2.animate({
            left: 0,
            top: 300,
        });

        caja2.animate({
            left: 0,
            top: 0,
        });
    });
});