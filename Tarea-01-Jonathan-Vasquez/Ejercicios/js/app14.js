/*
14. Comparación de cadenas:
Solicite dos cadenas de texto y compare si son iguales o diferentes.
*/
console.log('Comparación de Cadenas');
let cadena1 = (prompt('Ingrese la Primera Cadena'));
let cadena2 = (prompt('Ingrese la segunda Cadena'));


let igualdad = (cadena1 === cadena2)

if (igualdad ) {
    console.log(`${cadena1} y ${cadena2} son Iguales`);
}
else{
    console.log(`${cadena1} y ${cadena2} son Diferentes`);
}