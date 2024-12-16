/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myAge = 27;

if (myAge == 27)
  console.log(`Soy Angel y tengo ${myAge}`)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Angel";
let pass = 12345;

if (user != "Angel" && pass != 12345) {
  console.log("Datos incorrectos");

} else if (user != "Angel") {
  console.log("Usuario incorrecto");
} else if (pass != 12345) {
  console.log("Contraseña incorrecta");
} else {
  console.log("Bienvenido!!");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 1;

if (numero < 0) {
  console.log("Número negativo");

} else if (numero > 0) {
  console.log("Número positivo");

} else {
  console.log("Número es 0");

}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadVoto = 19;

if (edadVoto >= 18) {
  console.log("Puedes votar");

} else {
  console.log("No puedes votar. Te faltan " + (18 - edadVoto) + " años para votar");

}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = edadVoto >= 18 ? "adulto" : "menor";
console.log(edad);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 5;

if (mes >= 3 && mes <= 5) {
  console.log("Primavera");

} else if (mes >= 6 && mes <= 8) {
  console.log("Verano");

} else if (mes >= 9 && mes <= 11) {
  console.log("Otoño");

} else {
  console.log("Invierno");

}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
  console.log("Tiene 31 días");

} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  console.log("Tiene 30 días");
} else {
  console.log("Tiene 28 días");

}

//Switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let pais = "China";

switch (pais) {
  case "China":
    console.log("你好！我來自中國");

    break;
  case "EEUU":
    console.log("Hi! I'm from the USA");
    break;

  case "Japon":
    console.log("こんにちは！私は日本出身です");
    break;

  case "Mexico":
    console.log("Hola! Soy de Mexico");

    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Es invierno");
    break;
    

  case 3:
  case 4:
  case 5:
    console.log("Es primavera");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Es verano");
    break;

  case 2:
  console.log("Es otoño");
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tiene 31 días");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tiene 30 días");
    break;


  case 2:
    console.log("Tiene 28 días");

    break;
}