/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4]

let [myArray1, myArray2] = myArray
console.log(myArray1, myArray2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
[myArray1, myArray2, myArray3, myArray4, myArray5 = 0] = myArray

console.log(myArray1, myArray2, myArray3, myArray4, myArray5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    nombre: "Angel",
    edad: 27,
    trabajo: "Desarrollador FullStack Jr",
    dormir: () =>{
        return "Duerme"
    }
}
let {nombre, edad} = persona
console.log(nombre, edad);


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre: nombre1, edad: edad1} = persona
console.log(nombre1, edad1);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let perro = {
    nombre: "Choguín",
    edad: 11,
    ladra: function (){
        return "El perro ladra"
    },
    dormir: () =>{
        return "Duerme"
    },
    cuy: {
        nombre: "Jerico",
        edad: 3,
        arrullo: () =>{
            return "El cuy chilla"
        },
        dormir: ()=>{
            return "Duerme"
        }
    }    
}

let {nombre: nombre2, edad: edad2, cuy: {nombre: nombre3, edad: edad3} } = perro
console.log(nombre2,edad2,nombre3, edad3);


// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray6 = [5,6,7,8]
let myArray7 = [...myArray, ...myArray6]
console.log(myArray7);

// 7. Usa propagación para crear una copia de un array
let myArray8 = myArray7
console.log(myArray8);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let persona2 = {...persona, ...perro}
console.log(persona2);

// 9. Usa propagación para crear una copia de un objeto
let persona3 = persona
console.log(persona3);

// 10. Combina desestructuración y propagación
let [combiArray, myArray9] = [[...myArray8], myArray2]
console.log("combiArray: "+combiArray, "myArray9: "+myArray9);
let [myArray10, myArray11, ...myArray12] = combiArray
console.log(myArray10);
console.log(myArray11);
console.log(myArray12);


 let {nombre:nombre4, edad: edad4, ...restoObject} = persona

console.log(nombre4);
console.log(edad4);
console.log(restoObject);


