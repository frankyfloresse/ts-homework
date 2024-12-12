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

enum Suit {
    spade = 'spade',
    diamond = 'diamond',
    heart = 'heart',
    clubs = 'clubs'
}

enum CardColor {
    red = 'red',
    black = 'black'
}

enum CardValue {
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    ace = 'ace',
    jack = 'jack',
    queen = 'queen',
    king = 'king'
}

let suits: Suit[] = [Suit.spade, Suit.clubs, Suit.diamond, Suit.heart];
let values: CardValue[] = [
    CardValue.six,
    CardValue.seven,
    CardValue.eight,
    CardValue.nine,
    CardValue.ten,
    CardValue.ace,
    CardValue.jack,
    CardValue.queen,
    CardValue.king
];

class Card {
    constructor(public cardSuit: Suit, public value: CardValue, public color: CardColor) {}
}

const deck: Card[] = [];

for (const cardSuit of suits) {
    for (const value of values) {
        deck.push(new Card(cardSuit, value, cardSuit === Suit.diamond || cardSuit === Suit.heart ? CardColor.red : CardColor.black))
    }
}

let spadeAce: Card = deck.find((card: Card) => card.cardSuit === Suit.spade && card.value === CardValue.ace);
console.log(spadeAce);

let cardsWithSix: Card[] = deck.filter((card: Card) => card.value === CardValue.six);
console.log(cardsWithSix);

let redCards: Card[] = deck.filter((card: Card) => card.color === CardColor.red);
console.log(redCards);

let diamondCards: Card[] = deck.filter((card: Card) => card.cardSuit === Suit.diamond);
console.log(diamondCards);

let clubsCads: Card[] = deck.filter((card: Card) => card.cardSuit === Suit.clubs && [CardValue.ten, CardValue.jack, CardValue.queen, CardValue.king, CardValue.ace].includes(card.value));
console.log(clubsCads);






