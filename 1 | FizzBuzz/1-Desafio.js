/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "Fizz".
 * - Múltiplos de 5 por la palabra "Buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "FizzBuzz".
 */

// ? Solución

/*  
    ? Explicación
    Para verificar que un numero sea múltiplo de otro se utiliza el operador "%"
    y se debe de verificar que el residuo sea igual a cero (0)

    Ejemplo: i % 3 === 0
    i debe de ser múltiplo de 3 y el residuo debe de ser igual a cero (0)
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}