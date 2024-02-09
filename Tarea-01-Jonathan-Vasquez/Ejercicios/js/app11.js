/*11. Verificación de un número primo:
Pida un número y verifique si es primo o no.
*/

console.log('Verificacion de numero Primo');

let num1 = parseInt(prompt('Ingrese el numero a Verificar'));

let divisor = 1;
let cont = 0;

while (divisor <= num1 ) {
    if (num1 % divisor == 0) {
        cont++;
        
    }
    divisor++;
}

if (cont == 2) {
    console.log(`${num1} es un numero primo`);
    
} else {
    console.log(`${num1} no es un numero primo`);
}