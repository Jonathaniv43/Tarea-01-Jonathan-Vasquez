// Area de un Circulo

console.log('Encontrar area de un Circulo');

let radio = parseFloat(prompt('Ingrese ell radio del Circulo'));
let area = (Math.PI*(Math.pow(radio,2)));

console.log(`El Area del Circulo es igual a ${area.toFixed(2)}`);
