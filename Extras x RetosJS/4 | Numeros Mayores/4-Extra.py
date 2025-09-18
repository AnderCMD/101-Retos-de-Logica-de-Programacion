# Contar Números Mayores que un Valor
# Cuenta cuántos números en un arreglo son mayores que un valor dado.

number = [1,2,3,4,5,6,7,8,9,10]
numberComparative = 5
counter = 0

for i in range(len(number)):
    if number[i] > numberComparative:
        counter = counter + 1

print(counter)