// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

type CardSuit = 'spade' | 'diamond' | 'heart' | 'clubs';
type CardValue = '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king';

interface ICard {
    cardSuit: string;
    value: string;
    color: string;
}

interface CardBySuit {
    spade: ICard[];
    diamond: ICard[];
    heart: ICard[];
    clubs: ICard[]
}


let suits: CardSuit[] = ['spade', 'diamond', 'heart', 'clubs'];
let values: CardValue[]  = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const deck: ICard[] = [];

for (const cardSuit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit,
            value,
            color: cardSuit === 'diamond' || cardSuit === 'heart' ? 'red' : 'black'
        })
    }
}
console.log(deck);

let cardsBySuit: CardBySuit = deck.reduce((acc: CardBySuit, card: ICard) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(cardsBySuit);


