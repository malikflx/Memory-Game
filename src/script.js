let card = document.getElementsByClassName("card");
let cards = [...card];
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
};

var flipCard = function(){
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}