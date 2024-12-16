/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 10;
let b = 5;

// Operaciones aritméticas
let suma = a + b;           // Suma
let resta = a - b;          // Resta
let multiplicacion = a * b; // Multiplicación
let division = a / b;       // División
let modulo = a % b;         // Módulo (resto de la división)

let exponente = a**2;
let incremento = b;
incremento++;
let decremento = b;
decremento--;


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let c = 4;
c +=2;
c -=2;
c *=2;
c /=2;
c %=2;
c **=2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a > c);
console.log(c < b);
console.log(a >= c);
console.log(c <= b);
console.log(a != c);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < c);
console.log(c > b);
console.log(a <= c);
console.log(c >= b);
console.log(a == c);

// 5. Utiliza el operador lógico and
console.log("operador and: " + (a > c && c < b));

console.log("operador and: " + (a < c && c > b));

// 6. Utiliza el operador lógico or

console.log("operador or: " + (a > c || c < b));

console.log("operador or: " + (a < c || c > b));

// 7. Combina ambos operadores lógicos

console.log("operador and y or: " + (a > c && c < b || a == b));

console.log("operador and y or: " + (a < c || c > b && a == b));

// 8. Añade alguna negación

console.log("operador negar true: " + !(a > c && c < b));

console.log("operador negar false: " + !(a < c || c > b));

// 9. Utiliza el operador ternario
let operatorTernario = false;
operatorTernario ? console.log("esto es true") : console.log("esto es false");
!operatorTernario ? console.log("esto es true") : console.log("esto es false");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Combinación de operadores: " + ((a+b >= c+a) && (c*a < b*a) ));
