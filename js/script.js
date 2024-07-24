/* Ejercicio Cachipummmmmmmmmm */
/* Declaraciones arriba ordenado */
var cantVeces;
var eleccionJugador;
var eleccionMaquina;
var piedra = 0;
var papel = 1;
var tijera = 2;
var resultado;

cantVeces = prompt('Ingresa la cantidad de veces que desea jugar'); /* revisar en ascii para numeros mayores o menores */
for (var i = 0; i < cantVeces; i = i + 1)
    eleccionJugador = prompt('Elige entre piedra, papel o tijera');
eleccionMaquina = Math.floor(Math.random() * 3);
switch (eleccionJugador) {
    case 'piedra':
        if (eleccionMaquina == piedra) {
            console.log('empate');
        } else if (eleccionMaquina == papel) {
            console.log('Lo sentimos, ha perdido');
        } else {
            console.log('Felicitaciones, ha ganado');
        }
        break;

    case 'papel':
        if (eleccionMaquina == piedra) {
            console.log('Felicitaciones, ha ganado');
        } else if (eleccionMaquina == papel) {
            console.log('empate');
        } else {
            console.log('Felicitaciones, ha ganado');
        }
        break;

    case 'tijera':
        if (eleccionMaquina == piedra) {
            console.log('Lo sentimos, ha perdido');
        } else if (eleccionMaquina == papel) {
            console.log('Felicitaciones, ha ganado');
        } else {
            console.log('empate');
        }
        break;
}


/* eleccionJugador = prompt('Escoja entre: piedra, papel o tijeras'); */
/* 1.Pedir las veces que se desea jugar */
/* 2.Solicitar jugada al usuario */
/* 3.Solicitar jugada de la maquina */
/* 4.Comparar jugadas */
/* 5.Dar respuesta a la partida */