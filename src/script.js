// Array to hold all of my cards
let cards = ['fa-usd', 'fa-anchor', 'fa-star', 'fa-bell', 'fa-paper-plane-o', 'fa-anchor', 'fa-diamond', 'fa-glass', 'fa-star', 'fa-child', 'fa-bell', 'fa-paper-plane-o', 'fa-child', 'fa-glass', 'fa-usd', 'fa-diamond'];
let toggledCards = [];
let matchedCards = [];
let matchCount = document.getElementById('matchCount');
let movesCount = document.getElementById('movesCount');
let matchScore = 0;
let moves = 0;
let lock = true;
let modal = document.getElementById('myModal');
let modalBtn = document.getElementById('myBtn');
let closeModal = document.getElementsByClassName('close')[0];
let clock = document.getElementById('clock');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let startGame = 0;
let timerInterval;

function startTimer() {
  let minutesCount = 0;
  let secondsCount = 0;
  timerInterval = setInterval(function(){
    secondsCount++
    if (secondsCount < 10) {
      seconds.textContent = "0" + secondsCount;
    } else if (secondsCount === 60) {
      minutesCount++;
      minutes.textContent = minutesCount;
      if (minutesCount < 10) {
        minutes.textContent = "0" + minutesCount;
      }
      seconds.textContent = "00";
      secondsCount = 0;
    } else {
      seconds.textContent = secondsCount;
    }
  }, 1000);
};

function stopGame() {
  clearInterval(timerInterval);
}

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
  if (startGame == 0) {
    startTimer();
    startGame++;
  }
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
    moves++
    matchedCards.push(toggledCards[0]);
    matchedCards.push(toggledCards[1]);
    console.log(matchedCards.length);
    toggledCards = [];
  } else {
    moves++
    toggledCards[0].classList.toggle('nomatch');
    toggledCards[1].classList.toggle('nomatch');
    setTimeout(() => {
      toggledCards[0].classList.toggle('nomatch');
      toggledCards[1].classList.toggle('nomatch');
      toggleCard(toggledCards[0]);
      toggleCard(toggledCards[1]);
      toggledCards = [];
    }, 1000);
  }
  matchCount.textContent = matchScore;
  movesCount.textContent = moves;
  gameOver();
}

function gameOver(){
  if (matchedCards.length === 16) {
      modal.style.display = 'block';
      stopGame();
    closeModal.onclick = function() {
      resetGame();
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        resetGame();
      }
    };
  }
};

modalBtn.onclick = function() {
  modal.style.display = 'block';
  stopGame();
}

closeModal.onclick = function() {
  resetGame();
}

window.onclick = function(event) {
  if(event.target == modal) {
    resetGame();
  }
};

//Reset Deck & randomize cards with Reset Button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGame);

const playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click', resetGame);

function resetGame(){
  randomizeDeck();
  stopGame();
  startGame = 0;
  minutes.textContent = "00";
  seconds.textContent = "00";
  matchScore = 0;
  matchCount.textContent = 0;
  moves = 0;
  movesCount.textContent = 0;
  toggledCards = []
  modal.style.display = 'none';
  matchedCards = [];
};
