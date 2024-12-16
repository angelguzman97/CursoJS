/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
// let suma = 0;
// let contador = 0;
// do {
//     contador++
//     // console.log("Contador: "+(contador));
//     suma += contador;
//     // console.log("Suma: "+(suma));
    
// } while (contador<=100);
// console.log(suma);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
// let pares = 50

// while (pares > 0) {
//     if (pares % 2 == 0) {
//         console.log("Par: " + (pares));        
//     }
//     pares--
// }

// // 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
// let nombres = new Array("Angel", "Bety","Lolis","Ana")

// for (const nombre of nombres) {
//     console.log("Nombre: "+nombre);
        
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// let cadenaTexto = "Abeja"
// let i = 0;
// for (const vocal of cadenaTexto) {
//     if (vocal.toLowerCase() == "a" || vocal.toLowerCase() == "e" || 
//     vocal.toLowerCase() == "i" || vocal.toLowerCase() == "o" || vocal.toLowerCase() == "u") {
//        i++
//     }    
// }
// let numVocal = 0
// for (let i = 0; i < cadenaTexto.length; i++) {
//     if (cadenaTexto.charAt(i).toLowerCase() == "a" 
//     || cadenaTexto.charAt(i).toLowerCase() == "e" 
//     || cadenaTexto.charAt(i).toLowerCase() == "i" 
//     || cadenaTexto.charAt(i).toLowerCase() == "o" 
//     || cadenaTexto.charAt(i).toLowerCase() == "u") {
//         numVocal ++
//         console.log(cadenaTexto.charAt(i));
//     }
    
// }
// console.log("Números de vocales: " + numVocal);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
// let myArrayNumero = new Array(1,2,3,4,5)
// let producto = 1
// for (const num of myArrayNumero) {
//     producto*= num
// }
// console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
// let i = 1
// const tabla = 5
// do {
//     let resultado = 5 * i
//     console.log(`${tabla} x ${i} = ${resultado}`);
//     i++

// } while (i <= 10);

// 8. Usa un bucle para invertir una cadena de texto
// let palabra = "Hola, Mundo"
// let nuevo = ""
// for (let i = palabra.length -1 ; i >= 0; i--) {
// // Se le va agregando la última letra de la cadena
// nuevo  += palabra[i]
// }
// console.log(nuevo);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = 0, fibonacci2 =0
let contador = 0
let con1 = 0
while (contador <= 10) {
        fibonacci += ++contador
        con1++
        console.log(`${fibonacci2} + ${con1} = ${fibonacci}`);
        fibonacci2 = fibonacci
        
}



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNumero = new Array(1,5,10,15,3,6,420)
let nuevoArray = new Array()
let contador1 = 0
let contador2 = 0
// do {
//         if (arrayNumero[contador1] > 10) {
//                 nuevoArray[contador2] = arrayNumero[contador1]
//                 contador2++
//         }
//         contador1++
// } while (arrayNumero.length > contador1);

// arrayNumero.forEach(element => {
//         if (element > 10) {
//                 nuevoArray[contador1] = element
//                 contador1++
//         }
        
// });

// console.log(nuevoArray);
