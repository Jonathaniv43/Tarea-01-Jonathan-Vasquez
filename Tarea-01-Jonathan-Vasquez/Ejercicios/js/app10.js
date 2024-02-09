// Area de un Circulo

console.log('Encontrar area de un Circulo');

let radio = parseFloat(prompt('Ingrese el radio del Circulo'));
let area = (Math.PI*(Math.pow(radio,2)));

console.log(`El Area del Circulo es igual a ${area.toFixed(2)}`);
