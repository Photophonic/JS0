'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // using an object as the argument, att the {} and variable names to
  // destructure the object on the spot to the new variables for the function
  // use = ITEM to set defaults on the inbound.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '100 place',
  }) {
    console.log(
      // calls THIS starterMenu and uses the number as the array index
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your order ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Video 103 destructuring arrays
//to destructure arrays use [] braces

//without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('previous ', a, b, c);

//with destructuring (unpacking) create variables from the array positions.
const [x, y, z] = arr;
console.log('destuctured ', x, y, z);

//to target specific items from an object. to skip, leave a gap.
const [first, , third] = restaurant.categories;

console.log(first, third);

//to swtich order of categories, swap the order of declare variables
const [secondary, , main] = restaurant.categories;
console.log(main, secondary);

//Call the method in the object to return an array of food items to destructure
const [sideDish, mainDish] = restaurant.order(2, 0);
console.log(sideDish, mainDish);

//nested arrays for destructuring
const nested = [2, 3, [5, 6]];
//make an inner array variable group to capture the nested array from nested
const [d, , [e, f]] = nested;

console.log(d, e, f);

//to set default variables for destructuring
const defaultArr = [8, 9];
//place an = SOMETHING to set a default value in case the incoming array is smaller
const [p = 1, q = 1, r = 1] = defaultArr;
console.log(p, q, r);

//video 104 destructing objects
//to destructure objects, use the {} braces and specify the properties as new variables
const { name, categories, openingHours } = restaurant;

//To name our own variable names from existing properties.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//to set default variables when properties might not exist from the object
//can be combined with rename option too (starters)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables for objects
let aa = 111;
let bb = 999;
console.log('Original ', aa, bb);
const obj = { aa: 23, bb: 7, cc: 14 };

// to mutate existing variables from an object, wrap it in ()
({ aa, bb } = obj);

console.log('mutated ', aa, bb);

// nested object destructuring. Target the main object, then the nested opbject
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log('open ', open, 'close ', close);

// calling the function in the object, and passing an object into the arguments
// see restaurant.orderDelivery() above.
restaurant.orderDelivery({
  time: '22:30',
  address: '111 South Cherry',
  mainIndex: 2,
  starterIndex: 2,
});

// using default values within the object function
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
});

// video 105 spread operator

// old way without spread
const arrr = [7, 8, 9];
const oldWay = [1, 2, arr[0], arr[1], arr[2]];
console.log(oldWay);

// array with spread operator.
// make a new array, then when using old array, spread with ...arrayName
// this will unpack the array into the new array's positions
const newWay = [1, 2, ...arrr];
console.log('Spread ', newWay);

// spread can be used to output the individual elements of the array
console.log(...newWay);

// to create a new array with new values of an existing array.
const newMenu = [...restaurant.mainMenu, 'Toast', 'Pop-Tarts'];
console.log(...newMenu);

// the spread operator is similar to destrcuturing but does not create variables.
// can only be user where values are separated by commas.

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

// to join multiple arrays.
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...joinMenu);

// the spead operator works on iterable items. Arrays, strings, maps, sets
// DOES NOT WORK ON OBJECTS!!!
const str = 'Bob Dole';
const letters = [...str, '', 's.'];
console.log(letters);

// create a new array with elemets
const ingredients = ['food', 'food2', 'food3'];
// then call the method in the object to pass in the array elements
restaurant.orderPasta(...ingredients);

// Create a new object using the {} then add new methods to the object
const newRestaurant = { ...restaurant, found: 'Bod Dole', foundedYear: 1998 };
console.log(newRestaurant);

// to copy the new object. Remember, {} not []
const restaurantCopy = { ...newRestaurant };
// rename the place in the copy
restaurantCopy.name = 'ShowBizz Pizza';
console.log(restaurantCopy);
