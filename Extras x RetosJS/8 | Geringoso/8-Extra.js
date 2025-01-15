/*
    * Convertir a Geringoso
    * Convierte una cadena de texto agregando "p" y la vocal después de cada vocal.
    * En geringoso, después de cada vocal (a, e, i, o, u) se agrega la sílaba “p” seguida de la misma vocal.
*/

// ? Solución

function convertirAGeringoso(texto) {
    let letrasTexto = [];
    texto.toLowerCase()
    letrasTexto = texto.split('');
    tamañoTexto = letrasTexto.length

    let geringoso = []
    for (let i = 0; i <= tamañoTexto; i++) {
        if (letrasTexto[i] === 'a' || letrasTexto[i] === 'e' || letrasTexto[i] === 'i' || letrasTexto[i] === 'o' || letrasTexto[i] === 'u') {
            geringoso.push(letrasTexto[i] + 'p' + letrasTexto[i])
        } else {
            geringoso.push(letrasTexto[i])
        }
    }
    console.log(geringoso.join(''))
}

// Todo: Pruebas

convertirAGeringoso('hola') // Resultado: hopolapa
