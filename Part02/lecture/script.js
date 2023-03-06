/*
let mweight = 95;
let mheight = 1.88;

let jweight = 85;
let jheight = 1.76;

let mbmi = mweight / (mheight * mheight);
let jbmi = jweight / (jheight * mheight);

console.log(mbmi);
console.log(jbmi);

if (mbmi > jbmi) {
  console.log(`${mbmi} Mark's BMI is higher than John's!`);
} else {
  console.log(`${jbmi} John's BMI is higher than MArk's!`);
}
*/

"use strict";

function bmiCalc(mass, height) {
  let bmi = mass / (height * height);
  //return `Your BMI is ${bmi}`;
  return bmi;
}

const markBmi = bmiCalc(95, 1.88);
const johnBmi = bmiCalc(85, 1.76);

if (markBmi > johnBmi) {
  console.log(`${markBmi} Mark's BMI is higher than John's!`);
} else {
  console.log(`${johnBmi} John's BMI is higher than MArk's!`);
}
