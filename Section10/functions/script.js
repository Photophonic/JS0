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

//call funcation to push the information to the array
//createBooking('LH123', 5);

//cannot skip parameters, but can manually set to undefined will load defaults
//createBooking('2J374', undefined, 88);

//video 129 Passing Arguments
const flight = 'LH2';
const passenger = {
  name: 'Bod Dole',
  passport: 83277181,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 83277181) {
    console.log('Check In ' + flightNum);
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(passenger);

console.log(passenger);

checkIn(flight, passenger);
console.log(passenger);