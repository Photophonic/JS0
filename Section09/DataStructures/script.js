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

//using default values within the object function
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
});

//video 105 spread operator
