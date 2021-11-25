/*
Task 3 - Some
const someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23]
You have an array which contains some numbers. You would like to find out if any of the numbers are multiples of the following numbers:

3
5
60
90
👉 3a. Declare four new variables, one for each of the numbers above. Use the .some() method to assign a value of true or false (a boolean) to each of the variables, depending on whether there is at least one multiple of that number in the someNumbers array.
*/

let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

//Declare four new variables , one for each of the numbers above
let three = false;
let five = false;
let sixty = false;
let ninety = false;

//Use the .some() method to assign a value of true or false (a boolean) to each of the variables
function isThree(three) {
  return three === 3;
}
function isFive(five) {
  return five === 5;
}
function isSixty(sixty) {
  return sixty === 60;
}
function isNinety(ninety) {
  return ninety === 90;
}

let atLeastOneThree = someNumbers.some(isThree);
let atLeastOneFive = someNumbers.some(isFive);
let atLeastOneSixty = someNumbers.some(isSixty);
let atLeastOneNinety = someNumbers.some(isNinety);
console.log(atLeastOneThree);
console.log(atLeastOneFive);
console.log(atLeastOneSixty);
console.log(atLeastOneNinety);
