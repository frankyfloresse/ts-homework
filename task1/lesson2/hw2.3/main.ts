// #sA3Gg1sCp
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

class Author {
    constructor(public name: string, public age: number) {}
}

class Book {
    constructor(public title: string, public pageCount: number, public genre: string, public authors: Author[]) {
    }
}

let horrorBook = new Book('It', 1140, 'Horror', [new Author('Stephen King', 77)]);
console.log(horrorBook);

let dystopianBook = new Book('Nineteen Eighty-Four', 320, 'Dystopian', [new Author('George Orwell', 46)]);
console.log(dystopianBook);

let adventureBook = new Book('The Hobbit', 670, 'Adventure', [new Author('John Tolkien', 81)]);
console.log(adventureBook);