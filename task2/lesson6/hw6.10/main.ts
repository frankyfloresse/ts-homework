// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

class Card {
    constructor(public cardSuit: string, public value: string, public color: string) {}
}

type CardsBySuite = { spade: string[], diamond: string[], heart: string[], clubs: string[] };


let suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const deck: Card[] = [];

for (const cardSuit of suits) {
    for (const value of values) {
        deck.push(new Card(cardSuit, value, cardSuit === 'diamond' || cardSuit === 'heart' ? 'red' : 'black'))
    }
}

let cardsBySuit: CardsBySuite = deck.reduce((acc: CardsBySuite, card: Card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(cardsBySuit);


