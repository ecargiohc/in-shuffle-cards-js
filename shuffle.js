// RIFFLE SHUFFLE: This involves cutting the deck into 2 halves so we get two sets of cards and riffle them such that at the end both halves gets interleaved.


// program to shuffle the deck of cards

// declare card elements
let suits = ["Spades", "Diamonds", "Club", "Heart"];
let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// console.log('The first five cards are:');

// // display 7 results
// for (let i = 0; i < 5; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
// }

// Q1: "What is the position of the first card after the 7th shuffle?"
// for (let i=1; i<=7; i++) {
//     for (let j=0; j<1; j++) {
//         if(i === 7)
//         console.log(i, `${deck[j].Value} of ${deck[j].Suit}`);
//     }
// }

// Q2: "How many times must one perform the shuffle so that the top card becomes the bottom card?"
// store top card before shuffle
// store 'top card' as variable
// shuffle deck until top card reaches stored top card
for(let shuffleCount = 0, i = deck.length - 1; i > 0; i--) {
    let topCard = deck[0];
    let top = 0;
    shuffleCount++;
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    if(deck[top] === topCard) {
        console.log("OG", topCard);
        console.log("now",deck[top])
        console.log(shuffleCount, 'times');
    }
}
// Q3: "When do the first and last cards in the deck touch?"