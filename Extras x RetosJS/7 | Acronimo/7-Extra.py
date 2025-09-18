# Genera un acrónimo a partir de una frase, usando las primeras letras de cada palabra.

def generateAcronym(phrase):
    wordsPhrase = phrase.upper().split()
    countWords = len(wordsPhrase)
    acronym = []

    for i in range(countWords):
        acronym.append(wordsPhrase[i][0])

    print(''.join(acronym))

generateAcronym('Prueba contingente de salud')