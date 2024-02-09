/*
17. Unidades de medida:
Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
siguientes equivalencias.
1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas.
*/


console.log('Unidades de Medida');
let longitud1 = parseFloat(prompt('Ingrese la Primera longitud en "PIES"'));
let longitud2 = parseFloat (prompt('Ingrese la Segunda longitud en "METROS"'));

let longitud2Pies= (longitud2/0.0254)/12

let sumaPies = (longitud1+longitud2Pies)


convertir(sumaPies);

function convertir(sumaPies) {
    // convertir la suma a pulgadas
    let sumaPulgadas = sumaPies*12;
    console.log(`La suma de ambas medias en -Pulgadas- equivale a ${sumaPulgadas.toFixed(3)}`);
    // convertir suma a Yarda
    let sumaYarda = sumaPies/3;
    console.log(`La suma de ambas medias en -Yardas- equivale a ${sumaYarda.toFixed(3)}`);
    // convertir suma a Metros
    let sumaMetros = sumaPulgadas*0.0254;
    console.log(`La suma de ambas medias en -Metros- equivale a ${sumaMetros.toFixed(3)}`);
    // convertir suma a Metros
    let sumaMillas = sumaMetros/1609;
    console.log(`La suma de ambas medias en -Millas- equivale a ${sumaMillas.toFixed(3)} `);
    
}

  
    


