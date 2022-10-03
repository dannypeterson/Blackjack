//Hit Me and stay button functions
const hitButton = document.querySelector('.hitButton')
const stayButton = document.querySelector('.stayButton')

const hitResponse = () => {
  console.log('You drew another card!')
}

const stayResponse = () => {
  console.log('You decided to stay')
}
hitButton.addEventListener('click', hitResponse)
stayButton.addEventListener('click', stayResponse)

//Creating deck of cards as class
class Card {
  constructor(cardSuit, cardValue) {
    this.cardSuit = cardSuit
    this.cardValue = cardValue
  }
}

const clubsArray = [
  new Card('clubs', 'Ace'),
  new Card('clubs', 2),
  new Card('clubs', 3),
  new Card('clubs', 4),
  new Card('clubs', 5),
  new Card('clubs', 6),
  new Card('clubs', 7),
  new Card('clubs', 8),
  new Card('clubs', 9),
  new Card('clubs', 10),
  new Card('clubs', 'Jack'),
  new Card('clubs', 'Queen'),
  new Card('clubs', 'King')
]
const spadesArray = [
  new Card('spades', 'Ace'),
  new Card('spades', 2),
  new Card('spades', 3),
  new Card('spades', 4),
  new Card('spades', 5),
  new Card('spades', 6),
  new Card('spades', 7),
  new Card('spades', 8),
  new Card('spades', 9),
  new Card('spades', 10),
  new Card('spades', 'Jack'),
  new Card('spades', 'Queen'),
  new Card('spades', 'King')
]
const heartsArray = [
  new Card('hearts', 'Ace'),
  new Card('hearts', 2),
  new Card('hearts', 3),
  new Card('hearts', 4),
  new Card('hearts', 5),
  new Card('hearts', 6),
  new Card('hearts', 7),
  new Card('hearts', 8),
  new Card('hearts', 9),
  new Card('hearts', 10),
  new Card('hearts', 'Jack'),
  new Card('hearts', 'Queen'),
  new Card('hearts', 'King')
]
const diamondsArray = [
  new Card('diamonds', 'Ace'),
  new Card('diamonds', 2),
  new Card('diamonds', 3),
  new Card('diamonds', 4),
  new Card('diamonds', 5),
  new Card('diamonds', 6),
  new Card('diamonds', 7),
  new Card('diamonds', 8),
  new Card('diamonds', 9),
  new Card('diamonds', 10),
  new Card('diamonds', 'Jack'),
  new Card('diamonds', 'Queen'),
  new Card('diamonds', 'King')
]

const allCards = [clubsArray, spadesArray, heartsArray, diamondsArray]
console.log(allCards)
