// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

do{

let numero = parseInt(prompt ('Ingrese numero de DNI, entre 0 y 99999999'))
console.log(numero)

    if(numero >= 0 && numero <= 99999999){
        let resultado = numero % 23;
        console.log(numero)
    
    switch(resultado){
        case 0:
            document.write('La letra que corresponde a su DNI es la T, DNI ingresado ' +numero);
            break;
        case 1:
            document.write('La letra que corresponde a su DNI es la R, DNI ingresado ' +numero); 
            break;
        case 2:
            document.write('La letra que corresponde a su DNI es la w, DNI ingresado ' +numero);
            break;
        case 3:
            document.write('La letra que corresponde a su DNI es la A, DNI ingresado ' +numero);
            break;
        case 4:
            document.write('La letra que corresponde a su DNI es la G, DNI ingresado ' +numero);
            break;
        case 5:
            document.write('La letra que corresponde a su DNI es la M, DNI ingresado ' +numero);
            break;
        case 6:
            document.write('La letra que corresponde a su DNI es la Y, DNI ingresado ' +numero);
            break;
        case 7:
            document.write('La letra que corresponde a su DNI es la F, DNI ingresado ' +numero);
            break;
        case 8:
            document.write('La letra que corresponde a su DNI es la P, DNI ingresado ' +numero);
            break;
        case 9:
            document.write('La letra que corresponde a su DNI es la D, DNI ingresado ' +numero)
            break;
        case 10:
            document.write('La letra que corresponde ;a su DNI es la X, DNI ingresado ' +numero)
            break;
        case 11:
            document.write('La letra que corresponde ;a su DNI es la B, DNI ingresado ' +numero)
            break;
        case 12:
            document.write('La letra que corresponde ;a su DNI es la N, DNI ingresado ' +numero)
            break;
        case 13:
            document.write('La letra que corresponde ;a su DNI es la J, DNI ingresado ' +numero)
            break;
        case 14:
            document.write('La letra que corresponde ;a su DNI es la Z, DNI ingresado ' +numero)
            break;
        case 15:
            document.write('La letra que corresponde ;a su DNI es la S, DNI ingresado ' +numero)
            break;
        case 16:                                                    ;     
            document.write('La letra que corresponde a su DNI es la Q, DNI ingresado ' +numero)
            break;
        case 17:
            document.write('La letra que corresponde ;a su DNI es la V, DNI ingresado ' +numero)
            break;
        case 18:
            document.write('La letra que corresponde ;a su DNI es la H, DNI ingresado ' +numero)
            break;
        case 19:
            document.write('La letra que corresponde ;a su DNI es la L, DNI ingresado ' +numero)
            break;
        case 20:
            document.write('La letra que corresponde ;a su DNI es la C, DNI ingresado ' +numero)
            break;
        case 21:
            document.write('La letra que corresponde ;a su DNI es la K, DNI ingresado ' +numero)
            break;
        case 22:
            document.write('La letra que corresponde ;a su DNI es la E, DNI ingresado ' +numero)
            break;
            default:
            alert('Ingresaste una opcion invalida')
        
        }
    } else {
        alert('Ingreso un numero erroneo')
    }

}while(confirm('¿Desea ingresar un DNI'));


