// #iBvqtjEm
// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (тобто ті, які приводиться до false, а це 0 null, undefined, '').

let x: boolean | string = false;

if (!x) {
    x = 'default';
}
console.log(x);

