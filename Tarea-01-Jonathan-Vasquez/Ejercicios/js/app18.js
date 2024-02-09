/*
18. Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas
cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
25% se dedica al riego. Diseñe un programa que haga lo siguiente:
Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
pies cúbicos.
*/

console.log('Unidades de Medida');
let tanque1 = parseFloat(prompt('Ingrese la capacidad del Primer tanque en "Litros"'));
let tanque2 = parseFloat (prompt('Ingrese la capacidad del Primer tanque en "Yardas"'));

let tanque1Metros = (tanque1/1000);
let tanque2Metros = (tanque2*27)*0.0283;

let sumaMetros = (tanque1Metros+tanque2Metros);


console.log(`La catidad total de agua en - Metros Cubicos- equivale a ${sumaMetros.toFixed(2)}`);
// Dedicada a riego en Metros
console.log(`\nLa catidad - Dedicada al riego - 
en METROS CUBICOS equivale a ${(sumaMetros*.25).toFixed(2)}`);
// Dedicada al Uso Domestico en Metros
console.log(`\nLa catidad - Dedicada al Uso Domestico -
 en METROS CUBICOS equivale a ${(sumaMetros*.75).toFixed(2)}`);

// Dedicada a riego en Pies Cubicos
console.log(`\nLa catidad - Dedicada al riego - 
en PIES CUBICOS equivale a ${((sumaMetros/0.0283)*.25).toFixed(2)}`);
// Dedicada al Uso Domestico en Pies Cubicos
console.log(`\nLa catidad - Dedicada al Uso Domestico - 
en PIES CUBICOS equivale a ${((sumaMetros/0.0283)*.75).toFixed(2)}`);




