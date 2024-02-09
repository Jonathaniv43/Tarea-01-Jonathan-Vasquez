/* 16. Atletas:
Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
y segundos.
*/

console.log('Tiempo de los Altletas');

atleta1Minutos = parseInt(prompt ('Ingrese los minutos (PRIMER ATLETA)'));
atleta1Segundos= parseInt(prompt ('Ingrese los segundos (PRIMER ATLETA)'));
atleta2Minutos = parseInt(prompt ('Ingrese los minutos (SEGUNDO ATLETA)'));
atleta2Segundos= parseInt(prompt ('Ingrese los segundos (SEGUNDO ATLETA)'));
let minutos;
let segundos;
let horas;
let totalHoras;
let totalMinutos;
let totalSegundos;
// Primer Atleta 
minutos = atleta1Minutos;
segundos = atleta1Segundos;
totalHoras = convertirHoras(minutos,segundos);
console.log(`El tiempo en "HORAS" del -PRIMER ATLETA- 
es de ${totalHoras .toFixed(2)}`);
totalMinutos = convertirMinutos(minutos,segundos);
console.log(`El tiempo en "MINUTOS" del -PRIMER ATLETA- 
es de ${totalMinutos .toFixed(2)}`);
totalSegundos = convertirSegundos(minutos,segundos);
console.log(`El tiempo en "SEGUNDOS" del -PRIMER ATLETA- 
es de ${totalSegundos .toFixed(2)}`);
// Segundo Atleta 
minutos = atleta2Minutos;
segundos = atleta2Segundos;
totalHoras = convertirHoras(minutos,segundos);
console.log(`El tiempo en "HORAS" del -SEGUNDO ATLETA- 
es de ${totalHoras .toFixed(2)}`);
totalMinutos = convertirMinutos(minutos,segundos);
console.log(`El tiempo en "MINUTOS" del -SEGUNDO ATLETA- 
es de ${totalMinutos .toFixed(2)}`);
totalSegundos = convertirSegundos(minutos,segundos);
console.log(`El tiempo en "SEGUNDOS" del -PRIMER ATLETA- 
es de ${totalSegundos .toFixed(2)}`);

function convertirHoras(minutos,segundos) {
    let segudosMinutos;
    segudosMinutos = (segundos/60);
    let sumaMinutos ;
    sumaMinutos = minutos+ segudosMinutos;
    horas = sumaMinutos/60;  
    return horas; 
}
function convertirMinutos(minutos,segundos) {
    let segudosMinutos;
    segudosMinutos = (segundos/60);
    let sumaMinutos ;
    sumaMinutos = minutos+ segudosMinutos; 
    return sumaMinutos; 
}

function convertirSegundos (minutos,segundos) {
    let MinutosSegundos;
    MinutosSegundos = (minutos*60);
    let sumaSegundos ;
    sumaSegundos = MinutosSegundos + segundos; 
    return sumaSegundos; 
}


