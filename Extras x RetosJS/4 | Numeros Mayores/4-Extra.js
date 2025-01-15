/* 
    * Contar Números Mayores que un Valor
    * Cuenta cuántos números en un arreglo son mayores que un valor dado.
*/

// ? Solución

function contarMayoresQue(numeros, x) {
	let cantidadMayor = 0;
	for (let i = 0; i <= numeros.length; i++) {
		if (numeros[i] > x) {
			cantidadMayor = cantidadMayor + 1;
		}
	}
	return cantidadMayor;
}

// Todo: Pruebas

console.log(contarMayoresQue([1,4,7,5,9,7,6], 5)) // Resultado: 4
