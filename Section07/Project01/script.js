'use strict';
console.log(document.querySelector('.message').textContent);

/*
// document.querySelector('.message').textContent;

document.querySelector('.message').textContent = ' 🎉 Correct Number!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 13;

//to get the value entered into the input box.
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

//addEventListener requires two arguments. 1 - what it is listening for,
//2 - what to do when activated. This example uses a function expression.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20; //document.querySelector('.score').textContent;
let highScore = 0;

//funciton to be used to diplay message on HTML page
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //No Input
    //document.querySelector('.message').textContent = ' ⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    //Player wins
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = guess;

    //set highschool for next rounds
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //change the CSS styles if the player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess > secretNumber ? ' 🤷‍♂️ Guess too high' : '🤷 Guess too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
    }
  }
});

//Reset page with Again button.
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
