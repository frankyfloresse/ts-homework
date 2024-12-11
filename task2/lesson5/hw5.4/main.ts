// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент

type Primitive = number | string | boolean;

let primitiveValues: Primitive[] = [1, true, 'qwerty', 23, -15, false, 'asd'];

const printArrElement = (array: Primitive[]): void => {
    for (const element of array) {
        console.log(element);
    }
};

printArrElement(primitiveValues);