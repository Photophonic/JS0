///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉,  \n
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// add an event listener on the button element to listen for click events.
document.querySelector('button').addEventListener('click', function () {
  // create variable to contain the value of the textarea field.
  const text = document.querySelector('textarea').value;

  // use the split string function on text, use the new line character \n
  // this will create an array of elements from each item in the split.
  const rows = text.split('\n');
  console.log(rows);

  // use for of loop to loop over the rows array
  // use x.entries() method to gain access to the loop iterator i
  // destructure the loop's iterator into index and the entry [i,row]
  for (const [i, row] of rows.entries()) {
    // on the row iteration, chain methods to manipulate the current row.
    // lowercase, trim to remove padding, split on the _
    const [first, second] = row.toLowerCase().trim().split('_');
    // create new output variable to hold the modified version.
    // use .replace() method on the string to replace the position 0 character with Upper.
    const output = `${first}${second.replace(
      second[0],
      // remember to use () to call a method
      second[0].toUpperCase()
    )} `;
    // use .repeate and the iterator to do fun stuff with the check
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
