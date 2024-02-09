// Cambio de Moneda $ a L
/*
13. Cambio de moneda:
Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
cambio actual. 
*/

let tipoCambio 
tipoCambio = 24.7793

console.log(`El tipo de cambio actual es ${tipoCambio}`);
num1 = parseFloat(prompt ('Ingrese la catidad en $ Dolares '));
let conversion = num1 * tipoCambio;

console.log(`$ ${num1} equivale a L ${conversion.toFixed(2)}`);
