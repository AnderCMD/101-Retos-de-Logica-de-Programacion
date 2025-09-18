# Escribe un programa que imprima los 50 primeros números de la sucesión
# de Fibonacci empezando en 0.
# - La serie Fibonacci se compone por una sucesión de números en
# la que el siguiente siempre es la suma de los dos anteriores.
# 0, 1, 1, 2, 3, 5, 8, 13...
#

def fibonacci(number):
    a = 0
    b = 1

    print(a)

    for i in range(1, number + 1):
        c = a + b
        a = b
        b = c
        print(a)

fibonacci(50)
