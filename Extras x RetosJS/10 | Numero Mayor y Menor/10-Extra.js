/*
 *  Número menor y mayor
 *  Encuentra el número menor y el mayor de un Array
 * 
 *  Información del desafío
 *  Es posible que esta información te ayude a resolver el desafío.
 *  Crea una función que encuentre y el número menor y el número mayor en un array.
 *  Luego debes imprimir por consola los valores
*/

// ? Solución

function numeroMayorYMenor(numbers) {
	console.log(Math.min(...numbers));
	console.log(Math.max(...numbers));
}

// Todo: Pruebas
numeroMayorYMenor([21, 3, 76, 9]); // Resultado: 3, 76
