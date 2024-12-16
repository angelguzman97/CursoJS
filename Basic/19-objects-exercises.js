/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Angel",
    edad: 27,
    trabajo: "Desarrollador FullStack Jr",
    dormir: () =>{
        return "Duerme"
    }
}

// // 2. Accede y muestra su valor
// console.log(persona);

// // 3. Agrega una nueva propiedad

// // persona.email = "angel@gmail.com"
// persona["email"] = "angel@gmail.com"
// console.log(persona);


// // 4. Elimina una de las 3 primeras propiedades
// delete persona.trabajo
// console.log(persona);

// // 5. Agrega una función e invócala
// persona.programar= function () {
// console.log("Programando");
// } 

// persona.programar()

// // 6. Itera las propiedades del objeto
// for (const key in persona) {
//     console.log(`${key} : ${persona[key]}`);
    
// }

// 7. Crea un objeto anidado
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

// 8. Accede y muestra el valor de las propiedades anidadas
// for (const key in perro) {
        
//     console.log(key +":"+ perro[key]);

// }
//#Accede al segundo objeto
// for (const key in perro.cuy) {
        
//         console.log(key +":"+ perro.cuy[key]);
    
// }


// 9. Comprueba si los dos objetos creados son iguales
console.log(persona === perro);


// 10. Comprueba si dos propiedades diferentes son iguales
console.log(perro.dormir() === persona.dormir());
