// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  
let numrep = parseInt(prompt("Ingresa un numero de repeticiones entre 1 y 50"));
if (!isNaN(numrep)) {
    if (numrep >= 1 && numrep <= 50) {
        for (let i = numrep; i >= 1; i--) {
            for (let rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("valor erroneo");
}





