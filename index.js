let player = {
    name: "Per",
    chips: 200,
}
let cards = []; //array -oredred list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
    // return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;

    rendergame();
}

function rendergame() {
    //render out 1st and 2nd card
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    //render out all the cards we have

    sumEl.textContent = "Sum : " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        message = "Wohoo! You got Balckjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    // console.log("Dreawing a new card from the deck! ");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;

        cards.push(card);
        rendergame();
    }
}

















