// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

class Card {
    constructor(public cardSuit: string, public value: string, public color: string) {}
}

const deck: Card[] = [];

for (const cardSuit of suits) {
    for (const value of values) {
        deck.push(new Card(cardSuit, value, cardSuit === 'diamond' || cardSuit === 'heart' ? 'red' : 'black'))
    }
}

let spadeAce: Card = deck.find((card: Card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let cardsWithSix: Card[] = deck.filter((card: Card) => card.value === '6');
console.log(cardsWithSix);

let redCards: Card[] = deck.filter((card: Card) => card.color === 'red');
console.log(redCards);

let diamondCards: Card[] = deck.filter((card: Card) => card.cardSuit === 'diamond');
console.log(diamondCards);

let clubsCads: Card[] = deck.filter((card: Card) => card.cardSuit === 'clubs' && ['10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubsCads);






