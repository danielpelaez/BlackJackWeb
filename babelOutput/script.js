"use strict";

//asigno el evento onclick a cada funcion, es lo mismo que hacer onclick en cada button en el html y 
//getelementbyID aca y correr la funcion..es mejor asi porque queda toda la lògica acà.
document.querySelector("#hit-button").addEventListener('click', bjHit);
document.querySelector("#stand-button").addEventListener('click', bjStand);
document.querySelector("#deal-button").addEventListener('click', bjDeal);
var dani;
var test; //creo un objeto que tiene los ID de los divs y de los span de cada box

var blackJackGame = {
  'you': {
    'scoreSpan': '#your-result',
    'div': '#your-box',
    'score': 0
  },
  'dealer': {
    'scoreSpan': '#dealer-result',
    'div': '#dealer-box',
    'score': 0
  },
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  'cardsMap': {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': [1, 11]
  }
}; //creo dos objetos para acceder rapidamente al jugador o al dealer

var YOU = blackJackGame['you'];
var DEALER = blackJackGame['dealer'];
var cards = blackJackGame['cards'];
var hitSound = new Audio('assets/sounds/swish.m4a');
var loseSound = new Audio('assets/sounds/aww.mp3');
var winSound = new Audio('assets/sounds/cash.mp3'); //classes in Javascript (we need the transpiler for old browsers)

/*
class User {
   constructor (){
       score
   }

}  */

function bjHit() {
  var yourCard = randomcard();
  showCard(yourCard, YOU);
  showScore(yourCard, YOU);
}

function bjStand() {
  alert('STAND');
}

function bjDeal() {
  var dealerCard = randomcard();
  showCard(dealerCard, DEALER);
  showScore(dealerCard, DEALER);
}

function randomcard() {
  return cards[Math.floor(Math.random() * 13)];
}

function showCard(card, player) {
  var cardImage = document.createElement('img');
  cardImage.src = 'assets/images/' + card + '.png';
  cardImage.height = 140;
  document.querySelector(player['div']).appendChild(cardImage);
  hitSound.play();
}

function showScore(card, player) {
  player['score'] += blackJackGame['cardsMap'][card];
  document.querySelector(player['scoreSpan']).textContent = player['score'];
}

console.log("cambiando para probar commit en github");
console.log("probando rama_1");