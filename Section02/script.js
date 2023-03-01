const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 188;

let markBmi = massMark / (heightMark * heightMark);
let johnBmi = massJohn / (heightJohn * heightJohn);

const markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);
