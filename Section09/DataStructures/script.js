'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
//Object Literals
const openingHours = {
  //Can compute the variable name vs typing. Use array position for Thur
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals. Can simply add another object
  openingHours,

  //ES6 enhanced methods for functionsin objects. Remove the function and :
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //feed in an object as the single parameter, along with default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    addess,
  }) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      addess
    );
  },

  orderPasta: function (item1, item2, item3) {
    console.log('Food ' + item1, item2, item3);
  },
};

// Optional Chaining
// This throws an error since Monday is not defined.
// console.log(restaurant.openingHours.mon.open);

// Chaining ?. will check if the property to the right of the question mark exists.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.mon?.close);
//multiple chains, will evaluate each item along the chain
console.log(restaurant.openingHours?.mon?.close);

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(day, open);
}

//methods, check to see if the method exists
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //Looping Arrays
// //using spread to unpack the array into a new array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //using the new for of loop with array. Useful to get current element, not index.
// for (const item of menu) {
//   console.log(item);
// }

// //to get the index of an item. Use the entries method on the array.
// for (const item of menu.entries()) {
//   console.log(item);
// }

// //to see the entries method on the array.
// console.log(menu.entries());

// // using destructuring to get the index and array item.
// for (const [i, el] of menu.entries()) {
//   console.log(i, el);
// }

// const food1 = {
//   name: 'Pizza House',
//   //numGuest: 20,
//   numGuest: 0,
// };

// const food2 = {
//   name: 'Pizza Shack',
//   owner: 'Bob Dole',
// };

// //assign a default value based on value from the first one if true else 10.
// // food1.numGuest = food1.numGuest || 10;
// // food2.numGuest = food1.numGuest || 10;

// //Or assignment operator
// food1.numGuest ||= 10;
// food2.numGuest ||= 10;

// food1.numGuest ??= 10;
// food2.numGuest ??= 10;
// console.log(food1.numGuest, food2.numGuest);

// //AND will reutnr first falsy
// food1.owner = food1.owner && 'NAME';
// food2.owner = food2.owner && 'NAME';

// food1.owner &&= 'NAME';
// food2.owner &&= 'NAME';

// console.log(food1.owner, food2.owner);

// restaurant.numGuests = 0;

// //short curcuit
// //and
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// //or
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //Nullish
// //works around the idea of null or undifined values instead of falsy
// const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

// //Rest to pack items into an array
// const arr = [7, 8, 9];
// // using spread
// const newArr = [1, 2, ...arr];

// //Using Rest assignes the elements to the ...X array
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// //combining rest and spread and skipping an item
// const [c, , d, ...men] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// //function example with rest parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// };

// //Using Spread Operator, used to unpack arrays and objects
// const arr = [7, 8, 9];

// //don't do this to assign arr to the new array
// const badArr = [1, 2, arr[0], arr[1], arr[2]];

// //this is the proper way to create a new array and add arr.
// const goodArr = [1, 2, ...arr];
// console.log(goodArr);

// const newMenu = [...restaurant.mainMenu, 'Tacos'];

// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //to join two arrays
// const joinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinedMenu);

// const str = 'BobDole';
// const letters = [...str];
// console.log(letters);

// const ingredients = ['food 1', 'food 2', 'food 3'];

// restaurant.orderPasta(...ingredients);

// //to copy Onjects, changes to the copy do not modify the original
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Yummy Place';

// console.log(restaurantCopy.name, restaurant.name);

// //Object Destructure
// //will create three new variables based on the restaurant object
// const { name, openingHours, categories } = restaurant;

// restaurant.orderDelivery({
//   time: '22:30',
//   addess: '111 South Cherry',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// //This will allow you to set the names for the new variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// //set default values and names for object
// const { menu = [], starterMenu: starters = [] } = restaurant;

// //mutating variables in objects
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// //Using () allows you to assign to existing variables
// ({ a, b } = obj);

// //nested objects
// const {
//   fri: { open, close },
// } = openingHours;

// Destructuring Arrays
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //destructuring array on the right (arr)
// const [x, y, z] = arr;

// //willl only pull the first two items from this group.
// const [first, second] = restaurant.categories;

// //this will skip the second item in the list
// let [main, , secondary] = restaurant.categories;

// //to switch variables the long way.
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// //using destruct array to swap around
// [main, secondary] = [secondary, main];

// //assign the return values from the object's method to variables.
// const [starter, mainMeal] = restaurant.order(2, 0);

// console.log(starter, mainMeal);

// //example of how to capture variables in nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

// //default values in the event you're unsure of length
// const [p = 1, q = 1, r = 1] = [8, 9];
