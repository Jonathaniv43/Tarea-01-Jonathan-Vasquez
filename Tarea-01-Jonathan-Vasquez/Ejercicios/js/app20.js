/*
20. El combustible:
Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro.

*/

console.log('Autonomia de un Automobil');

let kilometraje = parseFloat(prompt('Ingrese los Kilometros Recorridos'));
let combustble = parseFloat (prompt('Ingrese litros consumidos'));

let autonomia = combustble/kilometraje
console.log(`Su automobil gasta un promedio de ${autonomia.toFixed(2)} km/lt o ${autonomia*100} ltrs cada 100km`);
