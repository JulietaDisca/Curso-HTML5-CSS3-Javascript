$(document).ready(function(){
    //////Eventos de Mouse
    //Evento click
    /*$("#btn1").click(function(){
        alert("Botón clickeado!");
    });

    $("#btn2").on("click", function (){
        alert("Boton clickeado!");
    });
    */

    /*$("#btn1").click(function(){
        $(".para1").hide();
    });

    $("#btn2").click(function(){
        $(".para1").show();
    })
    */

    /*$("#btn1").click(function(){
        $(".para1").toggle();
    });*/

    /*$('#btn1').on('mouseenter', function(){
        $(".para1").toggle();
    });

    $("#btn1").on("mouseleave", function(){
        $("para1").toggle();
    })*/

    /*$("#btn1").hover(function(){
        $(".para1").toggle();
    });*/

    /*$("#btn1").dblclick(function(){
        $(".para1").toggle();
    });*/

    /*$("#btn1").mousemove(function(){
        $(".para1").toggle();
    });*/

    /*$("#btn1").mousemove(function(){
        $(".para1").toggle();
    });*/

    /*$("#btn1").mousedown(function(){
        $(".para1").toggle();
    });

    $("#btn1").mouseup(function(){
        $(".para1").toggle();
    });*/

    $("#btn1").click(function(event){
        console.log(event.currentTarget.id);
        console.log(event.currentTarget.innerHTML);
        console.log(event.currentTarget.outerHTML);
        console.log(event.currentTarget.outerHTML);
    });
})






