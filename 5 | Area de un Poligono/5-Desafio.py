# Crea una única función (importante que sólo sea una) que sea capaz
# de calcular y retornar el área de un polígono.
# - La función recibirá por parámetro sólo UN polígono a la vez.
# - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
# - Imprime el cálculo del área de un polígono de cada tipo.

def perimeterArea(base, height, polygon):
    if polygon == 'triangle':
        area = ((base * height) / 2)
        return print(area)
    elif polygon == 'square':
        area = base ** 2
        return print(area)
    elif polygon == 'rectangle':
        area = base * height
        return print(area)
    else: 
        print('El polígono no es valido')

perimeterArea(3, 3, "triangle")
perimeterArea(6, 6,"square")
perimeterArea(9, 6, "rectangle")

numbers = [1,2,3,4,5,6]

for i in range(0, len(numbers)):
    print(numbers[i])
