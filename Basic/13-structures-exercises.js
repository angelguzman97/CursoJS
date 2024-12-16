/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
// let myArrayAnimal = new Array()
// myArrayAnimal = ["Perro", "Tortuga","Cuyo","Hamster","Gato"]

// // 2. Añade dos más. Uno al principio y otro al final
// myArrayAnimal.unshift("Capibara")
// myArrayAnimal.push("Leopardo")
// console.log(myArrayAnimal);

// // 3. Elimina el que se encuentra en tercera posición

// console.log(myArrayAnimal.slice(2,3));

// 4. Crea un set que almacene cinco libros
// let mySetLibros = new Set(["Baldor","Algebra Lineal", "Java","Peeter Pan","Vida animal"])
// console.log(mySetLibros);


// // 5. Añade dos más. Uno de ellos repetido
// mySetLibros.add("Vida submarina")
// mySetLibros.add("Java")
// mySetLibros.add("Teoría Musical")
// console.log(mySetLibros);

// // 6. Elimina uno concreto a tu elección
// mySetLibros.delete("Vida submarina")
// console.log(mySetLibros);


// 7. Crea un mapa que asocie el número del mes a su nombre
let myMapMes = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (myMapMes.has(5)) {
    console.log(myMapMes.get(5));
    
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = new Array("Junio","Julio","Agosto")
myMapMes.set("Verano",verano)
console.log(myMapMes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let primavera = new Array("Marzo","Abril","Mayo")
let mySetPrimavera = new Set(primavera)
myMapMes.set("Primavera", mySetPrimavera)
console.log(myMapMes.entries());
