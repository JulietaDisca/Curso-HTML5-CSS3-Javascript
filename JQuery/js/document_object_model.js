$(document).ready(function(){

    //Agregar mas de un estilo
    //$("p.para1").css({color: "red", background: "beige"});

    //Agregar clase
    //$("p.para2").addClass("miClase");
    //Eliminar Clase
    //$("p.para2").removeClass("miClase");

    //$("btn1").click(function(){
    //    $("p.para2").toggleClass("miClase");
    //});

    //Añadimos texto
    //$("#miDiv").text("Bienvenidos");
    //Añadir Código
    //$("#miDiv").html("<h2>Curso JQuery render2web</h2>");

    //Añadir codigo al final
    //$("ul").append("<li>Item Nuevo Agregado Al Final</li>");
    //Añadir al principio
    //$("ul").prepend("<li>Item Nuevo Agregado Al Principio</li>");


    //$(".para1").appendTo(".para2");
    //$(".para1").prependTo(".para2");

    //$("ul").before("<h4>Hola</h4>");
    //$("ul").after("<h4>Mundo!</h4>");

    //Borra el ul del DOM, ya que sigue estando pero no aparece en la pantalla
    //$("ul").empty();
    //Este si lo elimia definitivamente
    //$("ul").detach();

    //Para crear un target en el enlace
    //$("a").attr("target", "_blank");
    //alert($("a").attr("href"));
    //$("a").removeAttr("target");

    //$("p").wrap("<h3>"); //Sen envolvera en un h3 cada parrafo
    $("p").wrapAll("<h3>");
})