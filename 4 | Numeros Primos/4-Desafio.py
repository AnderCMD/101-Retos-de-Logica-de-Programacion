# Escribe un programa que se encargue de comprobar si un número es o no primo.
# Hecho esto, imprime los números primos entre 1 y 100.

for i in range(1, 101):
    if i % 2 == 0:
        print(i)