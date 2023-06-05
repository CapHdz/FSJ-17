//comentario de ina sola linea
/**
 * Asignacion de variables
 * 
 * let y var (palabras reservadas)
 * 
 * let: las variables no se puede utilizar su nombre mas de una vez y le podemos asignar un dato o no
 * se trabaja de manera local
 * 
 * var: las variables se pueden sobredeclarar y podemos asignarle un dato o no
 * se trabaja de manera global
*/

// declarando variables
let nombre = "Alee";
let variable;

var apellido;
//estamos sobre declarando la variable
var apellido = "Hernández";

// llamando variables
nombre; //Alee

nombre = "Rebe";
nombre; // Rebe
apellido;

// definiendo una constante const
const PI = 3.1416; // valor estatico
const num= 25;

// imprimiendo en javascript por medio de la consola
console.log(PI);

// TIPOS DE DATOS
let cadena = "Hola mundo"; //string
let numero = 25; //int
let decimal = 46.4; // double
let dato = true; // booleano
let dato2 = false; //booleano

let arreglo_frutas = Array("manzana", "uva", "mango", "naranja"); //tamaño # 4 | pocisiones = 3
let arreglo_productos = ["camisa", 5, true, 25.2]
console.log(arreglo_productos);

let animal = {
    //atributo => valor
    nombre: "Zeus",
    edad: 2,
    raza: "Rottweiler",
    color: "negro"
}
console.log(animal);
//imprimiendo una posicion en especifico del arreglo
console.log(arreglo_frutas[1]);
//imprimiendo un atributo en especifico del objeto
console.log(animal.nombre);
//tipo de dato nulo
let telefono = null;
let correo; //undefined

