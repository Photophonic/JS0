'use strict';

//Since we're selecting an element, use the following instead of querySelector
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

//dice image
const dice = document.querySelector('.dice');

let currentScore = 0;

//dice buttons
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

//set initial conditions
score0.textContent = 0;
score1.textContent = 0;

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
    console.log(currentScore);
  } else {
    //switch to next player
    currentScore = 0;
    console.log(currentScore);
  }
});
