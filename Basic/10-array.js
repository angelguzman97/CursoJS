/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop
//Push añade elemento al final
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37) 

console.log(myArray)


console.log("pop()");
console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log("shift()");
console.log(myArray.shift()) //Elimina el primer elemento y lo devuelve
console.log(myArray)


console.log("unshift()");
myArray.unshift("Brais", "mouredev") //Sirve para agregar mas elementos al principio del arrays
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]


console.log("Slice");


let myNewArray = myArray.slice(1, 3) //Se queda solo con una porcion del array (rango desde comienzo hasta el final -1)

console.log(myArray)
console.log(myNewArray)

// splice
console.log("splice");

myArray.splice(1, 3) //Elimina lo que se coloca en el rango (indices)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")//Elimina y añade nuevo elemento
console.log(myArray)