// Array to hold all of my cards
cards = ['fa-usd', 'fa-anchor', 'fa-star', 'fa-bell', 'fa-paper-plane-o', 'fa-anchor', 'fa-diamond', 'fa-glass', 'fa-star', 'fa-child', 'fa-bell', 'fa-paper-plane-o', 'fa-child', 'fa-glass', 'fa-usd', 'fa-diamond'];

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Set up the event listener for a card.

const deck = document.querySelector('.deck');

function randomizeDeck() {
  const nonShuffledCards = Array.from(document.querySelectorAll('.deck li'));
  const shuffledCards = shuffle(nonShuffledCards);
  for (card of shuffledCards) {
    deck.appendChild(card);
  }
}

randomizeDeck();

deck.addEventListener('click', event => {
  const card = event.target;
  if (card.classList.contains('card')) {
    toggleCard(card);
  }
})

function toggleCard(card) {
  card.classList.toggle('open');
  card.classList.toggle('show');
}

//Reset Deck with Reset Button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', randomizeDeck);