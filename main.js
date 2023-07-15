//creating new variables here

let card1 = randomCard();
let card2 = randomCard();
let message = "";
let sum = card1 + card2;
let cardArray = [card1, card2];
let isAlive = true;
let hasBlacJack = false;

// calling element using their id
let messEl = document.getElementById("mess-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");

// making randomCard function

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

console.log(cardArray);

function startGame() {
  renderGame();
}

//making function start game
function renderGame() {
  isAlive = true;

  cardEl.textContent = "Card :";

  for (let i = 0; i < cardArray.length; i++) {
    cardEl.textContent += cardArray[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;

  if (sum <= 20) {
    message = "draw a new card !";
  } else if (sum === 21) {
    message = "Blackjack, You won the game !";
    hasBlacJack = true;
  } else {
    message = "you lost !";
    isAlive = false;
  }

  messEl.textContent = message;
}

//making function new card
function newCard() {
  if (isAlive === true && hasBlacJack === false) {
    let card3 = randomCard();
    sum += card3;
    cardArray.push(card3);

    renderGame();
  } else {
    let steps = cardArray.length;

    alert(
      "BlackJack is over and you took " + steps + " " + "cards to complete ."
    );
  }
}
