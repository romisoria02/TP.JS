// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt('Ingrese su edad')
console.log(edad)

if(edad >= 18){
    document.write('Ya puede conducir')
}
else if (edad < 18){
    document.write('No puede conducir')
}
else {
    alert('Ingrese un numero valido')
}