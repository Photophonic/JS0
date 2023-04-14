'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Since we're selecting an element, use the following instead of querySelector
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

//dice image
const dice = document.querySelector('.dice');

//Create an array to store the score totals for each players
const scores = [0, 0];
let currentScore = 0;
//Player 1 and 2
let activePlayer = 0;

//dice buttons
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

//set initial conditions
score0.textContent = 0;
score1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;

//remember, don't use . before the class name for add/removeq
dice.classList.add('hidden');

rollDice.addEventListener('click', function () {
  //generate random roll number
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  //Remove hidden dice class on image
  dice.classList.remove('hidden');
  //Set dice image using substitution and random variable
  dice.src = `dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    //add roll to score
    currentScore += diceRoll;
    //use ${} to dynamically update player based on activePlayer variable
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //reset scores to 0
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    //switch to next player using ternary (like a decode in SQL)
    activePlayer = activePlayer === 0 ? 1 : 0;

    //switch active players with CSS class
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
