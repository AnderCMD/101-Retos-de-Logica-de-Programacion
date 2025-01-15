/* 
    * Contar la cantidad de palabras en una frase
    * Completa la función contarPalabras que recibe una frase y devuelve la cantidad de palabras que contiene
*/

// ? Solución

const contarPalabras = (frase) => {
	let palabras = [];
	palabras = frase.split(' ');
	return palabras.length;
};

// Todo: Pruebas
console.log(contarPalabras('Hola Mundo ¿Como va todo?')) // Resultado: 5
