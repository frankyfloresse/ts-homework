// #Mbiz5K4yFe7
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function findCylinderArea(h: number, r: number): number {
    return 2 * Math.PI * r * (r + h);
}

console.log(findCylinderArea(5, 3));