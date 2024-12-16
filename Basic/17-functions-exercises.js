/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
// function suma(a, b) {
//     return a+b    
// }
// console.log(suma(5,6));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// let myArrayNum = new Array(1, 3, 6, 2, 5, 10)
// function mayorFunction(array) {
//     let mayor = 0
//     for (const arrayNum of array) {
//         if (mayor < arrayNum) {
//             mayor = arrayNum
//         }
//     }
//     return mayor
// }
// console.log(mayorFunction(myArrayNum));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// const funcString = (palabra) => {
//     let i = 0
//     let cantVocal = 0
//     palabra = palabra.toLowerCase()
//     do {
//         if (palabra.charAt(i) == "a"
//             || palabra.charAt(i) == "e"
//             || palabra.charAt(i) == "i"
//             || palabra.charAt(i) == "o"
//             || palabra.charAt(i) == "u") {
//             cantVocal++

//         }
//         i++
//     } while (palabra.length > i);
//     console.log(cantVocal)
// }

// funcString("Murcielago")


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// function upperString(params) {
//     let arrayMayus =new Array()
//     let i = 0
//     params.forEach(element => {
//         arrayMayus[i] = element.toUpperCase()
//         i++
//     });
//     return arrayMayus

// }
// let arrayMinus = new Array("uno", "dos", "tres")
// console.log(upperString(arrayMinus));


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
// let numPrimo = (num) => {
//     if (num % 3 == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(numPrimo(33));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// let arrayString = new Array("a", "e", "i", "o", "u")
// let arrayNumeros = new Array(1, 2, 3, 4, 5)

// function exter(paramsa, paramsb) {
//     let arrayCombinado = new Array()
//     let i = 0

//     for (; i < paramsa.length; i++) {

//         arrayCombinado[i] = paramsa[i]

//     }

//     function inter(paramsb) {

//         for (let j = 0; j < paramsb.length; j++) {

//             arrayCombinado[i] = paramsb[j]
//             i++

//         }
//         return arrayCombinado

//     }
// return inter(paramsb)

// }

// console.log(exter(arrayNumeros, arrayString));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// let arrayNumeros = new Array(1,2,3,4,5,6,7,8,9,10)
// let sumaPar = (arrayN) => {
//     let i = 0
// let sumaPares = 0
// while (arrayN.length > i) {

//     if(arrayN[i] % 2 == 0){
//         sumaPares += arrayN[i]
//     }
//     i++
// }
// console.log( sumaPares);


// }

// sumaPar(arrayNumeros)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
// let arrayNumb = new Array(1,2,3,4,5)
// function funcCuadrado(param){
//     let i = 0
//     let cuadrado = new Array()
//     while (paramq.length > i) {

//         cuadrado[i] = param[i] ** 2

//         i++
//     }
//     return cuadrado
// }

// console.log(cuadrado);


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
// let palabra = "Angel"

// function invertirPalabra(param) {
//     let palabraInvertida = ""
//     for (let i = param.length -1; i >= 0; i--) {
//         palabraInvertida += param.charAt(i);
//     }
//     console.log(palabraInvertida);  
// }

// invertirPalabra(palabra)

// 10. Crea una función que calcule el factorial de un número dado
let n = 5

function factorial(params) {
    let factorial = params
    for (let i = 1; i < params; i++) {
        if (i == params-1) {

            console.log(factorial);
            break
        }
        factorial *= (params - i)

        // console.log(factorial);
    }
}

factorial(10)