// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент

type Primitive = string | number | boolean;

let primitiveValues: Primitive[] = [1, true, 'qwerty', 23, -15, false, 'asd'];

const printArrElement = (array: Primitive[]) => {
    for (const element of array) {
        console.log(element);
    }
};

printArrElement(primitiveValues);