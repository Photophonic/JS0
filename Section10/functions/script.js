'use strict';

//Video 128 Default Parameters

// //Before ES6
// //create empty array
// const bookings = [];

// //create a function to create an object with booking info then pass to array
// const createBooking = function (flightNum, numPassengers, price) {
//   //If Undefined (falsy value), can use OR || to set a default
//   numPassengers ||= 1;
//   price ||= 99;
//   //use enhance object literal syntax
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);

//   //push the information into the array
//   bookings.push(booking);
// };

// //call funcation to push the information to the array
// //This will set the second two items to undefined since no info profided.
// createBooking('LH123');
// console.log(bookings);

//Post ES6 Enhancements
//create empty array
const bookings = [];

//create a function to create an object with booking info then pass to array
//ES6 default value settings, can also include expressions or other values
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //use enhance object literal syntax
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);

  //push the information into the array
  bookings.push(booking);
};

//call function to push the information to the array
//createBooking('LH123', 5);

//cannot skip parameters, but can manually set to undefined will load defaults
//createBooking('2J374', undefined, 88);

//video 129 Passing Arguments
const flight = 'LH234';
const person = {
  name: 'Bob Dole',
  passport: 74612652,
};

const checkIn = function (flightNum, passenger) {
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 74612652) {
    console.log('Welcome aboard ' + passenger.name);
  } else {
    console.log('Nice Try.');
  }
};

checkIn(flight, person);
console.log(flight);
console.log(person);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(person);
console.log(person.passport);

checkIn(flight, person);

//video 130 & 131 higher order functions
/*
A higher order function is on that receives a function as an argument, that 
returns a new function as a result, or both. There are no actual first class
functions, this is a concept.
*/

//function takes in a string and removes spaces, converts to lowercase.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// returns bigbagbash
//console.log(oneWord('Big Bag Bash'));

//function to upper first word
const upperFirstWord = function (str) {
  //destructure the string based on space and assign to array elements
  const [first, ...others] = str.split(' ');
  //return the modifed first element, then join with the rest.
  return [first.toUpperCase(), ...others].join(' ');
};

// returns BIG bag bash
//console.log(upperFirstWord('big bag bash'));

const transform = function (str, fn) {
  console.log(str);
  //pass in the string into our passed in function to do work.
  console.log(`Transformed string: ${fn(str)}`);
  //this will show the method on the fn function that did the work.
  console.log(`Transformed by: ${fn.name}`);
};

//example on how to call this function
transform('This is a string.', upperFirstWord);

//JS uses callback functions a lot
const high5 = function () {
  console.log('high five!');
};

document.body.addEventListener('click', high5);
['bob', 'dole', 'bag'].forEach(high5);

// video 132 - returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeting = greet('Hey');
greeting('Bob');

greet('Hello')('Dole');

//Whaaa?????
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//more on this topic later in the course
greetArr('Morning')('Joe');

// video 133 call and apply method
//create a new object
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //use ES6 enhanced function to create message
  book(fightNumber, name) {
    console.log(
      `${name} books a seat on ${this.airline} flight ${this.iataCode}${fightNumber}`
    );
    //push the new flight to the object's array bookings
    this.bookings.push({ flight: `${this.iataCode}${fightNumber}`, name });
  },
};

const book = lufthansa.book;

lufthansa.book(239, 'Bob Dole');
lufthansa.book(635, 'Peet Sax');
console.log(lufthansa.bookings);

const erowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book,
};

erowings.book(847, 'Sam Smith');
