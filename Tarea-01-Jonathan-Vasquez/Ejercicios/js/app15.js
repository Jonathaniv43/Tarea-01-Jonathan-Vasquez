/*
15. Verificación de contraseña:
Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña
predefinida.
*/
let contraseña = "Contra1234";
let igualdad;
console.log('Bienvenido - Ingrese la contraseña para Inicia Sesion');

do {
    let intento = (prompt('Ingrese la constraseña'));
    igualdad = (contraseña === intento)
    if (igualdad) {
        console.log('Acceso Concedido');
        
    } else {
        console.log('Acceso Denegado - Contraseña Incorrecta');
    }
} while (!igualdad);

