// /*
// Clase 41 - Ejercicios: Manejo de errores
// Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
// */

// // 1. Captura una excepción utilizando try-catch
// let persona
// try {
//     console.log(persona.edad);

// } catch {
//     console.log("Error en el código");

// }

// // 2. Captura una excepción utilizando try-catch y finally
// try {
//     console.log(persona.edad);

// } catch (error) {
//     console.log("Se ha producido un error", error.message);

// }finally{
//     console.log("Fin del programa");

// }

// // 3. Lanza una excepción genérica
// throw new Error("Ha ocurrido un error");

// 4. Crea una excepción personalizada
class NumbError extends Error {
    constructor(message, precio, descuento) {
        super(message)
        this.precio = precio
        this.descuento = descuento
    }
    imprimir() {
        console.log(this.precio + " o " + this.descuento);

    }
}
function descuento(precio, descuento) {
    if (typeof precio !== "number" || typeof descuento !== "number") {
        throw new TypeError("No es número")
    }
    if (!Number.isInteger(precio) || !Number.isInteger(descuento)) {
        throw new Error("No es entero")
    }
    if (precio <= 0 || descuento < 0) {
        throw new NumbError("Algún número es negativo o es cero", precio, descuento)
    }

    let total = precio * (descuento / 100)

    return total



}

// 5. Lanza una excepción personalizada
// try {
//     console.log(descuento("10", "2"))
// } catch (error) {
//     console.log("Se ha producido un error personalizado", error.message);

// }

// 6. Lanza varias excepciones según una lógica definida
// if (!(typeof precio !== "Number") || !(typeof descuento !== "Number")) {
//     throw new TypeError("No es número")
// }
// if (!Number.isInteger(precio) || !Number.isInteger(descuento)) {
//     throw new Error("No es entero")
// }
// if (precio <= 0 || descuento < 0) {
//     throw new NumbError("Algún número es negativo o es cero", precio, descuento)
// }

// 7. Captura varias excepciones en un mismo try-catch
// try {
//     console.log(descuento("10", "2"))
// } catch (error) {
// if (error instanceof Error) {
//     console.log("Se ha producido un error de tipo: "+error.message);
// }if (error instanceof TypeError) {
//     console.log("Se ha producido un error de tipo: "+error.message);
// }if (error instanceof NumbError) {
//     console.log("Se ha producido un error de tipo: "+error.message);
// }    
// }

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
// const valores = ["123", "45.67", "abc", null, undefined, "98xyz", "56.78", {}, []];

// for (let i = 0; i < valores.length; i++) {
//     const valor = valores[i];
//     try {
//         const convertido = parseFloat(valor);
//         if (isNaN(convertido)) {
//             throw new Error(`No se puede convertir el valor "${valor}" a float.`);
//         }
//         console.log(`Valor original: "${valor}", convertido a float: ${convertido}`);
//     } catch (error) {
//         console.error(`Error al convertir el valor "${valor}": ${error.message}`);
//     }
// }


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class ErrorPersonalizado extends Error{
    constructor(message, name){
        super(message)
        this.name = name
    }

    sinPropiedad(){
        console.log(this.objeto);
        
    }
}

class Persona{
    name
    edad
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

function analisisObjeto(params) {
    if ( params !== "angel") {
        throw new ErrorPersonalizado("Ese parámetro no está definido",params)      
    }
    
    
}
let per = new Persona("bety",27)

try {
    analisisObjeto(per.nombre)
} catch (error) {
    console.log(error.message);
    
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentos(params) {
  
  for (let i = 0; i <= 10; i++) {
   try {   if (params !== "angel") {
          throw new Error("Error en el dato")
        }
  } catch (error) {
    if (i == 10) { 
        console.log(`Máximo de error: ${i}`,error.message);
    }
    
}
  }
}

reintentos("bety")