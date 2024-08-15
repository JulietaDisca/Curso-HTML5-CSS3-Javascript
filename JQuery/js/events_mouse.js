$(document).ready(function(){
    //////Eventos de Mouse
    //Evento click
    /*$("#btn1").click(function(){
        alert("Botón clickeado!");
    });

    $("#btn2").on("click", function (){
        alert("Boton clickeado!");
    });*/
    


    //Escondo y muestro el texto con los botones
    /*$("#btn1").click(function(){
        $(".para1").hide();
    });

    $("#btn2").click(function(){
        $(".para1").show();
    })*/
    


    //Se ejecuta lo anterior pero desde el mismo botton, gracias a toggle()
    /*$("#btn1").click(function(){
        $(".para1").toggle();
    });*/


    //Se oculta el texto cuando paso el cursor por encima del boton, parevido a hover
    /*$('#btn1').on('mouseenter', function(){
        $(".para1").toggle();
    });*/


    //Al sacar el cursor del boton el texto vuelve a aprecer
    /*$("#btn1").on("mouseleave", function(){
        $(".para1").toggle();
    });*/


    //Cumple la misma funcion que los 2 anteriores juntos
    /*$("#btn1").hover(function(){
        $(".para1").toggle();
    });*/


    //Se oculpa al realizar un doble click
    /*$("#btn1").dblclick(function(){
        $(".para1").toggle();
    });*/


    //
    /*$("#btn1").mousemove(function(){
        $(".para1").toggle();
    });*/


    //
    /*$("#btn1").mousedown(function(){
        $(".para1").toggle();
    });*/

    /*$("#btn1").mouseup(function(){
        $(".para1").toggle();
    });*/


    //
    /*$("#btn1").click(function(event){
        //console.log(event.currentTarget.id); //Devuelve en consola al apretar Boton 1 : btn1
        //console.log(event.currentTarget.innerHTML); //Devuelve: Botón 1
        //console.log(event.currentTarget.outerHTML); //Devuelve: <button id="btn1">Botón 1</button>
        //console.log(event.currentTarget.className); //Devuelve: botonTest
        //console.log('Coordenadas: Y' + Event.clientY + 'X: ' + event.clientX); //Devuelve coodrenadas donde fue tocado exactamente el boton
    });*/

    $(document).click(function(event){
        //console.log(event.currentTarget.id); //Devuelve en consola al apretar Boton 1 : btn1
        //console.log(event.currentTarget.innerHTML); //Devuelve: Botón 1
        //console.log(event.currentTarget.outerHTML); //Devuelve: <button id="btn1">Botón 1</button>
        //console.log(event.currentTarget.className); //Devuelve: botonTest
        console.log('Coordenadas: Y: ' + event.clientY + ' X: ' + event.clientX); //Devuelve coodrenadas donde fue tocado exactamente el boton
    })
})






