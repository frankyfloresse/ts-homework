// 6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName: string = 'Тетяна';
let middleName: string = 'Олександрівна';
let lastName: string = 'Жорник';

let person: string = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

let person2: string = `${lastName} ${firstName} ${middleName}`;
console.log(person2);