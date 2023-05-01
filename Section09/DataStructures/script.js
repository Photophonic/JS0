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

  order: function (starterIndex, mainIndex) {
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
};

restaurant.orderDelivery({
  time: '22:30',
  addess: '111 South Cherry',
  mainIndex: 2,
  starterIndex: 1,
});

//Object Destructure
//will create three new variables based on the restaurant object
const { name, openingHours, categories } = restaurant;

//This will allow you to set the names for the new variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//set default values and names for object
const { menu = [], starterMenu: starters = [] } = restaurant;

//mutating variables in objects
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

//Using () allows you to assign to existing variables
({ a, b } = obj);

//nested objects
const {
  fri: { open, close },
} = openingHours;

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
