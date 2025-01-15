/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

// ? Solución

function isAnagram(firstWord, secondWord) {
    // Verificamos que la primera palabra no sea igual a la segunda
    if (firstWord === secondWord) {
        return false;
    }

    // Revolvemos las palabras
    let sortedFirstWord = firstWord.split('').sort().join('');
    let sortedSecondWord = secondWord.split('').sort().join('');

    // Comprobamos las palabras revueltas y verificamos que sean iguales
    return sortedFirstWord === sortedSecondWord;
}

// Todo: Pruebas para validar funcionalidad

console.log(isAnagram('amor', 'roma')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('elbow', 'below')); // true
console.log(isAnagram('dusty', 'study')); // true
console.log(isAnagram('night', 'thing')); // true
console.log(isAnagram('cat', 'act')); // true
console.log(isAnagram('aabbcc', 'abcabc')); // true

console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('presto', 'comprendo')); // false
console.log(isAnagram('example', 'samples')); // false
console.log(isAnagram('elevenplus', 'twelveplus')); // false
console.log(isAnagram('rat', 'car')); // false
