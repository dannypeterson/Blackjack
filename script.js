//Creating deck of cards as class
class Card {
  constructor(cardSuit, cardValue, cardImage) {
    this.cardSuit = cardSuit
    this.cardValue = cardValue
    this.cardImage = cardImage
  }
}

const allCards = [
  new Card('clubs', 'Ace', 'clubs/clubs-A.svg'),
  new Card('clubs', 2, 'clubs/clubs-r02.svg'),
  new Card('clubs', 3, 'clubs/clubs-r03.svg'),
  new Card('clubs', 4, 'clubs/clubs-r04.svg'),
  new Card('clubs', 5, 'clubs/clubs-r05.svg'),
  new Card('clubs', 6, 'clubs/clubs-r06.svg'),
  new Card('clubs', 7, 'clubs/clubs-r07.svg'),
  new Card('clubs', 8, 'clubs/clubs-r08.svg'),
  new Card('clubs', 9, 'clubs/clubs-r09.svg'),
  new Card('clubs', 10, 'clubs/clubs-r10.svg'),
  new Card('clubs', 'Jack', 'clubs/clubs-J.svg'),
  new Card('clubs', 'Queen', 'clubs/clubs-Q.svg'),
  new Card('clubs', 'King', 'clubs/clubs-K.svg'),
  new Card('spades', 'Ace', 'spades/spades-A.svg'),
  new Card('spades', 2, 'spades/spades-r02.svg'),
  new Card('spades', 3, 'spades/spades-r03.svg'),
  new Card('spades', 4, 'spades/spades-r04.svg'),
  new Card('spades', 5, 'spades/spades-r05.svg'),
  new Card('spades', 6, 'spades/spades-r06.svg'),
  new Card('spades', 7, 'spades/spades-r07.svg'),
  new Card('spades', 8, 'spades/spades-r08.svg'),
  new Card('spades', 9, 'spades/spades-r09.svg'),
  new Card('spades', 10, 'spades/spades-r10.svg'),
  new Card('spades', 'Jack', 'spades/spades-J.svg'),
  new Card('spades', 'Queen', 'spades/spades-Q.svg'),
  new Card('spades', 'King', 'spades/spades-K.svg'),
  new Card('hearts', 'Ace', 'hearts/hearts-A.svg'),
  new Card('hearts', 2, 'hearts/hearts-r02.svg'),
  new Card('hearts', 3, 'hearts/hearts-r03.svg'),
  new Card('hearts', 4, 'hearts/hearts-r04.svg'),
  new Card('hearts', 5, 'hearts/hearts-r05.svg'),
  new Card('hearts', 6, 'hearts/hearts-r06.svg'),
  new Card('hearts', 7, 'hearts/hearts-r07.svg'),
  new Card('hearts', 8, 'hearts/hearts-r08.svg'),
  new Card('hearts', 9, 'hearts/hearts-r09.svg'),
  new Card('hearts', 10, 'hearts/hearts-r10.svg'),
  new Card('hearts', 'Jack', 'hearts/hearts-J.svg'),
  new Card('hearts', 'Queen', 'hearts/hearts-Q.svg'),
  new Card('hearts', 'King', 'hearts/hearts-K.svg'),
  new Card('diamonds', 'Ace', 'diamonds/diamonds-A.svg'),
  new Card('diamonds', 2, 'diamonds/diamonds-r02.svg'),
  new Card('diamonds', 3, 'diamonds/diamonds-r03.svg'),
  new Card('diamonds', 4, 'diamonds/diamonds-r04.svg'),
  new Card('diamonds', 5, 'diamonds/diamonds-r05.svg'),
  new Card('diamonds', 6, 'diamonds/diamonds-r06.svg'),
  new Card('diamonds', 7, 'diamonds/diamonds-r07.svg'),
  new Card('diamonds', 8, 'diamonds/diamonds-r08.svg'),
  new Card('diamonds', 9, 'diamonds/diamonds-r09.svg'),
  new Card('diamonds', 10, 'diamonds/diamonds-r10.svg'),
  new Card('diamonds', 'Jack', 'diamonds/diamonds-J.svg'),
  new Card('diamonds', 'Queen', 'diamonds/diamonds-Q.svg'),
  new Card('diamonds', 'King', 'diamonds/diamonds-K.svg')
]

//Global variables
let cardCounter = 0
let drawCardResult = ''

//Query Selectors
const hitButton = document.querySelector('.hitButton')
const stayButton = document.querySelector('.stayButton')
const displayCardTotal = document.querySelector('.player-total')
const playerCardImage1 = document.querySelector('.player-img1')
const playerCardImage2 = document.querySelector('.player-img2')
const dealerCardImage1 = document.querySelector('.dealer-img1')
const dealerCardImage2 = document.querySelector('.dealer-img2')
const dealerTotal = document.querySelector('.dealer-total')
const playerCards = document.querySelector('.player-cards')

//Functions

//Chooses a card at random
const drawCard = (array) => {
  drawCardResult = Math.floor(Math.random() * array.length)
}

//Hit Me button event handler
const hitResponse = () => {
  if (cardCounter < 21) {
    let newDiv = document.createElement('div')
    playerCards.append(newDiv)
    drawCard(allCards)
    newDiv.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
    countingCards(allCards)
    displayCardTotal.innerText = cardCounter
    if (cardCounter > 21) {
      console.log('You busted!')
    }
  }
}
hitButton.addEventListener('click', hitResponse)

//Stay button event handler
const stayResponse = () => {
  console.log('You decided to stay')
}
stayButton.addEventListener('click', stayResponse)

const countingCards = (element) => {
  if (typeof element[drawCardResult].cardValue === 'number') {
    cardCounter += element[drawCardResult].cardValue
  } else if (element[drawCardResult].cardValue === 'Ace') {
    cardCounter += 1
  } else {
    cardCounter += 10
  }
}
const startGame = () => {
  //Dealer gets first card
  drawCard(allCards)
  dealerCardImage1.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
  dealerTotal.innerText = allCards[drawCardResult].cardValue

  //Player gets 2 cards
  drawCard(allCards)
  countingCards(allCards)
  displayCardTotal.innerText = cardCounter
  playerCardImage1.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
  drawCard(allCards)
  countingCards(allCards)
  displayCardTotal.innerText = cardCounter
  playerCardImage2.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
}
startGame()
