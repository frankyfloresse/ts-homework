// #4WrHwFTEop0
// є масив, за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

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

console.log('користувачі зі статусом true:');
for (let user of users) {
    if (user.status) console.log(user);
}

console.log('користувачі зі статусом false:');
for (let user of users) {
    if (!user.status) console.log(user);
}

console.log('користувачі старші за 30 років:');
for (let user of users) {
    if (user.age > 30) console.log(user);
}