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

//dice buttons
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

//Create an array to store the score totals for each players
let scores = [];
let currentScore;
//Player 1 and 2
let activePlayer;
//Set game state if active or completed game.
let gameActive;

//Initialize game variables
const initGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameActive = true;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

initGame();

//create function to switch players so it can be repeated in code
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  //switch to next player using ternary (like a decode in SQL)
  activePlayer = activePlayer === 0 ? 1 : 0;

  //switch active players with CSS class
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//reset game
newGame.addEventListener('click', function () {
  //set initial conditions
  initGame();
});

//remember, don't use . before the class name for add/removeq
rollDice.addEventListener('click', function () {
  // if true, the roll will work, else is ignored.
  if (gameActive) {
    //generate random roll number
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
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
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (gameActive) {
    //1. add current score to active player score.
    //use scores array for tracking stored scores for either player (0/1)
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    //update player held score using same process as above.
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if score >= 100
    if (scores[activePlayer] >= 10) {
      //prevent further playing of game
      gameActive = false;
      dice.classList.add('hidden');
      //Remember, when using querySelector, it requires .X
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. If not switch to next player
      switchPlayer();
    }
  }
});
