// Multiplicacion y Division de Numeros

console.log('Multiplicacion y Division de Dos Numeros');

let num1 = parseFloat(prompt('Ingrese el primer valor - Al dividirse este será el dividendo'));
let num2 = parseFloat(prompt('Ingrese el Segundo valor - Al dividirse este será el divisor'));
// multiplicacion
let resultado;
resultado = num1 * num2;
console.log(`El Producto de ${num1} y ${num2} es igual a ${resultado}`);
// Division 
resultado = num1 / num2;
console.log(`La división de ${num1} entre ${num2} es igual a ${resultado}`);