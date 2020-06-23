const suits = ["clover", "heart", "spade", "diamond"];
const ranks = ["2","3","4","5","6","7","8","9","10","Q","J","K","A"];
const deck = [];
const multiply = suits.length * ranks.length;
const numbers = Array.from(new Array(multiply).keys());
let initialDeck = [];

function getId() {
  
  const id = numbers[numbers.length - 1];
  
  numbers.pop();
  
  return id;

}

suits.forEach(suit => {

  ranks.forEach(rank => {

    deck.push({ id: getId(), suit, rank });

  });

});

function shuffle(arr) {
  
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    
    const rdm = Math.floor(Math.random() * idx);
    const curr = arr[idx];

    arr[idx] = arr[rdm];
    arr[rdm] = curr;

  }

  return arr;

}

initialDeck = shuffle(deck);

// export default initialDeck;
module.exports = initialDeck