# Contar la cantidad de palabras en una frase
# Completa la función contarPalabras que recibe una frase y devuelve la cantidad de palabras que contiene

def countWords(phrase):
    words = phrase.split(' ')
    return len(words)

print(countWords('Hola mundo ¿Como va todo?'))