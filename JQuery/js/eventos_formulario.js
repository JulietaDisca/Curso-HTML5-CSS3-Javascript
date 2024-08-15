$(document).ready(function(){
    //focus para cuando esta el cursor adentro
    $("input").focus(function(){
        //alert("focus");
        //$(this).css("background", "red");
        //$(this).css("color", "white");
    });

    //Blur para cuando esta el cursor fuera
    $("input").blur(function(){
        //$(this).css("background", "white");
    });

    //En consola podemos ver como cuenta cada presion de teclas del teclado
    $("input").keyup(function(e){
        //alert("focus");
        //console.log("keyup");
        //console.log(e.target.value); //Muestra en consola cada paso de lo que escribo
    });

    //Muestra en consola cada vez que realizo un cambio en el género
    //El segundo console identifica que selecioné
    $("select#genero").change(function(e){
        //console.log("Cambiado");
        //console.log(e.target.value)
    });

    //Realiza algo parecido en consola que el contador del tecleado, pero con las veces enviadas
    $("#formulario").submit(function(e){
        e.preventDefault();

        //Obtener los valores
        var nombre = $("input#nombre").val();
        var email = $("input#email").val();
        var genero = $("select#genero").val();

        console.log(nombre);
        console.log(email);
        console.log(genero);


        //console.log("Enviado");
    });
});