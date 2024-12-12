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

type CardSuit = 'spade' | 'diamond' | 'heart' | 'clubs';
type CardValue = '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king';

interface ICard {
    cardSuit: string;
    value: string;
    color: string;
}

let suits: CardSuit[] = ['spade', 'diamond', 'heart', 'clubs'];
let values: CardValue[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

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

let spadeAce: ICard = deck.find((card: ICard) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let cardsWithSix: ICard[] = deck.filter((card: ICard)  => card.value === '6');
console.log(cardsWithSix);

let redCards: ICard[] = deck.filter((card: ICard)  => card.color === 'red');
console.log(redCards);

let diamondCards: ICard[] = deck.filter((card: ICard)  => card.cardSuit === 'diamond');
console.log(diamondCards);

let clubsCads: ICard[] = deck.filter((card: ICard)  => card.cardSuit === 'clubs' && ['10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubsCads);






