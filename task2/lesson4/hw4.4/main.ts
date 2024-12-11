// #SIdMd0hQ
// створити функцію яка приймає масив та виводить кожен його елемент

class User {
    constructor(public name: string, public age: number, public status: boolean) {}
}

let users: User[] = [
    new User('vasya', 31, false),
    new User('petya', 30, true),
    new User('kolya', 29, true),
    new User('olya', 28, false),
    new User('max', 30, true),
    new User('anya', 31, false),
    new User('oleg', 28, false),
    new User('max', 30, true),
    new User('andrey', 29, true),
    new User('masha', 30, true),
    new User('olya', 31, false),
    new User('max', 31, true),
];

function printArray(arr: User[]): void {
    for (const item of arr) {
        console.log(item);
    }
}

printArray(users);
