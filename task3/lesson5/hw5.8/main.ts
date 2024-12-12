// #gEFoxMMO
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

type Primitive = string | number | boolean;

let primitiveElements: Primitive[] = [1, true, 'qwerty', -12, 'asd', 15, 18];

const createList = (arr: Primitive[]) => {
    document.write('<ul>');
    for (const element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
};

createList(primitiveElements);