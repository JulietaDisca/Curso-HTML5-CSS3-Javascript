$(document).ready(function (){
    //El trabajo sería aquí adentro
    //Seleccionar por etiqueta
    $("p").css("color", "blue");
    $("p").css("font-size", "24px");

    //Seleccionar por clase
    $(".mi-clase").html("Texto cambiado!");

    //Seleccionar por ID
    $("mi-id").css("font-weight", "bold");

    //Selector de Descendencia
    $("ul li").css("list-style", "none");

    //Selector de descendencia (específico)
    $("#container span").css("border", "1px solid red");

    //Selector de primer elemento
    $("ul li:first").css("background", "#eee");

    //Selector de ultimo elemento
    $("ul li:last").css("background", "#ccc");

    //Selector de elemento Par/Impar
    $("tr:even").css("background", "#f0f0f0"); //Par
    $("tr:odd").css("background", "#blue"); //Impar
});