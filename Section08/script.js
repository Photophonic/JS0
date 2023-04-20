"use strict";

//hoisting with variables
console.log(me);

//will error since they have not yet been initialized in scope. In TDZ.
/*
console.log(job);
console.log(year);
*/

var me = "Bob Dole";
let job = "Teacher";
const year = 1980;

//hoisting functions

console.log(addDecl(1, 6));
//these two will error since they have not been initialized. In TDZ.
/*
console.log(addExpr(1, 9));
console.log(addArr(2, 1));
*/

//function declaration
function addDecl(a, b) {
  return a + b;
}

//function expression
const addExpr = function (a, b) {
  return a + b;
};

//arrow function
const addArr = (a, b) => a + b;

//THIS keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  //using strict mode this will return as undefined
  console.log(this);
};

calcAge(1980);

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  //This will be the window since THIS is not available on arrow fucntions
  console.log(this);
};

calcAgeArrow(1981);

//THIS will show the object calling the method
const bobDole = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    //will caclulate based off of the year in THIS object
    console.log(2023 - this.year);
  },
};

bobDole.calcAge();

const person2 = {
  year: 2017,
};

//this action will copy the method from one object to the next
person2.calcAge = bobDole.calcAge;

person2.calcAge();
