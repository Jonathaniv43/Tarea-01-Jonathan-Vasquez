/*
19. La compra:
Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
calcule el precio total a pagar por la compra.
*/
console.log('Calcular el total a pagar');
let precio = parseFloat(prompt ('Ingrese el precio del producto'));
let ivaPorcentaje = parseInt(prompt ('Ingrese el % de iva'));

let  iva = precio* (ivaPorcentaje/100);
let total = (precio + iva)

console.log(`Precio : ${precio} \nIva ${ivaPorcentaje}% : ${iva}\nTotal a pagar ${total} `);