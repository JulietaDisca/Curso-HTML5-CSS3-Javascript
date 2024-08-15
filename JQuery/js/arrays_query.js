$(document).ready(function(){
    var miArray = ['José', 'Gloria', 'Juan', 'Raquel'];

    //each: para crear un ciclo y poder iterar sobre el array
    $.each(miArray, function(i, val){
        //append: (añade contenido )para añadir los valores 
        $("#usuarios").append(`<li> ${val} </li>`)
    });


    //toArray (para que se convierta en un array)
    var nuevoArray = $("ul#miLista li").toArray();

    $.each(nuevoArray, function(i, val){
        console.log(val.innerHTML);
    })
});