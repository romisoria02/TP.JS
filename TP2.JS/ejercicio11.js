// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
let primerNombre = prompt("Ingrese su primer nombre:");
let primerEdad = parseInt(prompt("Ingrese su edad:"));

let segundoNombre = prompt("Ingrese su segundo nombre:");
let segundoEdad = parseInt(prompt("Ingrese su edad:"));

let TercerNombre = prompt("Ingrese su tercer nombre:");
let TercerEdad = parseInt(prompt("Ingrese su edad:"));

let maximo = Math.max(primerEdad, segundoEdad, TercerEdad);

if (maximo == primerEdad) {
    document.write("El mayor es: " + primerNombre);
}else if (maximo == segundoEdad) {
    document.write("El mayor es: " + segundoNombre);
}else {
    document.write("El mayor es: " + TercerNombre);
}