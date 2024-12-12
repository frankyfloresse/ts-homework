// #LARqoUj5I
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

interface IBook {
    title: string;
    pageCount: number;
    genre: string;
}

let horrorBook: IBook = {
    title: 'It',
    pageCount: 1140,
    genre: 'Horror',
};
console.log(horrorBook);

let dystopianBook: IBook = {
    title: 'Nineteen Eighty-Four',
    pageCount: 320,
    genre: 'Dystopian',
};
console.log(dystopianBook);

let adventureBook: IBook = {
    title: 'The Hobbit ',
    pageCount: 670,
    genre: 'Adventure',
};
console.log(adventureBook);