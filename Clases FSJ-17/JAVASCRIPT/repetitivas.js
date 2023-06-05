/**
 * ciclo repititivo: inicio (contador), condicionante (limite del ciclo) incremento/decremento
 */

//utilizando for

//empezar del 1 hasta el 20
// for(let i=1; i<=20; i++){
//     //1  = 1 + 1 = 2
//     //2 = 2 + 1 = 3
//     // i++ equivale i = i + 1

//     //el + hace referencia a que estamos concatenando
//     // 5 + 2 = 52
//     document.write("Secuencia de numeros:" + i + "<br>")
// }
//trabajando con cadenas
let mensaje = "Hola mundo!";
console.log(mensaje.length);//11

//console.log(arreglo.length);//4
for(let j=0; j < mensaje.length; j++){
    document.write(mensaje[j] + "<br>");
    //mensaje[0] = H
    //mensaje[1] = o
    /**
     * mensaje[10] => !
     */
}

let arreglo = ["celular","audifonos","camara","mouse"];
for(let k=arreglo.length -1; k >= 0; k--){
    //k-- equivalente k = k - 1
    document.write(arreglo[k] + " * ");
}

// ciclo while

let l = 50; //contador
while(l>=30){
    //l--; //l = l - 1 //50 - 1 = 49
    document.write("Numeros decrementados:" + l + "<br>");
    l--;
}

let arreglo_num = [8,52,10,25];

let m = 0;
let suma = 0;

while(m < arreglo_num.length){
    suma += arreglo_num[m];
    m++;
}

document.write("La suma del arreglo es: " + suma);