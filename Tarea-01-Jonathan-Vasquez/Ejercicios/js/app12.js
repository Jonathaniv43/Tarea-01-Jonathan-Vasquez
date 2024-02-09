/*
12. Calculadora simple:
Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
multiplicación, división) con dos números.
*/

console.log('Calculadora');
let decision = 0;

let num1
let num2
let resultado
let eleccion


    
do {
    
    decision = parseInt(prompt("Elija que desea hacer:\n 1.Sumar\n 2.Restar \n 3.Multiplicar \n4.Dividir"))
    
    switch (decision) {
        case 1: 
            num1 = parseFloat(prompt ('Digite el primer numero a Sumar'));
            num2 = parseFloat(prompt ('Digite el segundo numero'));
        
            resultado= num1+num2;
            console.log(`La suma de ${num1} y ${num2} nos da un resultado de ${resultado}`);
            
            break;
        case 2:
            num1 = parseFloat(prompt('Ingrese el primer valor'));
            num2 = parseFloat(prompt('Ingrese el segundo valor'));
            resultado = num1-num2;
            console.log(`La diferencia entre ${num1} y ${num2} es ${resultado}`);
            break;
        case 3:
            num1 = parseFloat(prompt('Ingrese el primer valor'));
            num2 = parseFloat(prompt('Ingrese el Segundo valor'));
    
            resultado = num1 * num2;
            console.log(`El Producto de ${num1} y ${num2} es igual a ${resultado}`);
            break;
        case 4:
            num1 = parseFloat(prompt('Ingrese el primer valor - Al dividirse este será el dividendo'));
            num2 = parseFloat(prompt('Ingrese el Segundo valor - Al dividirse este será el divisor'));
            resultado = num1 / num2;
            console.log(`La división de ${num1} entre ${num2} es igual a ${resultado}`);
            break;
        default: 
            alert('Porfavor elija un valor entre 1-4');
            break;
     }


 } while (decision > 4); 
