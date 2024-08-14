
/*querySelector: Selecciona el primer párrafo dentro de 
un contenedor con id "miContenedor" */

const primerParrafo = document.querySelector("#miContenedor p");
//Imprimirá: "Este es el primer párrafo"
console.log(primerParrafo.textContent)

/*querySelectorAll: Selecciona todos los elementos con la 
clase "miClase" dentro de un contenedor con id "otroContenedor" */
const elementosConClase = document.querySelectorAll("#otroContenedor .miClase");

elementosConClase.forEach(elemento => {
    console.log(elemento.textContent);
});