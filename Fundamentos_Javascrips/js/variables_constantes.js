//Declaración de una variable
var edad;

//Asignación del valor
edad = 28;

//Los 2 juntos
var edad = 28;
var nombre = "Juan";
var saldo = 100.58;


/*Reasignaxión de valores a variables */
nombre = "Martha";
edad = 35;


/* Pero var tiene un ambito e función y puede llevar a comportamientos inesperados */
/*Por eso es mejor utilizar let */
function ejemploVar(){
    var x = 10;
    if(true){
        var x = "Dentro de true: " + 20;
        console.log(x)
    } 
    console.log("Fuera del true: " + x);
}
ejemploVar();

/*Misma función con let*/
function ejemploLet(){
    let y = 10;
    if(true){
        let y = "Dentro de true: " + 20;
        console.log(y)
    } 
    console.log("Fuera del true: " + y);
}
ejemploLet();

/*Recomendado usar LET en vez de var */

/*console.log(saldo);*/



/*  Constantes  */
const pi = 3.1416;
const nombrePersona = "Ana";

//No se pueden reasignar valores a constantes
/*pi = 56.239; Es un error*/

console.log(pi);


/*En bloque  al igual que let, var es la excepcion, 
ya que el "if" no toma el dato de arriba, 
sino el dato que esta en su bloque*/
function ejemploConst(){
    const z = 50;
    if(true){
        const z = 60;
        console.log(z)
    }
    console.log(z)
}

ejemploConst();