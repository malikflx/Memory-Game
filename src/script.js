// Array to hold all of my cards
let cards = ['fa-usd', 'fa-anchor', 'fa-star', 'fa-bell', 'fa-paper-plane-o', 'fa-anchor', 'fa-diamond', 'fa-glass', 'fa-star', 'fa-child', 'fa-bell', 'fa-paper-plane-o', 'fa-child', 'fa-glass', 'fa-usd', 'fa-diamond'];
let toggledCards = [];
let matchedCards = [];
let matchCount = document.getElementById('matchCount');
let matchScore = 0;
let lock = true;

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
    card.classList.remove('open', 'show', 'match', 'freeze');
  }
}

randomizeDeck();

deck.addEventListener('click', event => {
  const card = event.target;
  if (card.classList.contains('card') && toggledCards.length < 2) {
    toggleCard(card);
    addToggleCard(card);
    card.classList.add('freeze');
    if (toggledCards.length === 2) {
      toggledCards[0].classList.remove('freeze');
      toggledCards[1].classList.remove('freeze');
      matchCheck(card);
    }
  }
  // if (card.classList.contains('open', 'show')) {
  //   card.classList.add('freeze');
  // }
});

function addToggleCard(card) {
  toggledCards.push(card);
}

function toggleCard(card) {
  card.classList.toggle('open');
  card.classList.toggle('show');
}

function matchCheck() {
  if (toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {
    toggledCards[0].classList.toggle('match');
    toggledCards[1].classList.toggle('match');
    toggledCards[0].classList.add('freeze');
    toggledCards[1].classList.add('freeze');
    matchScore++;
    matchedCards.push(toggledCards[0]);
    matchedCards.push(toggledCards[1]);
    console.log(matchedCards.length);
    toggledCards = [];
  } else {
    setTimeout(() => {
      toggleCard(toggledCards[0]);
      toggleCard(toggledCards[1]);
      toggledCards = [];
    }, 1000);
  }
  matchCount.textContent = matchScore;
  gameOver();
}

function gameOver(){
  if (matchedCards.length === 16) {
    alert('Game over, you \'ve won!');
  }
};

//Reset Deck & randomize cards with Reset Button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGame);

function resetGame(){
  randomizeDeck();
  matchScore = 0;
  matchCount.textContent = 0;
  toggledCards = []
};
