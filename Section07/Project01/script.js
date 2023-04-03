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
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
  document.querySelector('.number').textContent = guess;
});
