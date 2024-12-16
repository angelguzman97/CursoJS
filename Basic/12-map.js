/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración
console.log("Map")

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set Modifica o agrega - Solo valor, no llave
console.log("set")

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get Trae el elemento 
console.log("GET")

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has Verifica si existe tal llave
console.log("has")

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete Elimina la llave
console.log("delete")

myMap.delete("email")

console.log(myMap)

// keys, values y entries
console.log("Keys, Values y Entries")

console.log(myMap.keys()) //Muestra las llaves
console.log(myMap.values()) //Muestra los valores
console.log(myMap.entries()) //Muestra las llaves y su valor con corchetes

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)


