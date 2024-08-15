/*AJAX (Asynchronous Javascript and XML) es una tecnología 
que permite realizar solicitudes asíncronas a un servidor 
web desde un navegador. En el contexto de JQuery, AJAX 
facilita aún más el proceso de realizar solucitudes HTTP 
asíncronas y manipular los datos recibidos. Aunque 
originalmente AJAX se asociaba con la manipulación de datos 
en formato XML, en la practica se utilizaban varios formmatos 
de datos, como JSON.
Puedes realizar solicitudes HTTP asícronas para cargar
datos desde el servidor sin tener que recargar toda la pagina*/

$(document).ready(function(){
    /*$("#resultado").load("archivo2.html", function(textoRespuesta, textoEstado, xhr){
        if(textoEstado == "success"){
            console.log("Carga correcta");
        } else if(textoEstado == "error"){
            console.log("Error en carga de archivo");
        }
    });*/

    //Misma funcionalidad que load
    /*$.get("archivo2.html", function(e){
        $("#resultado").html(e);
    });*/

    /*$.getJSON("assets/tareas.json", function(datos){
        $.each(datos, function(i, tarea){
            $("ul#tareas").append("<li>" + tarea.title + "</li>")
        });
    });*/

    /*$.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
    }).done(function(datos){
        console.log(datos);
        $.map(datos, function(post, i){
            $('#resultado').append(
                '<p>' + post.id + '</p>' + '<h3>' + post.title + '</h3>' + '<p>' + post.body + '</p>'
            );
        });
    });*/

    $('#postForm').submit(function(e){
        e.preventDefault();

        //Obtener los datos
        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, { title: title, body: body}).done(function(datos){
            console.log('Post Guardado');
            console.log(datos);
        });
    });
});
