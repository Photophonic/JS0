///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
// create a new array named events. The value will be a new array with the spread operator.
// use the Set(maps.values()) to populate the array with unique entires.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// call the map, use .delete and pass in the key to delete it
gameEvents.delete(64);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// get the final key from the map gameEvents
// maps.size will return the lenght of the map object
// calc time average based on the new variables
const gameTime = [...gameEvents.keys()];
const average = gameTime[gameTime.length - 1] / gameEvents.size;

console.log(`An event happened, on average, every ${average} minute`);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:      [FIRST HALF] 17: ⚽️ GOAL
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'First' : 'Second';
  console.log(`${half} Half ${key}: ${value}`);
}
