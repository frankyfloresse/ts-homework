// #gEFoxMMO
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

type Primitive = string | number | boolean;
let arr: Primitive[] = [1, true, 'qwerty', -11, 23, false, 'asd'];

function printList(array: Primitive[]) {
    document.write('<ul>');
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

printList(arr);