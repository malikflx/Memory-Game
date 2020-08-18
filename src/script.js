let card = document.getElementsByClassName("card");
let cardsArray = ['fa-usd', 'fa-usd'];

const buttonReset = document.getElementsByClassName('reset');

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
};

var flipCard = function(){
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
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

