/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;        
        this.edad = edad;
    }

    static contarHastaDiez(){
      let  contar = 0
        do {
            console.log(contar++);
            
        } while (contar <= 10);
    }
}

let persona = new Persona("Angel", 27)

// 2. Añade un método a la clase que utilice las propiedades
persona.trabajar = function trabajar(trabajo) {
    console.log(`Trabajo como ${trabajo}`);    
}
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(persona);
persona.trabajar("Desarrollador Back-end")

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
Persona.contarHastaDiez()

// 6. Crea una clase que haga uso de herencia
class Papa {
    nombre
    apellido
    cabello
    constructor(nombre, apellido, cabello) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cabello = cabello;
    }

    cantar(){
        console.log("Canta ranchero");
        
    }
}
class Hijo extends Papa{
    nombre
    constructor(nombre) {
        super(nombre)
    }

    cantar(){
        console.log("Canta balada");
        
    }

}

// 7. Crea una clase que haga uso de getters y setters
class Cliente {
    #cuenta
    #nombre

    constructor(cuenta, nombre) {
        this.#cuenta = cuenta
        this.#nombre = nombre
    }

    get nombre(){
        return this.#nombre
    }
    set nombre(nombre){
        this.#nombre = nombre
    }

    get cuenta(){
        return this.#cuenta
    }
}
let cliente = new Cliente(55143985, "Angel Guzman")
console.log(cliente.nombre);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
cliente.nombre = "Angel Guzmán"

// 9. Utiliza los get y set y muestra sus valores
console.log(cliente.nombre);

// 10. Sobrescribe un método de una clase que utilice herencia 
let hija = new Hijo()

hija.cantar() = "Canta reggae"

hija.cantar()
