// #LARqoUj5I
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

class Book {
     constructor (public title: string, public pageCount: number, public genre: string) {}
}

let horrorBook = new Book('It', 1140, 'Horror');
console.log(horrorBook);

let dystopianBook = new Book('Nineteen Eighty-Four', 320, 'Dystopian');
console.log(dystopianBook);

let adventureBook = new Book('The Hobbit', 670, 'Adventure');
console.log(adventureBook);