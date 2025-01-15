/*
    * Genera un acrónimo a partir de una frase, usando las primeras letras de cada palabra.
*/

// ? Solución

const generarAcronimo = (frase) => {
	let palabrasFrase = [];
	palabrasFrase = frase.toUpperCase().split(' ');
	cantidadPalabras = palabrasFrase.length;
	let acronimo = [];
	for (let i = 0; i < cantidadPalabras; i++) {
		acronimo.push(palabrasFrase[i].charAt(0));
	}
	console.log(acronimo.join(''));
};

// Todo: Pruebas
generarAcronimo('Prueba contingente de salud') // Resultado: PCDS