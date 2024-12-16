// // Las 3 formas de ejecutar un "Hola, mundo"
// console.log("¡Hola, JavaScript!");
// console.log('¡Hola, JavaScript!');
// console.log(`¡Hola, JavaScript!`);

// //Impresiones por consolas
// console.log("5");
// console.log(5);
// console.log(5+2);
// console.log(5-2);
// console.log(5/2);
// console.log(5%2);
// console.log(5**2);



var preguntas = new Array ("¿Cuál es tu nombre?",
    "¿Cuántos años tienes?",
    "¿Lenguajes de programación favoritos?"
)
console.log(preguntas);


let respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
    
}
process.stdin.on('data', function (data) {
respuestas.push(data.toString().trim())
if (respuestas.length < preguntas.length) {
    pregunta(respuestas.length)
} else {
    process.exit()
}    
})

pregunta(0)


