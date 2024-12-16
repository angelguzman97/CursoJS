/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// Declaración

let mySet = new Set()

//let mySet = {} -- Esto está mal

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete
console.log("Add del set");


mySet.add("https://moure.dev")

console.log(mySet)

console.log("Delete del set");

mySet.delete("https://moure.dev") //Hay que especificar que elemento a eliminar

console.log(mySet)

console.log(mySet.delete("Brais")) //También retorna un true 
console.log(mySet.delete(4))

console.log(mySet)

// // has
console.log("has");

console.log(mySet.has("Moure")) //Comprueba si existe el elemento retornando un boolean
console.log(mySet.has("Brais"))

// // size
console.log("size");

console.log(mySet.size)

// // Convertir un set a array
console.log("Convertir un set a array");
let myArray = Array.from(mySet)
console.log(myArray)

// // Convertir un array a set
console.log("Convertir un array a set");


mySet = new Set(myArray)
console.log(mySet)

// // No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)