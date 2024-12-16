// Strings
let myName = "Angel";
let greeting = "Hola, "+ myName + "!!";
console.log(greeting);
console.log("Tipo de datos: " + typeof greeting);

// Longitud de la cadena de texto
console.log("Longitud: "+ greeting.length);

//Acceso a caracteres
console.log("Acceso al 1er caracter: "+greeting[0]);
console.log("Acceso al último caracter: " + greeting[12]);

//Métodos comunes
console.log("Convertir texto a mayúscula: " + greeting.toUpperCase());
console.log("Convertir texto a minúscula: " + greeting.toLowerCase());
console.log("Trae el índice de la palabra a encontrar: " + greeting.indexOf("Hola"));
console.log("Trae el índice de la palabra a encontrar: " + greeting.indexOf("Angel"));
console.log("Trae el índice de la palabra a encontrar: " + greeting.indexOf("Chikilin")); //En este trae -1 porque no está la palabra
console.log("Comprueba si existe: " + greeting.includes("Hola"));
console.log("Comprueba si existe: " + greeting.includes("Chikilin"));
console.log("Obtiene fragmentos de la cadena por rangos menos 1: " + greeting.slice(0, 4));
console.log("Reemplaza la palabra: " + greeting.replace("Angel", "Chikilín"));

// Template literals (Plantillas literales)
let message = `Hola, este es 
mi salto de línea`;
console.log(message);

// Interpolación
let email = "angel@gmail.com"
console.log(`Hola, ${myName}! Tu email es: ${email}`);




