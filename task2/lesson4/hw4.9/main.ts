// #bovDJDTIjt
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age та виводить їх в документ.
// Для кожного об'єкту окремий блок.

class User {
    constructor(public id: number, public name: string, public age: number) {}
}

let users = [
    new User(1, 'Charlie', 23),
    new User(2, 'Kate', 31),
    new User(3, 'Sarah', 19),
    new User(4, 'Taylor', 39),
    new User(5, 'Monica', 27),
    new User(6, 'Allison', 34)
];


function printUserList(arr: User[]): void {
    for (const user of arr) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`);
    }
}

printUserList(users);

