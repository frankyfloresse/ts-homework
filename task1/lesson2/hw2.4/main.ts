// #jCHFnEbdmFd
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача


class User {
    constructor(public name: string, public username: string, public password: string) {}
}

let users: User[] = [
    new User('Olga', 'user1', 'qwertty234asdyu'),
    new User('Vlad', 'user2', 'qw4567hjk89fg'),
    new User('Maria', 'user3', 'fghjkl8765r4e'),
    new User('Polina', 'user4', 'lkjnbv678'),
    new User('Gleb', 'user5', 'zxcvqwesdfgh789'),
    new User('Orest', 'user6', 'qwfgh678ertty'),
    new User('Ksenia', 'user7', 'rtghbn78aswd'),
    new User('Vadym', 'user8', 'zxcv456asd89'),
    new User('Kristina', 'user9', 'sdfgrtyu45sdfghrty'),
    new User('Ksenia', 'user10', 'rtghbn78aswd'),
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
