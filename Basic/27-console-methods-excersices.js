/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function suma(a,b) {
    if (typeof a !== "number" || typeof b !=="number") {
        console.error("No es un número",a +" o "+b)
    }else{

        console.log(a+b);
    }
    
}
suma("3", 4)
// 2. Crea una función que utilice warn correctamente
function resta(a, b) {
    console.warn(`Advertencia!!
        Solo se restan valores positivos y mayores de 0. De lo contrario no se hará la operación`);
        if (a <= 0 || b<= 0) {
            console.error("Número 0 o negativo")
        }else{
            console.log(a-b);
            
        }    
}
resta(0,0)
// 3. Crea una función que utilice info correctamente
function mostrarInfoUsuario(usuario) {
    if (!usuario || typeof usuario !== 'object') {
        console.info("No se proporcionó un usuario válido.");
        return;
    }

    const { nombre, edad, profesion } = usuario;

    console.info("Mostrando información del usuario:");
    console.info(`Nombre: ${nombre || "Desconocido"}`);
    console.info(`Edad: ${edad || "No especificada"}`);
    console.info(`Profesión: ${profesion || "No especificada"}`);
}

// Ejemplo de uso
const usuario = {
    nombre: "Ana",
    edad: 28,
    profesion: "Desarrolladora"
};

mostrarInfoUsuario(usuario);

mostrarInfoUsuario(null); // Caso donde el usuario no es válido

// 4. Utiliza table
let animal = ["Tobby",11]
animal = [
    {nombre: "Tobby", age:11}
]
console.table(animal)

// 5. Utiliza group
console.group("Usuario")
console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.profesion);
console.groupEnd();
console.group("Users")

// 6. Utiliza time
let count = 0
// console.time("Tiempo de while")
while(count <= 50000){
count++
}
// console.timeEnd("Tiempo de while")

// 7. Valida con assert si un número es positivo
let num = -2;
console.assert(num > 0, "El numero es negativo");

// 8. Utiliza count
console.count('click')
console.count('click')
console.count('click')
console.countReset('click')
console.count('click')

// 9. Utiliza trace
function functionA() {
    functionB()
}
function functionB() {
    console.trace("Salí desde la función B")
}

functionA()

// 10. Utiliza clear
// console.clear()