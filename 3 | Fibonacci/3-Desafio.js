/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// ? Solución

function fibonacci(number) {
    let a = 0
    let b = 1

    console.log(a)

    for (let i = 1; i < number; i++) {
        let c = a + b
        a = b
        b = c
        console.log(a)
    }
}

fibonacci(50)