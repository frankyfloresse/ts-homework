// #coYydZuaeEB
// Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

class Temperature {
    constructor(public morning: number, public afternoon: number, public evening: number ) {}
}

//Array of objects
let temperature = [
    new Temperature(20, 26, 22),
    new Temperature(19, 28, 24),
    new Temperature(20, 31, 25),
    new Temperature(18, 27, 20),
    new Temperature(20, 26, 22),
    new Temperature(19, 29, 21),
    new Temperature(21, 30, 23),
    new Temperature(17, 28, 20)
];

console.log(temperature);
console.log(temperature.length);
console.log(temperature[5].evening);

//Nested array
let temperature2: number[][] = [
    [20, 26, 22],
    [19, 28, 24],
    [20, 31, 25],
    [18, 27, 20],
    [19, 29, 21],
    [21, 30, 23],
    [17, 28, 20],
];

console.log(temperature2);
console.log(temperature2[3][0]);
console.log(temperature2[4][2]);