/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// ? Solución

function perimeterArea(base, height, polygon) {
    switch (polygon) {
        case "triangle":
            area = (base * height) / 2
            console.log('Area of a triangle: ' + area)
            break
        
        case "square":
            area = base * 4
            console.log('Area of a square: ' + area);
            break
        
        case "rectangle":
            area = base * height
            console.log('Area of a rectangle: ' + area);
            break
        
        default:
            console.log('Invalid option')
            break
    }
}

// Todo: Pruebas de funcionamiento

perimeterArea(3, 3, "triangle")
perimeterArea(6, 6,"square")
perimeterArea(9, 6, "rectangle")

