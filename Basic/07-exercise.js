/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let myName = "Angel";
let saludo = "Hola, soy " + myName + ""


// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length);

// 3. Muestra el primer y último carácter de un string
console.log("Primer caracter: " + saludo[0]);
console.log("Segundo caracter: "+saludo[14]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `Hola,
esta es 
una 
cadena de
varias 
lineas`;
console.log(cadenaVariasLineas);


// 6. Interpola el valor de una variable en un string
let alias = `Hola, soy ${myName} y mi apodo es "Chikilin"`;

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replaceAll(" ","-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.indexOf("Angel"));
console.log(alias.includes("Chikilin"));

// 9. Comprueba si dos strings son iguales
let saludo1 = "Hola";
let saludo2 = "Hola ";
console.log(saludo1 == saludo2.replace(" ",""));

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo1.length == saludo2.length);
