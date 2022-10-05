//Creating deck of cards as class
class Card {
  constructor(cardSuit, cardValue, cardImage) {
    this.cardSuit = cardSuit
    this.cardValue = cardValue
    this.cardImage = cardImage
  }
}

const allCards = [
  new Card('clubs', 1, 'clubs/clubs-A.svg'),
  new Card('clubs', 2, 'clubs/clubs-r02.svg'),
  new Card('clubs', 3, 'clubs/clubs-r03.svg'),
  new Card('clubs', 4, 'clubs/clubs-r04.svg'),
  new Card('clubs', 5, 'clubs/clubs-r05.svg'),
  new Card('clubs', 6, 'clubs/clubs-r06.svg'),
  new Card('clubs', 7, 'clubs/clubs-r07.svg'),
  new Card('clubs', 8, 'clubs/clubs-r08.svg'),
  new Card('clubs', 9, 'clubs/clubs-r09.svg'),
  new Card('clubs', 10, 'clubs/clubs-r10.svg'),
  new Card('clubs', 10, 'clubs/clubs-J.svg'),
  new Card('clubs', 10, 'clubs/clubs-Q.svg'),
  new Card('clubs', 10, 'clubs/clubs-K.svg'),
  new Card('spades', 1, 'spades/spades-A.svg'),
  new Card('spades', 2, 'spades/spades-r02.svg'),
  new Card('spades', 3, 'spades/spades-r03.svg'),
  new Card('spades', 4, 'spades/spades-r04.svg'),
  new Card('spades', 5, 'spades/spades-r05.svg'),
  new Card('spades', 6, 'spades/spades-r06.svg'),
  new Card('spades', 7, 'spades/spades-r07.svg'),
  new Card('spades', 8, 'spades/spades-r08.svg'),
  new Card('spades', 9, 'spades/spades-r09.svg'),
  new Card('spades', 10, 'spades/spades-r10.svg'),
  new Card('spades', 10, 'spades/spades-J.svg'),
  new Card('spades', 10, 'spades/spades-Q.svg'),
  new Card('spades', 10, 'spades/spades-K.svg'),
  new Card('hearts', 1, 'hearts/hearts-A.svg'),
  new Card('hearts', 2, 'hearts/hearts-r02.svg'),
  new Card('hearts', 3, 'hearts/hearts-r03.svg'),
  new Card('hearts', 4, 'hearts/hearts-r04.svg'),
  new Card('hearts', 5, 'hearts/hearts-r05.svg'),
  new Card('hearts', 6, 'hearts/hearts-r06.svg'),
  new Card('hearts', 7, 'hearts/hearts-r07.svg'),
  new Card('hearts', 8, 'hearts/hearts-r08.svg'),
  new Card('hearts', 9, 'hearts/hearts-r09.svg'),
  new Card('hearts', 10, 'hearts/hearts-r10.svg'),
  new Card('hearts', 10, 'hearts/hearts-J.svg'),
  new Card('hearts', 10, 'hearts/hearts-Q.svg'),
  new Card('hearts', 10, 'hearts/hearts-K.svg'),
  new Card('diamonds', 1, 'diamonds/diamonds-A.svg'),
  new Card('diamonds', 2, 'diamonds/diamonds-r02.svg'),
  new Card('diamonds', 3, 'diamonds/diamonds-r03.svg'),
  new Card('diamonds', 4, 'diamonds/diamonds-r04.svg'),
  new Card('diamonds', 5, 'diamonds/diamonds-r05.svg'),
  new Card('diamonds', 6, 'diamonds/diamonds-r06.svg'),
  new Card('diamonds', 7, 'diamonds/diamonds-r07.svg'),
  new Card('diamonds', 8, 'diamonds/diamonds-r08.svg'),
  new Card('diamonds', 9, 'diamonds/diamonds-r09.svg'),
  new Card('diamonds', 10, 'diamonds/diamonds-r10.svg'),
  new Card('diamonds', 10, 'diamonds/diamonds-J.svg'),
  new Card('diamonds', 10, 'diamonds/diamonds-Q.svg'),
  new Card('diamonds', 10, 'diamonds/diamonds-K.svg')
]

//Global variables
let playerCounter = 0
let dealerCounter = 0
let drawCardResult = ''
let isGameLive = true
let playerAceCount = 0
let dealerAceCount = 0

//Query Selectors

const hitButton = document.querySelector('.hitButton')
const stayButton = document.querySelector('.stayButton')
const newRoundButton = document.querySelector('.newRound')
const playerCardImage1 = document.querySelector('.player-img1')
const playerCardImage2 = document.querySelector('.player-img2')
const dealerCardImage1 = document.querySelector('.dealer-img1')
const dealerCardImage2 = document.querySelector('.dealer-img2')
const playerTotal = document.querySelector('.player-total')
const dealerTotal = document.querySelector('.dealer-total')
const playerCards = document.querySelector('.player-cards')
const dealerCards = document.querySelector('.dealer-cards')
const resultsDisplay = document.querySelector('body')

//DOM element creations
let results = document.createElement('header')

//Functions

//Chooses a card at random
const drawCard = (array) => {
  drawCardResult = Math.floor(Math.random() * array.length)
}

//Check ace function will add 10 to counter if total < 11
const checkPlayerAce = () => {
  if (playerAceCount != 0 && playerCounter <= 11) {
    playerCounter += 10
  }
}
const checkDealerAce = () => {
  if (dealerAceCount != 0 && dealerCounter <= 11) {
    dealerCounter += 10
  }
}

//Reveals dealers second hand after busting or staying, draws cards until >16
const revealDealerHand = () => {
  drawCard(allCards)
  countingDealerCards(allCards)
  checkDealerAce()
  dealerTotal.innerText = dealerCounter
  dealerCardImage2.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`

  while (dealerCounter < 16) {
    drawCard(allCards)
    countingDealerCards(allCards)
    checkDealerAce()
    dealerTotal.innerText = dealerCounter
    let newDealerCard = document.createElement('div')
    newDealerCard.classList.add('new-card')
    dealerCards.appendChild(newDealerCard)
    newDealerCard.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
  }
}

//Results function
const displayResults = () => {
  results.classList.add('results')
  resultsDisplay.append(results)
  if (playerCounter > 21) {
    results.innerText = 'Busted! You lose this round.'
  } else if (dealerCounter > 21) {
    results.innerText = 'You win! Dealer busted.'
  } else if (playerCounter === dealerCounter) {
    results.innerText = 'Its a tie!'
  } else if (playerCounter === 21) {
    results.innerText = 'Blackjack! You win this round'
  } else if (dealerCounter === 21) {
    results.innerText = 'Dealer has Blackjack. You lose this round'
  } else if (playerCounter > dealerCounter) {
    results.innerText = 'You win!'
  } else if (dealerCounter > playerCounter) {
    results.innerText = 'You lose!'
  }
}

//Hit button event draws random card
const hitResponse = () => {
  if (isGameLive === true && playerCounter < 21) {
    let newPlayerCard = document.createElement('div')
    console.log(newPlayerCard)
    newPlayerCard.classList.add('new-card')
    playerCards.appendChild(newPlayerCard)
    drawCard(allCards)
    newPlayerCard.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
    countingPlayerCards(allCards)
    checkPlayerAce()
    playerTotal.innerText = playerCounter
    if (playerCounter >= 21) {
      displayResults()
    }
  }
}
hitButton.addEventListener('click', hitResponse)

//Totals up player and dealers cards
const countingPlayerCards = (element) => {
  if (typeof element[drawCardResult].cardValue === 'number') {
    playerCounter += element[drawCardResult].cardValue
  }
  if (element[drawCardResult].cardValue === 1) {
    playerAceCount++
  }
}
const countingDealerCards = (element) => {
  if (typeof element[drawCardResult].cardValue === 'number') {
    dealerCounter += element[drawCardResult].cardValue
  }
}

//Start Game function sets up round
const startGame = () => {
  //Dealer gets first card
  isGameLive = true
  drawCard(allCards)
  countingDealerCards(allCards)
  checkDealerAce()
  dealerCardImage1.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`

  //Player gets 2 cards
  drawCard(allCards)
  countingPlayerCards(allCards)
  checkPlayerAce()
  playerTotal.innerText = playerCounter
  playerCardImage1.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
  drawCard(allCards)
  countingPlayerCards(allCards)
  checkPlayerAce()
  playerTotal.innerText = playerCounter
  playerCardImage2.innerHTML = `<img src = './card-deck/images/${allCards[drawCardResult].cardImage}'></img>`
  if (playerCounter >= 21) {
    displayResults()
  }
}

//Stay button event handler
const stayResponse = () => {
  if (isGameLive === true) {
    revealDealerHand(allCards)
    displayResults()
    isGameLive = false
  }
}
stayButton.addEventListener('click', stayResponse)

const clearTable = () => {
  playerAceCount = 0
  dealerAceCount = 0
  playerCounter = 0
  dealerCounter = null
  dealerTotal.innerText = dealerCounter
  results.remove()
  document.querySelectorAll('.new-card').forEach((element) => {
    element.remove()
  })
  playerCardImage1.innerHTML = `<img src = './card-deck/images/backs/blue.svg'></img>`
  playerCardImage2.innerHTML = `<img src = './card-deck/images/backs/blue.svg'></img>`
  dealerCardImage1.innerHTML = `<img src = './card-deck/images/backs/blue.svg'></img>`
  dealerCardImage2.innerHTML = `<img src = './card-deck/images/backs/blue.svg'></img>`
  startGame()
}
newRoundButton.addEventListener('click', clearTable)
