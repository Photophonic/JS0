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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = document.querySelector('.score').textContent;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //No Input
    document.querySelector('.message').textContent = ' ⛔ No Number!';
  } else if (score > 1) {
    if (guess === secretNumber) {
      //Player wins
      document.querySelector('.message').textContent = ' 🎉 Correct Number!';
      document.querySelector('.number').textContent = guess;
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      //change the CSS styles if the player wins
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
      //too high
      document.querySelector('.message').textContent = ' 🤷‍♂️ Guess too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      //too low
      document.querySelector('.message').textContent = ' 🤷 Guess too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = ' Game Over';
  }

  //document.querySelector('.number').textContent = guess;
});
