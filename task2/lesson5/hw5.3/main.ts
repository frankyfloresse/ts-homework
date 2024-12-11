// #Mbiz5K4yFe7
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const calcCylinderArea = (height: number, radius: number): number => {
     return 2 * Math.PI * radius * (height + radius);
};

console.log(calcCylinderArea(5, 3));