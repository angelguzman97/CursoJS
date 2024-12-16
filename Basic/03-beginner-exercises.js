/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Hola

// 2. Escribe un comentario en varias líneas
/* Este
es un
comentario
multilinea
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "cadena de texto";
let myNumber = 27;
let myBoolean = true;
let myUndifined;
let myNull = null;
let mySymbol = Symbol("MySymbol");
let myBigInt = BigInt(1235678910);

// 4. Imprime por consola el valor de todas las variables
console.log("Valores de las variables");

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndifined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log("");
console.log("Tipos de variables");

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndifined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Cadena de texto 2";
myNumber = 72;
myBoolean = false;
myUndifined = 5;
myNull = "";
mySymbol = Symbol("mySymbol2");
myBigInt = BigInt(10987654321);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 5;
myNumber = "27";
myBoolean = "true";
myUndifined = "Cadena";
myNull = "";
mySymbol = Symbol(6);
myBigInt = BigInt("12345");

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myString2 = "cadena de texto";
const myNumber2 = 27;
const myBoolean2 = true;
//const myUndifined2;
const myNull2 = null;
const mySymbol2 = Symbol("MySymbol");
const myBigInt2 = BigInt(1235678910);

// 9. A continuación, modifica los valores de las constantes
// myString2 = "Hola";
// myNumber2 = 27;
// myBoolean2 = false;
// myUndifined2 = "Cadena";
// myNull2 = "Cambio";
// mySymbol2 = Symbol(6);
// myBigInt2 = BigInt("12345");

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
